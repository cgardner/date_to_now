<?php 
$fields = _date_to_now_get_fields($node->type);
$first_field = array_shift($fields);
print l(t('Set to Now'), 'system/date_to_now', array(
  'attributes' => array(
    'data-nid'   => $node->nid,
    'data-field' => $first_field['field_name'],
    'class'      => array('date-to-now'),
  ),
)); ?>
