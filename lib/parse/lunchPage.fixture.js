module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Takeaway</title>
    <link href="/TakeAway/Content/css/jquery.validate.bootstrap.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/flags.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/bootstrap.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/font-awesome.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/bootstrap-datepicker.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/bootstrap-datepicker3.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/bootstrap-select.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/jquery.bootstrap-touchspin.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/jquery.typeahead.css" rel="stylesheet"/>
<link href="/TakeAway/Content/css/style.css" rel="stylesheet"/>

    <script src="/TakeAway/Scripts/jquery-2.1.1.js"></script>
<script src="/TakeAway/Scripts/modernizr-2.8.3.js"></script>
<script src="/TakeAway/Scripts/jquery.cookie.js"></script>
<script src="/TakeAway/Scripts/bootstrap.js"></script>
<script src="/TakeAway/Scripts/bootstrap-datepicker.js"></script>
<script src="/TakeAway/Scripts/locales/bootstrap-datepicker.da.js"></script>
<script src="/TakeAway/Scripts/bootstrap-select.js"></script>
<script src="/TakeAway/Scripts/jquery.bootstrap-touchspin.js"></script>
<script src="/TakeAway/Scripts/jquery.typeahead.js"></script>
<script src="/TakeAway/Scripts/jquery.placeholder.js"></script>
<script src="/TakeAway/Scripts/helper.js"></script>
<script src="/TakeAway/Scripts/respond.js"></script>



    <script type="text/javascript">

        var url = 'https://iss.inmsystems.com/TakeAway/DanskeBankEjby963/ShoppingCart/Save';
        var canteenElementId = '963';

        $(document).ready(function () {

            function getNotifications() {
                //var url = "http://localhost:50965/api/iss/notification/search?filter=(OrderDate%3E201611160101)";

                //$.get(url, function (data) {
                //    var obj = JSON.parse(data);
                //    if (obj.length > 0 && obj.items.length > 0) {
                //        alert(obj.items[0].description);
                //    }
                //});
            }

            getNotifications();

            function collapseSidebar() {
                if ($(window).width() < 768) {
                    $('#sidebar').addClass('collapse');
                } else {
                    $('#sidebar').removeClass('collapse');
                }
            }

            function fixFooter() {

                if ($('#content').height() < ($(window).height() - 243)) {
                    $('#footer').removeClass('relative-footer');
                    $('#footer').addClass('fix-footer');
                } else {
                    $('#footer').removeClass('fix-footer');
                    $('#footer').addClass('relative-footer');
                }
            }

            collapseSidebar();

            $(window).resize(function () {
                collapseSidebar();
                fixFooter();
            });

            calculateProductCount();
            CreateShoppingContainer();
            fixFooter();

            var $element = $("#content");
            var lastHeight = $('#content').height();

            function checkForChanges() {
                if ($element.css('height') != lastHeight) {
                    fixFooter();
                    lastHeight = $element.css('height');
                }

                setTimeout(checkForChanges, 100);
            }

            checkForChanges();
        });

    </script>

</head>
<body>
    <input type="hidden" id="Session_ShoppingCart" name="Session_ShoppingCart" />
    <div class="navbar-fixed-top">
        <div class="container">
            <div class="row" id="header">
                
                <div id="languageSelector">
                        <a href="#" onclick="setLanguage(canteenElementId, 'dk')" title="Danish"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="flag flag-dk" alt="" /></a>
                        <a href="#" onclick="setLanguage(canteenElementId, 'uk')" title="English"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="flag flag-uk" alt="" /></a>
                </div>

                    <a id="shoppingCartLink" href="https://iss.inmsystems.com/TakeAway/DanskeBankEjby963/Main/Products/1">
                        <div id="shoppingCartBadge">
                            <div class="badge badge-shop pull-right" style="display: none">0</div>
                        </div>
                    </a>

                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                        <a class="logo" href="/TakeAway/DanskeBankEjby963"></a>
                </div>

                <button id="navbarButton" type="button" class="btn btn-block navbar-toggle visible-xs" data-toggle="collapse" data-target="#sidebar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <div id="sidebar" class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <ul class="list-group" id="sidemenu">

                        <li id="homeLink" class="list-group-item">
                            <a href="/TakeAway/DanskeBankEjby963">
                                <span class="link-text">Forside</span>
                                <i class="fa fa-long-arrow-right"></i>
                            </a>
                        </li>




<script type="text/javascript">

    $(document).ready(function () {
        $('#sidebar #categoryLink1').addClass('active');
    });

</script>

    <li id="categoryLink1" class="list-group-item">
        <a href="/TakeAway/DanskeBankEjby963/Main/Products/1">
            <span class="link-text"> Ugens menu</span>
            <i class="fa fa-long-arrow-right"></i>
        </a>
    </li>
    <li id="categoryLink2" class="list-group-item">
        <a href="/TakeAway/DanskeBankEjby963/Main/Products/2">
            <span class="link-text"> Specialiteter</span>
            <i class="fa fa-long-arrow-right"></i>
        </a>
    </li>


                        <li id="contactLink" class="list-group-item">
                            <a href="/TakeAway/DanskeBankEjby963/Main/Contact">
                                <span class="link-text">Kontakt</span>
                                <i class="fa fa-long-arrow-right"></i>
                            </a>
                        </li>

                        <li id="faqLink" class="list-group-item">
                            <a href="/TakeAway/DanskeBankEjby963/Main/Faq">
                                <span class="link-text">FAQ</span>
                                <i class="fa fa-long-arrow-right"></i>
                            </a>
                        </li>


                    </ul>
                </div>

                <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
                    <div class="row">
                        <div class="title">

                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-8">

                                    <h3 class="title-text" style="text-transform: none;">
                                        Nordic Light<br />Takeaway
                                    </h3>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-4">
                                    <p class="pull-right top-text text-right hidden-xs" style="color: gray">
                                        <span>Bestil over internettet og tag maden med hjem fra kantinen</span>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">

            </div>
            <div class="main col-lg-10 col-md-10 col-sm-9 col-xs-12">
                <div id="content" class="container-fluid">

                    


