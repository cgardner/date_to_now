<?php

/**
 * System callback for system/date_to_now
 **/
function _date_to_now_system_callback() {
  $node = node_load($_REQUEST['nid']);
  $field_name = filter_var($_REQUEST['field_name'], FILTER_SANITIZE_STRING);
  $l = $node->language;
  $now = time();
  $date = date('Y-m-d H:i:s', $now);
  $node->{$field_name}[$l][0]['value'] = $date;
  node_save($node);

  $format = 'long';
  if (isset($fields[$field_name])) {
    $format = $fields[$field_name]['display']['default']['settings']['format_type'];
  } // end if (isset($fields[$field_name]))
  drupal_json_output(array(
    'date' => format_date($now, $format),
  ));
} // end function _date_to_now_system_callback
