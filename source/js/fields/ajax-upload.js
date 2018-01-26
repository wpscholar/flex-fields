function isAdvancedUpload() {
    const el = document.createElement('div');
    return (('draggable' in el) || ('ondragstart' in el && 'ondrop' in el)) && 'FormData' in window && 'FileReader' in window;
}

function imageClickHandler(el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        window.flexFields.events.dispatch('removeImage', {
            id: el.querySelector('input').value,
            target: el,
            fieldType: 'ajax-upload',
            action: 'remove-image'
        }, el);
        el.parentNode.removeChild(el);
    });
}

Array
    .from(document.querySelectorAll('.flex-field-ajax-upload'))
    .forEach(
        (field) => {

            const maxUploads = parseInt(field.querySelector('.flex-field-ajax-upload__max-uploads').textContent, 10);
            const imageSize = field.querySelector('.flex-field-ajax-upload__image-size').textContent;

            const input = field.querySelector('input[type="file"]');
            const dropZone = field.querySelector('.flex-field-ajax-upload__drop-zone');
            const gallery = field.querySelector('.flex-field-ajax-upload__gallery');

            Array.from(gallery.querySelectorAll('a')).forEach(function (img) {
                imageClickHandler(img);
            });

            const imageTemplate = field.querySelector('.flex-template');

            imageTemplate.parentNode.removeChild(imageTemplate);
            imageTemplate.removeAttribute('hidden');
            imageTemplate.classList.remove('template');

            const addImage = function (id, src) {
                const template = imageTemplate.cloneNode(true);
                template.querySelector('img').setAttribute('src', src);
                template.querySelector('input').value = id;
                gallery.appendChild(template);
                imageClickHandler(template);
            };

            const count = function () {
                return gallery.querySelectorAll('a').length;
            };

            const maybeDisableField = function () {
                if (count() >= maxUploads) {
                    input.setAttribute('disabled', 'disabled');
                    dropZone.classList.add('--is-disabled');
                }
            };

            const fileSelectHandler = function (e) {

                dropZone.classList.add('--is-uploading');

                const files = e.target.files || e.dataTransfer.files;

                const totalFileCount = files.length + count();

                if (totalFileCount <= maxUploads) {
                    Array.from(e.target.files || e.dataTransfer.files).forEach(file => {

                        const reader = new FileReader();

                        if (file.type.indexOf('image') === 0) {
                            reader.onload = function (e) {
                                reader.readAsDataURL(file);
                            }
                        }

                        if (file.type.indexOf('text') === 0) {
                            reader.onload = function (e) {
                                reader.readAsText(file);
                            }
                        }

                        const xhr = new XMLHttpRequest();
                        if (xhr.upload) {

                            xhr.open('POST', window.flexFields.restUrl + 'wp/v2/media', true);
                            xhr.responseType = 'json';

                            xhr.onload = function (e) {
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    console.log(xhr, e);
                                    dropZone.classList.remove('--is-uploading');
                                    dropZone.classList.add('--is-success');
                                    setTimeout(function () {
                                        dropZone.classList.remove('--is-success');
                                    }, 2000);
                                    addImage(xhr.response.id, xhr.response.media_details.sizes[imageSize].source_url);
                                    maybeDisableField();
                                } else {
                                    dropZone.classList.remove('--is-uploading');
                                    dropZone.classList.add('--is-error');
                                    setTimeout(function () {
                                        dropZone.classList.remove('--is-error');
                                    }, 2000);
                                }
                            };

                            xhr.onerror = function (e) {
                                console.log('Whoops!', e);
                                dropZone.classList.remove('--is-uploading');
                                dropZone.classList.add('--is-error');
                                setTimeout(function () {
                                    dropZone.classList.remove('--is-error');
                                }, 2000);
                            };

                            xhr.setRequestHeader('X-WP-Nonce', window.flexFields.restNonce);
                            xhr.setRequestHeader('Content-Disposition', 'attachment; filename="' + file.name + '"');
                            xhr.send(file);

                        }

                    });
                } else {
                    dropZone.classList.remove('--is-uploading');
                    dropZone.classList.add('--is-max-upload');
                    dropZone.classList.add('--is-error');
                    setTimeout(function () {
                        dropZone.classList.remove('--is-max-upload');
                        dropZone.classList.remove('--is-error');
                    }, 3000);
                }

            };

            if (isAdvancedUpload()) {

                maybeDisableField();

                input.addEventListener('change', fileSelectHandler);

                ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
                    .forEach(event => dropZone.addEventListener(event, function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }));

                ['dragover', 'dragenter']
                    .forEach(event => dropZone.addEventListener(event, function () {
                        dropZone.classList.add('--is-active');
                    }));

                ['dragleave', 'dragend', 'drop']
                    .forEach(event => dropZone.addEventListener(event, function () {
                        dropZone.classList.remove('--is-active');
                    }));

                dropZone.addEventListener('drop', fileSelectHandler);

                field.classList.add('--has-advanced-upload');
            }

        }
    );