<script type="text/javascript">

    $(document).ready(function () {

        $("#emailList").css('visibility','visible');

        if ( $(window).width() < 400) {

            for (var i = 0; i < $('.description p').length; i++) {
                var entry = $('.description p')[i];
                var height = $(entry).height();
                if (height > 50) {
                    $(entry).css({"height": (height + 25) + "px"});
                }
            }
        }

        checkIfSafari();

        setRememberMeValue();

        function getDayOfYear(date) {
            var onejan = new Date(date.getFullYear(),0,1);
            return Math.ceil((date - onejan) / 86400000);
        }

        var today;
        function updateShoppingInput(productTag, isPageLoad) {

            var product = $(productTag).parents('.product');
            var id = product.attr('id');
            id = id.substr(id.lastIndexOf('-') + 1);

            var nowDate = new Date();
            today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
            if (1 == 2) {
                var nrOfDaysToOrder = 7;
                if(window.localStorage.getItem("nrOfDaysToOrder2" + id) === null || window.localStorage.getItem("nrOfDaysToOrder" + id) === undefined){
                    window.localStorage.setItem("nrOfDaysToOrder2" + id, nrOfDaysToOrder);
                }
            }
            var stringDate = $('#product-pickUp-' + id).val();

            var value = product.find("input.bootstrap-touchspin").val();
            if (!value && isNaN(value))
                value = 0;

            if (isPageLoad) {
                var shoppingProduct = getProductFromShoppingCart(id);

                if (shoppingProduct) {
                    value = shoppingProduct.count;
                    stringDate = shoppingProduct.date;
                }

            }

            var productData = getProductFromPage(id);
            if (!productData) {
                productData = getProductFromShoppingCart(id);
                $("#weekProductDate-" + id).text(productData.date);
            } else {//get product date from page
                window.localStorage.setItem("nrOfDaysToOrder2" + id, nrOfDaysToOrder);
                window.localStorage.setItem("lastOrderTime" + id, "1200");
                window.localStorage.setItem("lastOrderDay" + id, "0");
                window.localStorage.setItem("calendarDisabledDays" + id, "1111100");//save the disabled calendar days string ("1110111") in localstorage
            }
            if (getProductFromShoppingCart(id)) {
                productData.date = getProductFromShoppingCart(id).date;
            }

            var lastOrderDay = parseInt(window.localStorage.getItem("lastOrderDay" + id));
            if (parseInt(window.localStorage.getItem("lastOrderTime" + id)) < parseInt(ToShortTime(nowDate))
                || toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id)).indexOf(today.getDay()) !== -1) {
                today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1, nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds());
                var j = 0;
                while (toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id)).indexOf(today.getDay()) !== -1 && j < 7) { //if next day is disabled
                    j++;
                    today.setDate(today.getDate() + 1);
                }

                //if (j === 0 && parseInt(window.localStorage.getItem("lastOrderTime" + id)) > parseInt(ToShortTime(nowDate)))
                //    lastOrderDay--;
                if(parseInt(window.localStorage.getItem("lastOrderTime" + id)) < parseInt(ToShortTime(nowDate))) {
                    nowDate.setDate(nowDate.getDate() + 1);
                }
            } else {
                lastOrderDay--;
            }

            var nowDayNumber = getDayOfYear(nowDate);
            var todayDayNumber = getDayOfYear(today);

            if (lastOrderDay + nowDayNumber > todayDayNumber) {
                var dif = lastOrderDay + nowDayNumber - todayDayNumber;
                today.setDate(today.getDate() + dif);
                var j = 0;
                while (toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id)).indexOf(today.getDay()) !== -1 && j < 7) {//if next day is disabled
                    j++;
                    today.setDate(today.getDate() + 1);
                }
            }

            $("#specialProductDate-" + id).datepicker({
                language: "da",
                autoclose: true,
                calendarWeeks: true,
                format: "dd-mm-yyyy",
                weekStart: 1,
                startDate: today,
                endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + parseInt(window.localStorage.getItem("nrOfDaysToOrder2" + id))),
                daysOfWeekDisabled: toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id))
            });

            $("#pageSpecialProductDate-" + id).datepicker({
                language: "da",
                autoclose: true,
                calendarWeeks: true,
                format: "dd-mm-yyyy",
                weekStart: 1,
                startDate: today,
                endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + parseInt(window.localStorage.getItem("nrOfDaysToOrder2" + id))),
                daysOfWeekDisabled: toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id))
            });

            if (productData && productData.stock != null && !isNaN(productData.stock) && productData.stock < value) {

                value = productData.stock;

                var tooltipInit = {
                    placement: 'bottom',
                    title: 'Antal tilbage ' + productData.stock,
                    trigger: 'manual',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner" style="margin-top: -7px; background-color: #fff; color: #a62525"></div></div>'
                };

                product.find("input.bootstrap-touchspin").tooltip(tooltipInit).tooltip('show');
            } else {
                product.find("input.bootstrap-touchspin").tooltip('destroy');
            }
            if (isPageLoad) {
                refreshProductCount(id, value, stringDate);
            } else {
                if (stringDate == null || stringDate == "") {
                    if ($("#pageSpecialProductDate-" + id).find("input").val() !== undefined) {
                        stringDate = ToShortStringDate($("#pageSpecialProductDate-" + id).find("input").val()); //check if product is on page
                    }else{
                        stringDate = productData.date;
                    }
                } else {
                    if(stringDate.indexOf("-") > -1){
                        stringDate = ToShortStringDate(stringDate);
                    }
                }
                if (productData.menuDailyId != null) {
                    stringDate = productData.date;
                }
                addProduct(id, value, stringDate);
                if (value === "0" || value === 0) {
                    $("#cart-product-" + id).remove();
                    removeProductFromShoppingList(id);
                }
                $("#specialProductDate-" + id).datepicker({
                    language: "da",
                    autoclose: true,
                    calendarWeeks: true,
                    format: "dd-mm-yyyy",
                    weekStart: 1,
                    startDate: today,
                    endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + parseInt(window.localStorage.getItem("nrOfDaysToOrder2" + id))),
                    daysOfWeekDisabled: toCalendarDisabledDays(window.localStorage.getItem("calendarDisabledDays" + id))
                });
            }
            if ($("#specialProductDate-" + id).find('input').val() !== undefined) {
                $("#pageSpecialProductDate-" + id).find("input").val(ToDisplayDate(stringDate));
            } else {
                $("#pageSpecialProductDate-" + id).find("input").val(ToDisplayDate(ToShortDate(today)));
            }

            if (value != $("#cart-product-" + id).find('input.bootstrap-touchspin').val())
                $("#cart-product-" + id).find('input.bootstrap-touchspin').val(value);

            if (value != $("#product-" + id).find('input.bootstrap-touchspin').val())
                $("#product-" + id).find('input.bootstrap-touchspin').val(value);



            if (id.indexOf("WG") >= 0) {
                $("#weekProductDate-" + id).hide();
                $("#weekProductDate-" + id).attr('disabled', true);
            } else {
                $("#specialProductDate-" + id).hide();
                $("#specialProductDate-" + id).attr('disabled', true);
                var weekProductDate = $("#weekProductDate-" + id).text();
                if (weekProductDate !== undefined && weekProductDate.indexOf("-") === -1) {
                    $("#weekProductDate-" + id).text(ToDisplayDate(weekProductDate));
                }
                $('#pageSpecialProductDate-' + id).hide();
                $('#pageSpecialProductDate-' + id).attr('disabled', true);
            }
            if (stringDate !== undefined && stringDate.indexOf("-") === -1) {
                $("#specialProductDate-" + id).find("input").val(ToDisplayDate(stringDate));
            }

        }

        $("input.bootstrap-touchspin").each(function () { updateShoppingInput(this, true); });

        $(function () {
            $('input').placeholder();
        });

        $(".product .image img").each(function () {
            $(this).attr('src', $(window).width() < 768 ? $(this).data('src1') : $(this).data('src2'));
        });

        $(".product input.bootstrap-touchspin").TouchSpin(tsInit);

        $(".panel-heading").click(function () {
            $(this).find("i").toggleClass("hidden");
        });

        $(document).on('change', "input.bootstrap-touchspin", function () { updateShoppingInput(this, false);

        });
        $(document).on('change', '.cartDatepicker', function() {
            updateShoppingInput(this, false);
        });

        $(document).on('click', '.pageDatepicker', function() {
            var id = $(this).attr('id');
            id = id.substr(id.lastIndexOf('-') + 1);
            if ($("#pageSpecialProductDate-" + id).find('input').val() === null || $("#pageSpecialProductDate-" + id).find('input').val() === undefined || $("#pageSpecialProductDate-" + id).find('input').val() === '') {
                $("#pageSpecialProductDate-" + id).find('input').val(ToDisplayDate(ToShortDate(today)));
                $("#pageSpecialProductDate-" + id).datepicker('setDate', today);
            }
            if (getProductFromShoppingCart(id)) {
                var date = getProductFromShoppingCart(id).date;
                $("#specialProductDate-" + id).datepicker('setDate', ToDatePickerDate(date));
            }

            $("#specialProductDate-" + id).find('input').val($("#pageSpecialProductDate-" + id).find('input').val());
            if ($("#specialProductDate-" + id).find('input').val() !== undefined) {
                $("#pageSpecialProductDate-" + id).datepicker('setDate', ToDatePickerDate(ToShortStringDate($("#specialProductDate-" + id).find('input').val())));
                updateShoppingInput(this, false);
            }
        });

        $(document).on('change', '.pageDatepicker', function() {
            var id = $(this).attr('id');
            id = id.substr(id.lastIndexOf('-') + 1);

            if ($("#pageSpecialProductDate-" + id).find('input').val() === null || $("#pageSpecialProductDate-" + id).find('input').val() === undefined || $("#pageSpecialProductDate-" + id).find('input').val() === '') {
                $("#pageSpecialProductDate-" + id).find('input').val(ToDisplayDate(ToShortDate(today)));
                $("#pageSpecialProductDate-" + id).datepicker('setDate', today);
            }

            if (getProductFromShoppingCart(id)) {
                $("#specialProductDate-" + id).datepicker('setDate', ToDatePickerDate(ToShortStringDate($("#pageSpecialProductDate-" + id).find('input').val())));
            }
        });

        $(document).on('click', '#shoppingCartContainer .delete', function () {
            var id = $(this).attr('id');
            id = id.substr(id.lastIndexOf('-') + 1);
            $("#product-" + id).find('.bootstrap-touchspin').val(0);
            $("#cart-product-" + id).remove();
            removeProductFromShoppingList(id);
            $("#pageSpecialProductDate-" + id).find('input').val(ToDisplayDate(ToShortDate(today)));
            $("#pageSpecialProductDate-" + id).datepicker('setDate', today);
        });

        calculateProductCount();

        $('#termsLink').click(function () {
            $("#termsModal").modal('show');
            $("#termsModal").css("z-index", 100000);
            if ($("body").height() > $(window).height()) {
                $(".modal-open .navbar-fixed-top, .modal-open .navbar-fixed-bottom").css("padding-right", "17px");
            }

        });

        $('#newsletterLink').click(function () {
            $("#newsletterModal").modal('show');
            $("#newsletterModal").css("z-index", 100000);
            if ($("body").height() > $(window).height()) {
                $(".modal-open .navbar-fixed-top, .modal-open .navbar-fixed-bottom").css("padding-right", "17px");
            }

        });

        $("#termsModal").on("hidden.bs.modal", function () {
            $(".navbar-fixed-top, .navbar-fixed-bottom").css("padding-right", "0");
        });

        $("#newsletterModal").on("hidden.bs.modal", function () {
            $(".navbar-fixed-top, .navbar-fixed-bottom").css("padding-right", "0");
        });

        checkRadioButton();
    });

    function termsCheckboxClick(termsCheckbox) {
        if (termsCheckbox.checked) {
            $('#sendOrderBtn').removeAttr('disabled');
        } else {
            $('#sendOrderBtn').attr('disabled', 'disabled');
        }
    }

    function rememberMeClick(checkBox) {

        var name = $('#Name').val();
        var email = $('#Email').val();

        var canteenElementId = '963';
        var cookieName = 'loginName' + canteenElementId;
        var cookieEmail = 'loginEmail' + canteenElementId;
        var cookieRemember = 'loginReMe' + canteenElementId;

        if (checkBox.checked) {
            $.cookie(cookieName, name, { path: "/" });
            $.cookie(cookieEmail, email, { path: "/" });
            $.cookie(cookieRemember, true, { path: "/" });

        } else {
            $.removeCookie(cookieName, { path: "/" });
            $.removeCookie(cookieEmail, { path: "/" });
            $.removeCookie(cookieRemember, { path: "/" });
        }
    }

    function setRememberMeValue() {

        var canteenElementId = '963';
        var cookieName = 'loginName' + canteenElementId;
        var cookieEmail = 'loginEmail' + canteenElementId;
        var cookieRemember = 'loginReMe' + canteenElementId;


        var rememberMe = $.cookie(cookieRemember);

        if (rememberMe) {
            $('#Name').val($.cookie(cookieName));
            $('#Email').val($.cookie(cookieEmail));
            $('#rememerMe').prop('checked', true);
        }
    }

    function checkproduct(id) {
        if (id.indexOf("WG") >= 0) {
            return true;
        }
        return false;
    }

    function changeDate(date, id) {
        if (date !== $("#pageSpecialProductDate-" + id).find("input").val()) {
            $("#pageSpecialProductDate-" + id).find("input").val(date);
        }
        if (date !== $("#specialProductDate-" + id).find("input").val()) {
            $("#specialProductDate-" + id).find("input").val(date);
        }
    }

    function toCalendarDisabledDays(dayString) {

        var day = [];
        for (var i = 0; i < 7; i++) {
            if (dayString[i] === '0') {
                day.push(i+1);
            }
            var index = day.indexOf(7);
            if (index !== -1) {
                day[index] = 0;
            }

        }
        return day;
    }

    function checkIfSafari() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            $(".pageDatepicker").addClass("safariSpecialDatePickUp");
        }
    }

    function checkRadioButton() {
        $("#addressRadioButtons").find("input[type='radio']").first().prop('checked', true);
    }

