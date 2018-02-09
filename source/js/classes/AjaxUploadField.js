import decode from 'lodash.unescape';

import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class AjaxUploadField extends Field {

    constructor(el) {
        super(el);

        const template = el.querySelector('.flex-template');

        // Remove template from DOM (to avoid submitting invalid data with form)
        template.parentNode.removeChild(template);

        // Make some adjustments to template
        template.removeAttribute('hidden');
        template.classList.remove('flex-template');

        this._config = JSON.parse(decode(el.getAttribute('data-config')));
        this._template = template.cloneNode(true);

        if (this.isAdvancedUpload) {

            // Disable field if the max upload count has already been met.
            if (this.count >= this.maxUploads) {
                this.disable();
            }

            // Setup file handler for input field
            this.input.addEventListener('change', this.fileSelectHandler.bind(this));

            // Setup drag and drop events
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
                .forEach(event => this.dropZone.addEventListener(event, e => {
                    e.stopPropagation();
                    e.preventDefault();
                }));

            ['dragover', 'dragenter']
                .forEach(event => this.dropZone.addEventListener(event, () => {
                    this.dropZone.classList.add('--is-active');
                }));

            ['dragleave', 'dragend', 'drop']
                .forEach(event => this.dropZone.addEventListener(event, () => {
                    this.dropZone.classList.remove('--is-active');
                }));

            this.dropZone.addEventListener('drop', this.fileSelectHandler.bind(this));

            // Add class to trigger display of advanced features
            this.el.classList.add('--has-advanced-upload');

        }

        // Setup click handlers for any pre-existing images in gallery
        this.items.forEach(el => {
            el.addEventListener('click', this.onClickRemoveHandler.bind(this));
        });
    }

    add(json, file) {

        const template = this.template;
        const span = template.querySelector('span');

        const id = json.id;

        if (this.fileTypeMatches(file, 'image')) {
            const img = document.createElement('img');
            let src = json.source_url;
            if (json.media_details.sizes[this.imageSize]) {
                src = json.media_details.sizes[this.imageSize].source_url;
            }
            img.setAttribute('src', src);
            span.appendChild(img);
        } else {
            span.textContent = file.name;
        }

        template.querySelector('input').value = id;
        this.gallery.appendChild(template);
        template.addEventListener('click', this.onClickRemoveHandler.bind(this));
        this.dispatch('add', {target: template});
    }

    disable() {
        if (!this.isDisabled) {
            this.input.setAttribute('disabled', 'disabled');
            this.dropZone.classList.add('--is-disabled');
        }
    }

    enable() {
        if (this.isDisabled) {
            this.input.removeAttribute('disabled');
            this.dropZone.classList.remove('--is-disabled');
        }
    }

    fileExtensionMatches(file, ext) {
        return this.getFileExtension(file) === ext.toLowerCase();
    }

    fileSelectHandler(e) {

        this.dropZone.classList.add('--is-uploading');

        const files = Array.from(e.target.files || e.dataTransfer.files);

        const totalFileCount = files.length + this.count;

        if (totalFileCount <= this.maxUploads) {

            files.forEach(file => {

                const reader = new FileReader();

                if (this.fileTypeMatches(file, 'image')) {
                    reader.onload = function (e) {
                        reader.readAsDataURL(file);
                    }
                }

                if (this.fileTypeMatches(file, 'text')) {
                    reader.onload = function (e) {
                        reader.readAsText(file);
                    }
                }

                const xhr = new XMLHttpRequest();
                if (xhr.upload) {

                    xhr.open('POST', flexFields.restUrl + 'wp/v2/media', true);
                    xhr.responseType = 'json';

                    xhr.onload = (e) => {
                        if (xhr.status >= 200 && xhr.status < 400) {
                            this.dropZone.classList.remove('--is-uploading');
                            this.dropZone.classList.add('--is-success');
                            setTimeout(() => {
                                this.dropZone.classList.remove('--is-success');
                            }, 2000);
                            this.add(xhr.response, file);
                            // Disable field if the max upload count has already been met.
                            if (this.count >= this.maxUploads) {
                                this.disable();
                            }
                        } else {
                            this.dropZone.classList.remove('--is-uploading');
                            this.dropZone.classList.add('--is-error');
                            setTimeout(() => {
                                this.dropZone.classList.remove('--is-error');
                            }, 2000);
                        }
                    };

                    xhr.onerror = (e) => {
                        this.dropZone.classList.remove('--is-uploading');
                        this.dropZone.classList.add('--is-error');
                        setTimeout(() => {
                            this.dropZone.classList.remove('--is-error');
                        }, 2000);
                    };

                    xhr.setRequestHeader('X-WP-Nonce', flexFields.restNonce);
                    xhr.setRequestHeader('Content-Disposition', 'attachment; filename="' + file.name + '"');
                    xhr.send(file);

                }

            });

        } else {

            this.dropZone.classList.remove('--is-uploading');
            this.dropZone.classList.add('--is-max-upload');
            this.dropZone.classList.add('--is-error');
            setTimeout(() => {
                this.dropZone.classList.remove('--is-max-upload');
                this.dropZone.classList.remove('--is-error');
            }, 3000);

        }

    }

    fileTypeMatches(file, type) {
        return file.type.indexOf(type) === 0;
    }

    fileMimeTypeMatches(file, mimetype) {
        return file.type === mimetype;
    }

    getFileExtension(file) {
        return file.name.split('.').pop().toLowerCase();
    }

    onClickRemoveHandler(e) {
        e.preventDefault();

        const target = e.currentTarget;

        this.dispatch('remove', {
            id: target.querySelector('input').value,
            target
        });

        target.parentNode.removeChild(target);

        // Enable field if the max upload count has already been met.
        if (this.count < this.maxUploads) {
            this.enable();
        }
    }

    get count() {
        return this.gallery.querySelectorAll('a').length;
    }

    get dropZone() {
        return this.el.querySelector('.flex-field-ajax-upload__drop-zone');
    }

    get gallery() {
        return this.el.querySelector('.flex-field-ajax-upload__gallery');
    }

    get imageSize() {
        return this._config.imageSize;
    }

    get input() {
        return this.el.querySelector('input[type="file"]');
    }

    get isAdvancedUpload() {
        const el = this.el;
        return (('draggable' in el) || ('ondragstart' in el && 'ondrop' in el)) && 'FormData' in window && 'FileReader' in window;
    }

    get isDisabled() {
        return this.input.hasAttribute('disabled');
    }

    get items() {
        return Array.from(this.gallery.children);
    }

    get maxUploads() {
        return parseInt(this._config.maxUploads || 1, 10);
    }

    get template() {
        return this._template.cloneNode(true);
    }

}

flexFields.addFieldClass(AjaxUploadField);