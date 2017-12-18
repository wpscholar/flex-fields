<?php
/**
 * @var \wpscholar\TemplateX $x
 */

$fieldValue = $x->get( 'value' );
$optionValue = $x->get( 'option.value' );
$optionLabel = $x->get( 'option.label' );
$selected = is_array( $fieldValue ) ? in_array( $optionValue, $fieldValue, false ) : $fieldValue == $optionValue;

?>
<option <?php selected( $selected ); ?>
        value="<?php echo esc_attr( $optionValue ); ?>"><?php echo esc_html( $optionLabel ); ?></option>