</script>



<div class="section">
    <div class="row">
        <div id="categoryInfo" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1>Ugens menu</h1>
            <p>
Herunder kan du se hvad denne uges menuplan består af. Du kan bestille frem til kl. 12 samme dag, som du ønsker at afhente maden. Afhentning af maden kan ske fra kl. 14.            </p>
        </div>
    </div>
</div>


    <div class="panel panel-primary panel-product">
        <div class="panel-heading" data-toggle="collapse" data-target="#collapseOne0">
            <span class="panel-title">
                <label>Onsdag (18/10)</label>
                <button class="btn btn-toggle btn-sm pull-right">
                    <i class="fa fa-arrow-down hidden"></i>
                    <i class="fa fa-arrow-up"></i>
                </button>
            </span>
        </div>

        <div id="collapseOne0" class="panel-collapse collapse in">

            <div class="panel-body section">

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                            <div class="product" id="product-W36224G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17297.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17297.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens suppe</h3>
                                    <p>Hønskødsuppe med boller<br /></p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 25,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36224G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36224G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36225G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_5422.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/5422.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens varme ret</h3>
                                    <p>Stegt Hoki filet vendt i panko og krydderurter, creme pasta m. spinat </p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 39,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36225G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36225G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36230G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17716.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17716.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens Side salat</h3>
                                    <p>Kantinens blandede salat</p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 10,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36230G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36230G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="panel panel-primary panel-product">
        <div class="panel-heading" data-toggle="collapse" data-target="#collapseOne1">
            <span class="panel-title">
                <label>Torsdag (19/10)</label>
                <button class="btn btn-toggle btn-sm pull-right">
                    <i class="fa fa-arrow-down hidden"></i>
                    <i class="fa fa-arrow-up"></i>
                </button>
            </span>
        </div>

        <div id="collapseOne1" class="panel-collapse collapse in">

            <div class="panel-body section">

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                            <div class="product" id="product-W36234G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17297.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17297.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens suppe</h3>
                                    <p>Grillet peberfrugtsuppe a la Provence<br /></p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 25,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36234G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36234G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36226G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_5422.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/5422.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens varme ret</h3>
                                    <p>Pariserbøf m. garniture og fritter<br /></p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 39,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36226G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36226G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36227G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17716.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17716.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens Side salat</h3>
                                    <p>Kantinens blandede salat</p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 10,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36227G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36227G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="panel panel-primary panel-product">
        <div class="panel-heading" data-toggle="collapse" data-target="#collapseOne2">
            <span class="panel-title">
                <label>Fredag (20/10)</label>
                <button class="btn btn-toggle btn-sm pull-right">
                    <i class="fa fa-arrow-down hidden"></i>
                    <i class="fa fa-arrow-up"></i>
                </button>
            </span>
        </div>

        <div id="collapseOne2" class="panel-collapse collapse in">

            <div class="panel-body section">

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                            <div class="product" id="product-W36228G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17297.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17297.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens suppe</h3>
                                    <p></p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 25,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36228G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36228G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36229G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_5422.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/5422.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens varme ret</h3>
                                    <p></p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 39,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36229G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36229G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="product" id="product-W36231G">
                                <div class="image">
                                    <img src="#" data-src1="https://iss.inmsystems.com/pub/images/products/s_17716.jpg" data-src2="https://iss.inmsystems.com/pub/images/products/17716.jpg" alt="" />
                                </div>
                                <div class="description">
                                    <h3>Dagens Side salat</h3>
                                    <p>Kantinens blandede salat</p>
                                </div>
                                <div class="price">
                                    <span class="product_label pricetag">DKK 10,00</span>
                                    <div class="date input-group datepicker pageDatepicker sepecialDatePickUp" id="pageSpecialProductDate-W36231G">
                                        <input class="specialPickUp input-sm " type='text' id='pageProduct-pickUp-W36231G' disabled="disabled" />
                                        <span class="calendarGlyph input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>

                                    <div class="pull-right product-quantity">
                                        <span class="product_label cartcontrol">Antal</span>
                                        <div class="input-group input-group-sm">
                                            <input type="text" value="0" class="col-md-1 form-control bootstrap-touchspin">
                                        </div>
                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

