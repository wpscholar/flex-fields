import { Field } from "./Field";
import { flexFields } from "./FlexFields";

export class MediaUploadField extends Field {

	constructor( el ) {

		super( el );

		// Setup our custom media upload modal
		this.frame = wp.media( {
			title: 'Set Featured Image',
			button: {
				text: 'Select'
			},
			multiple: false
		} );

		this.frame.on( 'select', () => {

			// Get media attachment details from the frame state
			const attachment = this.frame.state().get( 'selection' ).first().toJSON();

			// Set field value
			this.value = attachment.id || '';

			// Set image source
			this.setImageSource( (attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url) || '' );

		} );

		// Add click handler for the "Add Image" button.
		this.addButton.addEventListener( 'click', ( e ) => {
			e.preventDefault();
			this.frame.open();
		} );

		// Add click handler for the "Remove Image" button.
		this.removeButton.addEventListener( 'click', ( e ) => {
			e.preventDefault();
			this.value = '';
		} );

		// Toggle display of Add/Remove buttons
		this.toggleAddButton();
		this.toggleRemoveButton();
		this.toggleGallery();

	}

	toggleAddButton() {
		this.addButton.hidden = Boolean( this.input.value );
	}

	toggleRemoveButton() {
		this.removeButton.hidden = Boolean( ! this.input.value );
	}

	toggleGallery() {
		this.gallery.hidden = Boolean( ! this.input.value );
	}

	setImageSource( src ) {
		this.image.setAttribute( 'src', src );
	}

	get gallery() {
		return this.el.querySelector( '.flex-field-gallery' );
	}

	get image() {
		return this.el.querySelector( 'img' );
	}

	get input() {
		return this.el.querySelector( 'input[type="hidden"]' );
	}

	get addButton() {
		return this.el.querySelector( '[data-action="add"]' );
	}

	get removeButton() {
		return this.el.querySelector( '[data-action="remove"]' );
	}

	get value() {
		return this.input.value;
	}

	set value( value ) {
		if ( ! value ) {
			this.setImageSource( '' );
		}
		this.input.value = value;
		this.toggleAddButton();
		this.toggleRemoveButton();
		this.toggleGallery();
	}

}

flexFields.addFieldClass( MediaUploadField );
