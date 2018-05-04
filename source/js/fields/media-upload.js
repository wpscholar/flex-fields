import { MediaUploadField } from "../classes/MediaUploadField";

Array
	.from( document.querySelectorAll( '.flex-field-media-upload' ) )
	.map( el => new MediaUploadField( el ) );