<input type="hidden" value="[
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36224G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36224,
    &quot;pluId&quot;: &quot;17297&quot;,
    &quot;name&quot;: &quot;Dagens suppe&quot;,
    &quot;date&quot;: &quot;20171018&quot;,
    &quot;description&quot;: &quot;H&#248;nsk&#248;dsuppe med boller\\r\\n&quot;,
    &quot;price&quot;: 25.0000,
    &quot;priceStr&quot;: &quot;25,00&quot;,
    &quot;order&quot;: 1,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 5.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17297.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17297.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36225G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36225,
    &quot;pluId&quot;: &quot;5422&quot;,
    &quot;name&quot;: &quot;Dagens varme ret&quot;,
    &quot;date&quot;: &quot;20171018&quot;,
    &quot;description&quot;: &quot;Stegt Hoki filet vendt i panko og krydderurter, creme pasta m. spinat &quot;,
    &quot;price&quot;: 39.0000,
    &quot;priceStr&quot;: &quot;39,00&quot;,
    &quot;order&quot;: 2,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 7.8000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_5422.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/5422.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36230G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36230,
    &quot;pluId&quot;: &quot;17716&quot;,
    &quot;name&quot;: &quot;Dagens Side salat&quot;,
    &quot;date&quot;: &quot;20171018&quot;,
    &quot;description&quot;: &quot;Kantinens blandede salat&quot;,
    &quot;price&quot;: 10.0000,
    &quot;priceStr&quot;: &quot;10,00&quot;,
    &quot;order&quot;: 3,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 2.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17716.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17716.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36234G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36234,
    &quot;pluId&quot;: &quot;17297&quot;,
    &quot;name&quot;: &quot;Dagens suppe&quot;,
    &quot;date&quot;: &quot;20171019&quot;,
    &quot;description&quot;: &quot;Grillet peberfrugtsuppe a la Provence\\r\\n&quot;,
    &quot;price&quot;: 25.0000,
    &quot;priceStr&quot;: &quot;25,00&quot;,
    &quot;order&quot;: null,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 5.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17297.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17297.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36226G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36226,
    &quot;pluId&quot;: &quot;5422&quot;,
    &quot;name&quot;: &quot;Dagens varme ret&quot;,
    &quot;date&quot;: &quot;20171019&quot;,
    &quot;description&quot;: &quot;Pariserb&#248;f m. garniture og fritter\\r\\n&quot;,
    &quot;price&quot;: 39.0000,
    &quot;priceStr&quot;: &quot;39,00&quot;,
    &quot;order&quot;: 2,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 7.8000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_5422.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/5422.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36227G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36227,
    &quot;pluId&quot;: &quot;17716&quot;,
    &quot;name&quot;: &quot;Dagens Side salat&quot;,
    &quot;date&quot;: &quot;20171019&quot;,
    &quot;description&quot;: &quot;Kantinens blandede salat&quot;,
    &quot;price&quot;: 10.0000,
    &quot;priceStr&quot;: &quot;10,00&quot;,
    &quot;order&quot;: 3,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 2.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17716.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17716.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36228G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36228,
    &quot;pluId&quot;: &quot;17297&quot;,
    &quot;name&quot;: &quot;Dagens suppe&quot;,
    &quot;date&quot;: &quot;20171020&quot;,
    &quot;description&quot;: &quot;&quot;,
    &quot;price&quot;: 25.0000,
    &quot;priceStr&quot;: &quot;25,00&quot;,
    &quot;order&quot;: 1,
    &quot;stock&quot;: null,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 5.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17297.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17297.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36229G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36229,
    &quot;pluId&quot;: &quot;5422&quot;,
    &quot;name&quot;: &quot;Dagens varme ret&quot;,
    &quot;date&quot;: &quot;20171020&quot;,
    &quot;description&quot;: &quot;&quot;,
    &quot;price&quot;: 39.0000,
    &quot;priceStr&quot;: &quot;39,00&quot;,
    &quot;order&quot;: 2,
    &quot;stock&quot;: null,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 7.8000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_5422.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/5422.jpg&quot;
  },
  {
    &quot;categoryId&quot;: 1,
    &quot;id&quot;: &quot;W36231G&quot;,
    &quot;menuGeneralId&quot;: null,
    &quot;menuDailyId&quot;: 36231,
    &quot;pluId&quot;: &quot;17716&quot;,
    &quot;name&quot;: &quot;Dagens Side salat&quot;,
    &quot;date&quot;: &quot;20171020&quot;,
    &quot;description&quot;: &quot;Kantinens blandede salat&quot;,
    &quot;price&quot;: 10.0000,
    &quot;priceStr&quot;: &quot;10,00&quot;,
    &quot;order&quot;: 3,
    &quot;stock&quot;: 20,
    &quot;count&quot;: 0,
    &quot;tax&quot;: 2.0000,
    &quot;total&quot;: 0.0,
    &quot;smallImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/s_17716.jpg&quot;,
    &quot;largeImageUrl&quot;: &quot;https://iss.inmsystems.com/pub/images/products/17716.jpg&quot;
  }
]" id="productList" name="productList" />
<span style="padding-top: 80px; margin-top: -80px; width: 1px; /* '0' will not work for Opera */ display: inline-block;" id="shoppingCartTarget">&nbsp;</span>
<div class="panel panel-primary panel-product" id="shoppingCartPanel">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseOne" style="">
        <span class="panel-title">
            <div id="shoppingCartBadge2"></div>
            <label style="padding-left: 32px; margin: 7px 0 0 0;">Indk&#248;bskurv</label>
            <button class="btn btn-toggle btn-sm pull-right">
                <i class="fa fa-arrow-down hidden"></i>
                <i class="fa fa-arrow-up"></i>
            </button>
        </span>
    </div>

    <div id="collapseOne" class="panel-collapse collapse in">
        <div class="panel-body section">
            <div class="row text-bold shoppingHeader" style="margin-bottom: 5px;">
                <div class="product-image hidden-xs"> </div>
                <div class="product-description"> Bestilling </div>
                <div class="product-pickUp"> Afhentning </div>
                <div class="product-quantity hidden-xs" style="text-align: center"> Antal </div>
                <div class="product-price"><span class="hidden-xs">Pris pr. stk. </span> <span class="visible-xs"> Pris </span> </div>
                <div class="product-total"> DKK total </div>
                <div class="clear"></div>
            </div>
            <div id="shoppingCartContainer">

            </div>
            <div class="row">
                <div class="col-xs-12 text-right" style="padding: 10px 0 10px 0; border-top: 1px solid #d0d0d0">
                    <span class="text-bold" style="padding-right: 10px;">I alt inkl. moms DKK<span id="PaymentTotal" name="PaymentTotal" style="padding-left: 10px; display: inline-block"></span></span><br />
                    <span class="" style="padding-right: 10px;">Heraf moms DKK<span id="PaymentTax" name="PaymentTax" style="padding-left: 10px; display: inline-block"></span></span>
                </div>
            </div>
            <div class="row">
