jQuery(window).load(() => {
  jQuery('.navigationContent').hide();
});
jQuery(document).ready(() => {
  jQuery('#navigation').localScroll({
    offset: -80,
  });
  jQuery('#mobile-nav').localScroll({
    offset: -47,
  });
  jQuery('.action').localScroll({
    offset: -80,
  });
  jQuery(() => {
    const sections = jQuery('section');
    const navigation_links = jQuery('nav a');
    sections.waypoint({
      handler(direction) {
        let active_section;
        active_section = jQuery(this);
        if (direction === 'up') active_section = active_section.prev();
        const active_link = jQuery(`nav a[href="#${active_section.attr('id')}"]`);
        navigation_links.removeClass('current');
        active_link.addClass('current');
      },
      offset: '35%',
    });
  });
  jQuery(window).scroll(() => {
    const ss = jQuery(window).scrollTop();
    if (ss >= 610) {
      jQuery('.sidephone-small').animate(
        {
          left: 12,
        },
        1200,
        'easeOutCubic',
      );
    }
    if (ss >= 910) {
      jQuery('.static-phone').animate(
        {
          bottom: 0,
        },
        1200,
        'easeOutCubic',
      );
    }
  });
  jQuery('.gallery-bxslider').bxSlider({
    mode: 'fade',
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    pagerSelector: '#gallery-pager',
    nextText: 'next',
    prevText: 'prev',
    tickerHover: true,
    preloadImages: 'all',
  });
  jQuery('#top').click(
    () => (
      jQuery('body,html')
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          800,
          'easeOutCubic',
        ),
      !1
    ),
  );
  jQuery('.navigationButton').click(() => {
    if (jQuery('.navigationContent').is(':hidden')) {
      jQuery('.navigationContent').show('slow');
    } else {
      jQuery('.navigationContent').hide('slow');
    }
  });
  jQuery('.navigationContent a').click(() => {
    jQuery('.navigationContent').hide('slow');
  });
  jQuery('#style-switch').css('left', '-150px');
  jQuery('.trigger').click(() => {
    if (jQuery('#style-switch').hasClass('opened')) {
      jQuery('#style-switch').animate(
        {
          left: '-150px',
        },
        500,
        () => {
          jQuery('#style-switch').removeClass('opened');
        },
      );
    } else {
      jQuery('#style-switch').animate(
        {
          left: 0,
        },
        500,
        () => {
          jQuery('#style-switch').addClass('opened');
        },
      );
    }
    return false;
  });
});
