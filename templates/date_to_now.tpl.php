<?php 
$fields = _date_to_now_get_fields($node->type);
print l(t('Set to Now'), 'system/date_to_now', array(
  'attributes' => array(
    'data-nid'   => $node->nid,
    'data-field' => $field_name,
    'class'      => array('date-to-now'),
  ),
)); ?>