<form action="/TakeAway/DanskeBankEjby963/Main/Products/1" id="sendOrderForm" method="post"><input name="__RequestVerificationToken" type="hidden" value="9V5ftPrCFZBlKpn-GitvG1HzF1LtgAXn6oqALTEoJatVTHuWIX2diOSJQue4r2XOHV5wHZA3hfNooWV-Hbnc45tDpkmh_ycvKGnFu4M20Wk1" /><input data-val="true" data-val-number="The field CategoryId must be a number." data-val-required="The CategoryId field is required." id="CategoryId" name="CategoryId" type="hidden" value="1" /><input data-val="true" data-val-number="The field ShoppingTotal must be a number." data-val-range="The total is invalid!" data-val-range-max="10000" data-val-range-min="0" data-val-required="The ShoppingTotal field is required." id="ShoppingTotal" name="ShoppingTotal" type="hidden" value="0" /><input id="ShoppingCart" name="ShoppingCart" type="hidden" value="" />                    <div class="form-inline">
                        <div class="form-group" style="margin-bottom: -10px">
                            <input class="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" maxlength="50" name="Name" placeholder="For- og efternavn" type="text" value="" /><br />
                        </div>
                        <div class="form-group" style="margin-bottom: -10px">
                            <input class="form-control text-box single-line" data-val="true" data-val-required="The Email field is required." id="Email" maxlength="50" name="Email" placeholder="e-mail" type="email" value="" /><br />
                        </div>
                        <div class="form-group" style="margin-bottom: -10px; vertical-align: top; padding-top: 3px;">
                            <input id="sendOrderBtn" type="submit" class="btn btn-success btn-sm" value="Send ordre" style="vertical-align: top" disabled="disabled" /><br />
                            <br />
                        </div>
                    </div>
                    <div class="form-inline">
                        <div class="form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="termsCheckbox" id="termsCheckbox" onclick="termsCheckboxClick(this)">
                                    Jeg accepterer disse <a href="javascript:undefined" id="termsLink">Handelsbetingelser</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-inline">
                        <div class="form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rememerMe" id="rememerMe" onclick="rememberMeClick(this)">
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                        <div class="form-inline">
                            <div class="form-group" style="margin-top: 15px">
                                <span class="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group" style="margin-top: 15px">
                                <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group" style="margin-top: 15px">
                                <span class="field-validation-valid text-danger" data-valmsg-for="ShoppingTotal" data-valmsg-replace="true"></span>&nbsp;
                            </div>
                        </div>



