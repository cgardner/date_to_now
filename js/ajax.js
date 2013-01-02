(function($) {
  Drupal.behaviors.date_to_now = {
    context:                   $('document'),
    settings:                  [],
    attach:                    function(context, settings) {
      this.context  = context;
      this.settings = settings;

      var me = this;
      $('.date-to-now', context).bind('click', function(e) {
        e.preventDefault();
        me.handle_date_to_now_click(this);
      });
    },
    handle_date_to_now_click:  function(el) {
      var $el = $(el);
      var params = {
        nid:         $el.attr('data-nid'),
        field_name:  $el.attr('data-field'),
      };
      $.ajax({
        url:       $el.attr('href'),
        context:   this.context,
        dataType:  'json',
        type:      'post',
        data:      params,
        success:   function(data) {
          var field_name = params.field_name.replace(/_/g, '-');
          var selector = '.field-name-'+ field_name +' .field-item>span';
          $(selector).text(data.date);
        }
      });
    }
  }
})(jQuery);
