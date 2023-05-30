

import '../../assets/lib/jquery/jquery.js';
import '../../assets/lib/popper/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import '../../assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.js';
// import '../../assets/lib/moment/moment.js';
import '../../assets/lib/jquery-ui/jquery-ui.js';
import '../../assets/lib/jquery-switchbutton/jquery.switchButton.js';
import '../../assets/lib/peity/jquery.peity.js';
import '../../assets/lib/jquery.sparkline.bower/jquery.sparkline.min.js';
import '../../assets/lib/d3/d3.js';
import '../../assets/lib/rickshaw/rickshaw.min.js';
import '../../assets/js/ResizeSensor.js';
import '../../assets/js/bracket.js';
import '../../assets/js/widgets.js';
$(function(){
    'use strict'

    // FOR DEMO ONLY
    // menu collapsed by default during first page load or refresh with screen
    // having a size between 992px and 1199px. This is intended on this page only
    // for better viewing of widgets demo.
    $(window).resize(function(){
        minimizeMenu();
    });

    minimizeMenu();

    function minimizeMenu() {
        if(window.matchMedia('(min-width: 992px)').matches && window.matchMedia('(max-width: 1199px)').matches) {
            // show only the icons and hide left menu label by default
            $('.menu-item-label,.menu-item-arrow').addClass('op-lg-0-force d-lg-none');
            $('body').addClass('collapsed-menu');
            $('.show-sub + .br-menu-sub').slideUp();
        } else if(window.matchMedia('(min-width: 1200px)').matches && !$('body').hasClass('collapsed-menu')) {
            $('.menu-item-label,.menu-item-arrow').removeClass('op-lg-0-force d-lg-none');
            $('body').removeClass('collapsed-menu');
            $('.show-sub + .br-menu-sub').slideDown();
        }
    }
});