<div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="termsModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:90%">
        <div class="modal-content">
            <div class="modal-header footer-img">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel" style="color: white">Terms_</h4>
            </div>
            <div class="modal-body">
               <p>
                    Handelsbetingelserne gælder for din brug af
                    denne hjemmeside. Ligeledes er Handelsbetingelserne gældende for handel via denne
                    hjemmeside. Ved at gøre brug af hjemmesiden bekræfter og accepterer du vores
                    Handelsbetingelser. Samtidig bekræfter
                    du, at du er 18 år eller ældre. Hvis du ikke kan acceptere disse
                    Handelsbetingelser, så benyt venligst ikke hjemmesiden.
                </p>
                <p>
                    <b>
                        Din brug af vores online bestillingsservice
                    </b>
                </p>
                <p>
                    Hvis du benytter vores online
                    bestillingsfunktion på hjemmesiden, skal følgende være overholdt:
                </p>
                <p>
                    1) Du skal være 18 år eller ældre, eller
                    alternativt være under overvågning af en voksen eller værge<br>
                    2) Du skal acceptere at tage fuldt ansvar for dine handlinger og aktiviteter på
                    hjemmesiden
                </p>
                <p>
                    ISS Facility Services forbeholder sig retten
                    til, at afvise betjening af enhver kunde, hvis ISS Facility Services finder det
                    passende. ISS Facility Services forbeholder sig ligeledes retten til, at
                    annullere din bestilling, og i samme forbindelse forsøge så vidt muligt, at
                    informere dig om annulleringen af din bestilling via elektronisk eller
                    telefonisk kontakt.
                </p>
                <p><b>Betaling</b></p>
                <p>
                    ISS Facility Services modtager betalig med
                    Dankort/VISA-Dankort, VISA, VISA debit, Mastercard og American Express.
                    Betaling vil blive trukket på din konto, når varerne bliver bestilt.
                </p>
                <p>
                    Alle beløb er i DKK. Danske kroner og er inkl.
                    moms
                </p>
                <p>
                    ISS Facility Services krypterer alle dine
                    kortoplysninger. Det betyder, at uvedkommende ikke kan aflæse dit kortnummer
                    eller andre informationer under transaktionen med PBS.
                </p>
                <p><b>Levering</b></p>
                <p>
                    ISS Facility Services vil sikre at din
                    levering står klar til dig i din kantine, eller et andet aftalt sted.
                    Leveringstidspunkt og leveringssted aftales individuelt med virksomhederne, og
                    kan derfor ikke oplyses. Såfremt der opstår forsinkelse med din levering eller
                    din levering slet ikke foretages, bedes du kontakte dit kantinepersonale, som
                    vil tage hånd om denne fejltagelse.
                </p>
                <p><b>Fortrydelsesret</b></p>
                <p>
                    Venligst vær opmærksom på, at når du har
                    afgivet din bestilling, og denne bestilling bliver godkendt, kan du ikke længere
                    fortryde og derved annullere dit køb. Dette skyldes at ISS Facility Services
                    ikke er underlagt forbrugeraftalelovens fortrydelsesret på 14 kalenderdage
                    efter kontraktens indgåelse, da der er tale om køb af madvarer. Dog vil ISS
                    Facility Services så vidt muligt være behjælpelige, hvis ikke bestilling
                    allerede er gået i produktion – i dette tilfælde holder du dog selv ansvaret
                    for at kontakte kantinepersonalet direkte, og modtage deres accept eller
                    afslag, herunder gælder stiltiende accept ikke.
                </p>
                <p>
                    <b>
                        Reklamationsret
                    </b>
                </p>
                <p>
                    Når du modtager din bestilling bedes du
                    kontrollere for eventuelle fejl og mangler. Det er vigtigt at du straks
                    reklamere til kantinepersonalet, hvis kantinepersonalet er gået hjem, skal
                    reklamation foregå senest den næstkommende hverdag. ISS Facility Services
                    tilstræber at kontaktoplysningerne på hjemmesiden altid er korrekte og
                    opdateret. I tilfælde af dette ikke er opnået, kan du kontakte ISS Facility
                    Services på <a href="mailto:morten.steen.thygesen@dk.issworld.com">morten.steen.thygesen@dk.issworld.com</a>
                    og de vil dernæst håndtere reklamationen.
                </p>
                <p>
                    <b>
                        ISS Facility Services’ ansvarsfraskrivelse
                    </b>
                </p>
                <p>
                    Vi tilstræber os altid på at sikre, at
                    oplysningerne på vores hjemmeside er korrekte og fuldstændige. Vi kan dog
                    foretage ændringer af indholdet på hjemmesiden eller af de ydelser og priser,
                    der findes på vores hjemmeside, når som helst og uden advarsel. Derfor kan vi
                    heller ikke love at vores oplysninger altid er fuldstændige og præcise.
                </p>
                <p>
                    Ved spørgsmål til allergi-, kost- og andre
                    informationer om vores ydelser, kan du rette kontakt til vores
                    kantinepersonale, som altid vil være i besiddelse af denne information. Dog fratager vi os alt ansvaret fra 3. parts
                    ydelser, som der kan bestilles igennem vores hjemmeside. Vi garanterer derved ikke, at ydelserne, der
                    bestilles fra en 3. parts leverandør, er af tilfredsstillende kvalitet eller
                    lever op til dine forventninger – og vi frasiger os derfor et hvert ansvar
                    herfor.
                </p>
                <p><b>Persondata</b></p>
                <p>
                    Når du afgiver en bestilling bliver du bedt om
                    at indtaste din e-mail adresse og dit fulde navn. Disse oplysninger bruger vi
                    til, at give dig en statusopdatering eller anden information vedrørende din
                    ordre. Samtidig tilbyder vi muligheden for at modtage nyhedsmail, som du selv
                    kan til- og afskrive dig. De oplysninger
                    du giver os, vil blive overført og lagret på vores servere, som håndteres og
                    varetages af vores databehandler. Databehandlere må ikke anvende
                    personoplysningerne til andet en ISS Facility Services’ formål.
                </p>
                <p>
                    Dine personoplysninger bliver beskyttet i
                    overensstemmelse med kravene i Persondataloven. Samtidig har vores
                    databehandler foretaget de nødvendige foranstaltninger, for at
                    personoplysninger håndteres sikkert.
                </p>
                <p>
                    Du har til en hver tid ret til at se de
                    oplysninger, vi har registreret om dig.
                </p>
                <p>
                    ISS Facility Services er ansvarlig for de
                    personlige data du opgiver og håndteringen heraf.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">Back</button>
            </div>
        </div>
    </div>
</div></form>            </div>

        </div>
    </div>
</div>

<script id="newCartProduct" type="text/tpl">

<div class="row product" id="cart-product-{{id}}" style="padding-top: 7px; padding-bottom: 8px">
    <div class="product-image hidden-xs"><img src="{{imagePath}}" alt="" /></div>
    <div class="product-description"><span class="text-bold">{{name}}</span><p class="hidden-xs" style="text-align: left;margin:0;">{{description}}&#8230;</p></div>
    <div class ="product-pickUp">
        <div class="date input-group datepicker cartDatepicker" id="specialProductDate-{{id}}" style="padding-top: 0; margin-left: -7px; width: 113px; padding-right: 0;">
            <input class="specialPickUp input-sm " type='text' id='product-pickUp-{{id}}' disabled="disabled"/>
            <span class="calendarGlyph input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
        <p id="weekProductDate-{{id}}">{{pickUp}}</p>
    </div>
    <div class="product-quantity">
        <div style="width: 100px">
            <div class="input-group input-group-sm">
                <input type="text" style="text-align:center" class="form-control bootstrap-touchspin" />
            </div>
        </div>
    </div>
    <div class="product-price"><span class="hidden-xs">DKK </span> <span class="price-value" style="margin-right: -2px;">{{price}}</span></div>
    <div class="product-total"><span class="hidden-xs">DKK </span> <span class="price-value">{{total}}</span></div>
    <div class="product-remove">
        <button type="button" class="btn btn-link delete" id="{{id}}">
            Slet
        </button>
    </div>
    <div class="clear"></div>
</div>

</script>

                </div>
            </div>
        </div>
    </div>
    <div id="footer" class="relative-footer" style="margin-top: 55px;">
        <div style="position: relative; top: -55px; padding-bottom: 1px">
            <div class="text-center" style="margin-bottom: -15px">
                <div id="creditCards">
                            <img src="/TakeAway/Content/assets/creditcard_mobilePay.png" alt="" width="300" />
                            <br />
                            <span style="font-size: 12px">Dankort, Visa, Mastercard, Visa Electron, American Express, MobilePay</span>
                </div>
                <br />
                <p style="color: white; margin-bottom: -1px">&copy; 2017 - inmTakeaway</p>
            </div>
        </div>
    </div>
    
</body>
</html>`
