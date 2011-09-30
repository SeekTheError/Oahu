var $ = jQuery;

jQuery(document).ready(function(){
    /*
     * Effet hover sur les films
     */
	jQuery('ul.affiche_list li, .dvd_box, ul.dvd_vod_list li').mouseenter(function(){
		jQuery(this).find('.onTop').fadeIn();
	});
	jQuery('ul.affiche_list li, .dvd_box, ul.dvd_vod_list li').mouseleave(function(){
		jQuery(this).find('.onTop').fadeOut();
	});
	jQuery('ul.av_list li').mouseenter(function(){
        jQuery(this).find('.onTopAv').fadeIn();
    });
    jQuery('ul.av_list li').mouseleave(function(){
        jQuery(this).find('.onTopAv').fadeOut();
    });
	
	/*
	 * Effet hover sur les catalogues
	 */
	jQuery('ul#catalogue_list li').live('mouseenter', function(){
        jQuery(this).find('.onTop').fadeIn();
    });
    jQuery('ul#catalogue_list li').live('mouseleave', function(){
        jQuery(this).find('.onTop').fadeOut();
    });
    
    Image1= new Image();
    Image1.src = Drupal.settings.basePath + "sites/all/themes/pathe/images/rollover.png";
    Image1= new Image();
	Image1.src = Drupal.settings.basePath + "sites/all/themes/pathe/images/rollover-av.jpg";
});

jQuery(function(){
	initCufon();
	clearInputs();
	jQuery('body').myPopup();
	jQuery('ul.accordion').acc({
		speed: 400,
		active: 'selected',
		list: '.children()',
		opener: 'a.opener',
		slide: '.slide'
	});
	initGall();
	initTabs();
	initTabChange();
});

jQuery(window).load(function(){
	VSA_initScrollbars();
});

// initClear
function clearInputs(){
	clearFormFields({
		clearInputs: true,
		clearTextareas: true,
		passwordFieldText: true,
		addClassFocus: "focus",
		filterClass: "default"
	});
}

//initGallery
function initGall(){
	jQuery('.g0').galleryCircle({
		btPrev: 'a.prev, .link-prev',
		btNext: 'a.next, .link-next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		switchTime: false,
		duration : 650
	});
	jQuery('.g1').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g2').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g3').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g4').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g5').galleryCircle({
		btPrev: 'a.link-prev',
		btNext: 'a.link-next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g6').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g7').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g8').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.g9').galleryCircle({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
	jQuery('.photoBig').galleryCircle({
		btPrev: 'a.link-prev',
		btNext: 'a.link-next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
}

function initGallPlayer(){
	jQuery('.g5').galleryCircle({
		btPrev: 'a.link-prev',
		btNext: 'a.link-next',
		holderList: '.frame',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: '.switcher .sw',
		numCreate: true,
		easing: 'swing',
		duration : 650
	});
}

// tabs init
function initTabs() {
	$('.g5').jqueryTabs({
		addToParent:false,
		holdHeight:false,
		activeClass:'active',
		tabLinks:'a.tab',
		fadeSpeed:0
	})
	$('.tabset').jqueryTabs({
		addToParent:false,
		holdHeight:false,
		activeClass:'active',
		tabLinks:'a.tab',
		fadeSpeed:0
	})
}

// initTabChange
function initTabChange(){
	var activeClass = 'active';
	$('.popup-holder').each(function(){
		var wrapp = $(this);
		var elements = wrapp.find('.tabset >li .tab');
		elements.each(function(){
			var element = $(this);
			element.click(function(){
				elements.removeClass(activeClass);
				elements.each(function(){
					var btn = $(this);
					if(element.attr('rel') == btn.attr('rel')) btn.addClass(activeClass)
				});
				initTabs();
			})
		});
	});
}

// jquery tabs plugin
jQuery.fn.jqueryTabs = function(_options){
	// default options
	var _options = jQuery.extend({
		addToParent:false,
		holdHeight:false,
		activeClass:'active',
		tabLinks:'a.tab',
		fadeSpeed:300,
		event:'click'
	},_options);

	return this.each(function(){
		var _holder = jQuery(this);
		var _fadeSpeed = _options.fadeSpeed;
		var _activeClass = _options.activeClass;
		var _addToParent = _options.addToParent;
		var _holdHeight = _options.holdHeight;
		var _tabLinks = jQuery(_options.tabLinks, _holder);
		var _tabset = (_addToParent ? _tabLinks.parent() : _tabLinks);
		var _event = _options.event;
		var _animating = false;

		// tabs init
		_tabLinks.each(function(){
			var _tmpLink = jQuery(this);
			var _tmpTab = jQuery(_tmpLink.attr('href'));
			var _classItem = (_addToParent ? _tmpLink.parent() : _tmpLink);
			if(_tmpTab.length) {
				if(_classItem.hasClass(_activeClass)) _tmpTab.show();
				else _tmpTab.hide();
			}
		});

		// tab switcher
		function switchTab(_switcher) {
			if(!_animating) {
				var _link = jQuery(_switcher);
				var _newItem = (_addToParent ? _link.parent() : _link);
				var _newTab = jQuery(_link.attr('href'));
				if(_newItem.hasClass(_activeClass)) return;

				var _oldItem = jQuery(_addToParent ? _tabset : _tabLinks).filter('.'+_activeClass);
				var _oldTab = jQuery(jQuery(_addToParent ? _oldItem.children('a') : _oldItem).attr('href'));
				if(_newTab.length) {
					_animating = true;
					if(_oldItem.length) {
						_newItem.addClass(_activeClass);
						_oldItem.removeClass(_activeClass);

						var _parent = _oldTab.parent();
						if(_holdHeight) _parent.css({height:_parent.height()});

						_oldTab.fadeOut(_fadeSpeed,function(){
							_newTab.fadeIn(_fadeSpeed,function(){
								_animating = false;
							});
							if(_holdHeight) _parent.css({height:'auto'});
						});
					} else {
						_newItem.addClass(_activeClass);
						_newTab.fadeIn(_fadeSpeed,function(){
							_animating = false;
						});
					}
				}
			}
		}

		// control
		_tabLinks.each(function(){
			jQuery(this).bind(_event,function(){
				switchTab(this);
				return false;
			});
		});
	});
};

/*--- gallery function ---*/
jQuery.fn.galleryCircle = function(_options){
	// defaults options
	var _options = jQuery.extend({
		btPrev: 'a.prev',
		btNext: 'a.next',
		holderList: '>div',
		scrollElParent: '>ul',
		scrollEl: '>li',
		numHolder: false,
		numCreate: false,
		step: false,
		innerMargin: 0,
		curPage: false,
		onClick: null,
		easing: 'swing',
		switchTime: false,
		duration : 1500
	},_options);

	return this.each(function(){
		var _this = jQuery(this);
		// _next contains the number of next buttons (by default defined by "a.next" selector)
		var _next = jQuery(_options.btNext, _this).length ? jQuery(_options.btNext, _this) : false;
		// _prev contains the number of previous buttons (by default defined by "a.prev" selector)
		var _prev = jQuery(_options.btPrev, _this).length ? jQuery(_options.btPrev, _this) : false;
		// _holderList contains the div containing the image list
		var _holderList = jQuery(_options.holderList, _this);
		// _scrollElParent contains the ul containing the image list (contained by _holderList)
		var _scrollElParent = jQuery(_options.scrollElParent, _holderList);
		// _scrollEl contains all the li (contained by _scrollElParent)
		var _scrollEl = jQuery(_options.scrollEl, _scrollElParent);
		var _numHolder = false ;
		if (_options.numHolder) _numHolder = jQuery(_options.numHolder, _this).length ? jQuery(_options.numHolder, _this) : false;
		var _step, _t = null;
		// The sum of the width of all images
		var _widthSum = 0;
		_scrollEl.each(function(){_widthSum += jQuery(this).outerWidth(true);});
		// The index (starting at 0) of the "active" image
		var _startPosition = _scrollEl.index(_scrollEl.filter('.active'));
		if (_startPosition==-1) _startPosition=0;
		_scrollEl.removeClass('active');
		var _easing = _options.easing;
		// Check whether the width of the images is greater than container's (we add a security margin of 10px just in case there's a space)
		var _disableButtons = _widthSum > (_holderList.innerWidth()+10) ? false : true;
		// _step is the number of pixels that are moved when the next or previous button is clicked
		if (!_options.step) _step = _holderList.innerWidth();
		var _margin = _widthSum;
		if(_disableButtons){
			jQuery(_options.btNext, _this).hide();
			jQuery(_options.btPrev, _this).hide();
			return;
		}
		
		_scrollElParent.append(_scrollEl.clone(true));
		_scrollElParent.prepend(_scrollEl.clone(true));
		

		var _offsetStartPosition =0;
		_offsetStartPosition = culcOffset(_startPosition);

		_scrollElParent.css('marginLeft', (-_margin+_options.innerMargin-_offsetStartPosition));

		//auto rotation
		if (_options.switchTime) {
			_t = setTimeout(function(){
				nextSlides();
			},_options.switchTime);
		}
		
		//button next "click"
		if (_next) {
			_next.click(function(){
				if (!_scrollElParent.is(':animated')) {
					if (jQuery.isFunction(_options.onClick)) _options.onClick.apply(_this);
					nextSlides();
				}
				return false;
			});
		}

		//button prev "click"
		if (_prev) {
			_prev.click(function(){
				if (!_scrollElParent.is(':animated')) {
					if (jQuery.isFunction(_options.onClick)) _options.onClick.apply(_this);
					prevSlides();
				}
				return false;
			});
		}

		//curent position
		function getCurElIndex(){
			var _curMargin = parseInt(_scrollElParent.css('marginLeft')) + _widthSum - _options.innerMargin;
			for(i=0; i < _scrollEl.length; i++){
				if (_curMargin == 0) return i;
				if (_curMargin <= _options.innerMargin) _curMargin += _scrollEl.eq(i).innerWidth();
				else _curMargin -= _scrollEl.eq(i).innerWidth();
				if (_curMargin == _options.innerMargin) return i+1;
			}
		}

		// offset of gallery if when activ element not first at start 
		function culcOffset(_ind){
			var _tmpcounter=0;
			var _pos=0;
			while (_tmpcounter < _ind){
				_pos += _scrollEl.eq(_tmpcounter).outerWidth(true);
				_tmpcounter++;
			};
			return _pos;
		}

		//go next slide
		function nextSlides(){
			if (_t) clearTimeout(_t);
			if (_options.step) {
				_curElIndex = getCurElIndex();
				_step = _scrollEl.eq(_curElIndex).innerWidth();
			};
			_margin = -parseInt(_scrollElParent.css('marginLeft'));
			_margin += _step;
			
			_scrollElParent.animate({'marginLeft':(-_margin+_options.innerMargin)}, {duration:_options.duration, easing: _easing, complete:function(){
				if (_margin >= _widthSum*2) {
					_margin = _widthSum + (_margin - _widthSum*2);
				}
				_scrollElParent.css({'marginLeft':-_margin+_options.innerMargin});
				numListActive(_numHolder, _scrollEl);

				//autoslide
				if (_options.switchTime) {
					_t = setTimeout(function(){
						nextSlides();
					},_options.switchTime)
				}
			}});
		}

		//go prev slide
		function prevSlides(){
			if (_t) clearTimeout(_t);
			if (_options.step) {
				_curElIndex = getCurElIndex();
				if (_curElIndex == 0) _curElIndex= _scrollEl.length;
				_step = _scrollEl.eq(_curElIndex-1).innerWidth();
			};
			_margin = -parseInt(_scrollElParent.css('marginLeft'));
			_margin -= _step;
			_scrollElParent.animate({'marginLeft':(-_margin+_options.innerMargin)}, {duration:_options.duration, easing: _easing, complete:function(){
				if (_margin < _widthSum) {
					_margin = _widthSum*2 - (_widthSum - _margin);
				}
				_scrollElParent.css({'marginLeft':-_margin+_options.innerMargin});
				numListActive(_numHolder, _scrollEl);

				//autoslide
				if (_options.switchTime) {
					_t = setTimeout(function(){
						nextSlides();
					},_options.switchTime)
				}
			}});
		}

		// Number list Create
		var numListCreate = function(_numHolder, _scrollEl){
			var _numListElC = '';
			for(var i=0; i<_scrollEl.length; i++){
				_numListElC += '<li><a href="">'+(i+1)+'</a></li>';
			}
			jQuery(_numHolder).html('<ul>'+_numListElC+'</ul>');
		};

		// Number list Activate
		var numListActive = function(_numHolder, _scrollEl){
			_curElIndex = getCurElIndex();
			if (jQuery(_options.curPage, _this).length && _options.curPage) jQuery(_options.curPage, _this).text('Pagina '+(getCurElIndex()+1)+'/'+_scrollEl.length);
			if (_numHolder) {
				jQuery('a',_numHolder).removeClass('active');
				jQuery('a',_numHolder).eq(_curElIndex).addClass('active');
			}
		};

		//click on control elemens
		function numClick() {
			jQuery(_options.numHolder, _this).find('a').click(function(){
				if (_t) clearTimeout(_t);
				var _aList = jQuery(_options.numHolder, _this).find('a');
				var _index = _aList.index(jQuery(this));
				_margin = _widthSum + _index * _scrollEl.outerWidth(true);
				_scrollElParent.animate({'marginLeft':(-_margin+_options.innerMargin)}, {duration:_options.duration, easing: _easing, complete:function(){
					if (_margin >= _widthSum*2) {
						_margin = _widthSum + (_margin - _widthSum*2);
					}
					_scrollElParent.css({'marginLeft':-_margin+_options.innerMargin});
					_aList.removeClass('active').eq(_index).addClass('active');

					//autoslide
					if (_options.switchTime) {
						_t = setTimeout(function(){
							nextSlides();
						},_options.switchTime)
					}
				}});
				return false;
			});
		};

		// init creating num list
		if (_options.numCreate) numListCreate(_numHolder, _scrollEl);

		// pagination first init (example Page 2/6)
		if (jQuery(_options.curPage, _this).length && _options.curPage) jQuery(_options.curPage, _this).text('Pagina '+(getCurElIndex()+1)+'/'+_scrollEl.length);

		// init activate num list item and init numClick()
		if (_options.numHolder) {
			numListActive(_numHolder, _scrollEl);
			numClick();
		}
	});
}

jQuery.fn.acc = function(_options){
	var _options = jQuery.extend({
		speed: 400,
		active: 'active',
		list: '.children()',
		opener: 'a.opener',
		slide: 'div.slide'
	}, _options);
	return this.each(function(){
		var _list = eval('jQuery(this)' + _options.list);
		var _active = _options.active;
		var _speed = _options.speed;
		var _a = _list.index(_list.filter('.' + _active + ':eq(0)'));
		if(_a != -1) _list.removeClass(_active).eq(_a).addClass(_active);
		for(var i = 0; i < _list.length; i++){
			_list.eq(i).data('btn', _list.eq(i).find(_options.opener).eq(0));
			_list.eq(i).data('box', _list.eq(i).children(_options.slide).eq(0));
			if(i == _a) _list.eq(i).data('box').css('display', 'block');
			else _list.eq(i).data('box').css('display', 'none');
			_list.eq(i).data('btn').data('ind', i);
			_list.eq(i).data('btn').click(function(){
				if (_list.eq(jQuery(this).data('ind')).data('box').length != 0) {
					changeEl(jQuery(this).data('ind'));
					return false;
				}
			});
		}
		var anim_f = true;
		var a_h, ind_h, _k;
		function changeEl(_ind){
			if(anim_f){
				anim_f = false;
				if(_a == _ind){
					_list.eq(_a).removeClass(_active).data('box').animate({height: 0}, {
						duration: _speed,
						complete: function(){
							jQuery(this).css({display:'none', height:'auto'});
							_a = -1;
							anim_f = true;
						}
					});
				}
				else{
					_list.eq(_ind).data('box').css('display', 'block');
					ind_h = _list.eq(_ind).data('box').outerHeight();
					_list.eq(_ind).data('box').height(0);
					if(_a != -1){
						a_h = _list.eq(_a).removeClass(_active).data('box').outerHeight();
						_k = a_h/ind_h;
					}
					_list.eq(_ind).addClass(_active).data('box').animate({height: ind_h}, {
						duration: _speed,
						step: function(t_h){
							if(_a != -1) _list.eq(_a).data('box').height(a_h - t_h*_k);
						},
						complete: function(){
							_list.eq(_ind).data('box').height('auto');
							if(_a != -1) _list.eq(_a).data('box').css({display:'none', height: 'auto'});
							_a = _ind;
							anim_f = true;
						}
					});
				}
			}
		}
	});
}

jQuery.fn.myPopup = function(_options){
	// defaults options	
	var _options = jQuery.extend({
		duration: 700,
		linkOpenName: '.link-popup',
		linkCloseName: 'a.close, a.btn-close',
		divFader: 'fader',
		wrapper: 'body'
	},_options);

	return this.each(function(){
		var _hold = jQuery(this);
		var _speed = _options.duration;
		var _IE = jQuery.browser.msie;
		var links = _hold.find(_options.linkOpenName);
		var _fader = jQuery('<div class="'+_options.divFader+'"></div>');
		var _select = jQuery(_options.wrapper).find('select');
		var popup;
		jQuery('body').append(_fader);
		_fader.css({
			position: 'absolute',
			top: '0px',
			left: '0px',
			zIndex: 1001,
			background: 'black',
			opacity: 0.7
		});
		
		function init(_obj){
			popup = jQuery(_obj);
			var btnClose = popup.find(_options.linkCloseName);
			var submitBtn = popup.find('.link-submit');
			
			if (_IE) _select.css({visibility: 'hidden'});
			var w = jQuery('body').width();
			var _w = jQuery(_options.wrapper).width();
			if (_w > w) w =_w;
			var h = jQuery(window).height();
			var _offset = jQuery(window).scrollTop();
			
			var ret = _offset+(h/2) - popup.outerHeight(true)/2;
			if (ret < 0) ret = 0;
			var te = jQuery(_options.wrapper).height();
			if (jQuery(window).height() > te) te = jQuery(window).height();

			popup.css({
				top: ret,
				left: w/2 - popup.outerWidth(true)/2
			}).hide();
			_fader.css({
				width: w,
				height: te
			}).fadeIn(300, function(){
				popup.fadeIn(300);
			});
			jQuery(window).resize(function(){
				w = jQuery('body').width();
				_w = jQuery(_options.wrapper).width();
				if (_w > w) w =_w;
				popup.animate({
					left: w/2 - popup.outerWidth(true)/2
				}, {queue:false, duration: 300});
				var te2 = jQuery(_options.wrapper).height();
				if (jQuery(window).height() > te2) te2 = jQuery(window).height();
				_fader.css({
					width: w,
					height: te2
				});
			});
			function closedPopup(opt1){
				popup.fadeOut(300, function(){
					popup.css({left: '-9999px'}).show();
					if (_IE) _select.css({visibility: 'visible'});
					submitBtn.unbind('click');
					jQuery(window).unbind('resize');
					if (opt1) _fader.hide();
					else {
						if (submitBtn.attr('href')) init(submitBtn.attr('href'));
						else init(submitBtn.attr('title'));
					}
				});
			}
			btnClose.click(function(){
				closedPopup(true);
				return false;
			});
			submitBtn.click(function(){
				closedPopup();
				return false;
			})
			_fader.click(function(){
				closedPopup(true);
				return false;
			});
		}
		links.click(function(){
			if (jQuery(this).attr('href')) init(jQuery(this).attr('href'));
			else init(jQuery(this).attr('title'));
			return false;
		});
	});
}

function clearFormFields(o){
	if (o.clearInputs == null) o.clearInputs = true;
	if (o.clearTextareas == null) o.clearTextareas = true;
	if (o.passwordFieldText == null) o.passwordFieldText = false;
	if (o.addClassFocus == null) o.addClassFocus = false;
	if (!o.filterClass) o.filterClass = "default";
	if(o.clearInputs) {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++ ) {
			if((inputs[i].type == "text" || inputs[i].type == "password") && inputs[i].className.indexOf(o.filterClass) == -1) {
				inputs[i].valueHtml = inputs[i].value;
				inputs[i].onfocus = function ()	{
					if(this.valueHtml == this.value) this.value = "";
					if(this.fake) {
						inputsSwap(this, this.previousSibling);
						this.previousSibling.focus();
					}
					if(o.addClassFocus && !this.fake) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				inputs[i].onblur = function () {
					if(this.value == "") {
						this.value = this.valueHtml;
						if(o.passwordFieldText && this.type == "password") inputsSwap(this, this.nextSibling);
					}
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
				if(o.passwordFieldText && inputs[i].type == "password") {
					var fakeInput = document.createElement("input");
					fakeInput.type = "text";
					fakeInput.value = inputs[i].value;
					fakeInput.className = inputs[i].className;
					fakeInput.fake = true;
					inputs[i].parentNode.insertBefore(fakeInput, inputs[i].nextSibling);
					inputsSwap(inputs[i], null);
				}
			}
		}
	}
	if(o.clearTextareas) {
		var textareas = document.getElementsByTagName("textarea");
		for(var i=0; i<textareas.length; i++) {
			if(textareas[i].className.indexOf(o.filterClass) == -1) {
				textareas[i].valueHtml = textareas[i].value;
				textareas[i].onfocus = function() {
					if(this.value == this.valueHtml) this.value = "";
					if(o.addClassFocus) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				textareas[i].onblur = function() {
					if(this.value == "") this.value = this.valueHtml;
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
			}
		}
	}
	function inputsSwap(el, el2) {
		if(el) el.style.display = "none";
		if(el2) el2.style.display = "inline";
	}
}


function initCufon() {
	Cufon.replace('.description .voir', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('#main h2', { fontFamily: 'Trade Gothic LT Pro Bold'});
	Cufon.replace('#main h3', { fontFamily: 'Trade Gothic LT Pro Bold'});
	Cufon.replace('#main h4', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.gallery .block h2', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.gallery .block h3', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.accordion .opener', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.description .content .cinema', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.box h2', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('#nav a', { fontFamily: 'Trade Gothic LT Pro Bold', hover: true});
	Cufon.replace('#footer .navigation span', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('#carousel .movie-title a', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.description .search-block .sub-nav a', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.news-gallery .frame li a', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.manufacture-block h3', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.manufacture-block .more', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.news-block h2', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.sort .text-button', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.filter .text-button', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.title-block', { fontFamily: 'Trade Gothic LT Pro Bold'});
	Cufon.replace('.affiche-block h3', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.original-title', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.box-shedule .voir', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.button .arrow', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.account .popup .title', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('.account .popup .btn-register', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('p.title_overlay', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('p.title_overlay span', { fontFamily: 'Trade Gothic LT Pro Bold'});
	Cufon.replace('p.title_overlay_film', { fontFamily: 'Trade Gothic LT Pro'});
	Cufon.replace('p.title_overlay_film span', { fontFamily: 'Trade Gothic LT Pro Bold'});
}

var VSA_scrollAreas = new Array();
var VSA_default_imagesPath = "sites/all/themes/pathe/images";
var VSA_default_btnUpImage = "transparent.gif";
var VSA_default_btnDownImage = "transparent.gif";
var VSA_default_scrollStep = 5;
var VSA_default_wheelSensitivity = 10;
var VSA_default_scrollbarPosition = 'right';//'left','right','inline';
var VSA_default_scrollButtonHeight = 1;
var VSA_default_scrollbarWidth = 22;
var VSA_resizeTimer = 2000;
var VSA_touchFlag = isTouchDevice(); // true/false - move scroll with scrollable body

function VSA_initScrollbars() {
	if(!document.body.children) return;
	var scrollElements = VSA_getElements("vscrollable", "DIV", document, "class");
	for (var i=0; i<scrollElements.length; i++)
	{
		VSA_scrollAreas[i] = new VScrollArea(i, scrollElements[i]);
	}
}

function isTouchDevice() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

function touchHandler(event) {
	var touches = event.changedTouches, first = touches[0], type = "";
	switch(event.type) {
		case "touchstart": type = "mousedown"; break;
		case "touchmove":  type = "mousemove"; break;
		case "touchend":   type = "mouseup"; break;
		default: return;
	}
	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
	first.target.dispatchEvent(simulatedEvent);
	event.preventDefault();
}

function VScrollArea(index, elem) //constructor
{
	this.index = index;
	this.element = elem;

	var attr = this.element.getAttribute("imagesPath");
	this.imagesPath = attr ? attr : VSA_default_imagesPath;

	attr = this.element.getAttribute("btnUpImage");
	this.btnUpImage = attr ? attr : VSA_default_btnUpImage;

	attr = this.element.getAttribute("btnDownImage");
	this.btnDownImage = attr ? attr : VSA_default_btnDownImage;

	attr = Number(this.element.getAttribute("scrollStep"));
	this.scrollStep = attr ? attr : VSA_default_scrollStep;

	attr = Number(this.element.getAttribute("wheelSensitivity"));
	this.wheelSensitivity = attr ? attr : VSA_default_wheelSensitivity;

	attr = this.element.getAttribute("scrollbarPosition");
	this.scrollbarPosition = attr ? attr : VSA_default_scrollbarPosition;
	
	attr = this.element.getAttribute("scrollButtonHeight");
	this.scrollButtonHeight = attr ? attr : VSA_default_scrollButtonHeight;

	attr = this.element.getAttribute("scrollbarWidth");
	this.scrollbarWidth = attr ? attr : VSA_default_scrollbarWidth;

	this.scrolling = false;

	this.iOffsetY = 0;
	this.scrollHeight = 0;
	this.scrollContent = null;
	this.scrollbar = null;
	this.scrollup = null;
	this.scrolldown = null;
	this.scrollslider = null;
	this.scroll = null;
	this.enableScrollbar = false;
	this.scrollFactor = 1;
	this.scrollingLimit = 0;
	this.topPosition = 0;

	//functions declaration
	this.init = VSA_init;
	this.scrollUp = VSA_scrollUp;
	this.scrollDown = VSA_scrollDown;
	this.createScrollBar = VSA_createScrollBar;
	this.scrollIt = VSA_scrollIt;

	this.init();
}

function VSA_init() {
	this.scrollContent = document.createElement("DIV");
	this.scrollContent.style.position = "absolute";
	this.scrollContent.style.overflow = "hidden";
	this.scrollContent.style.width = this.element.offsetWidth + "px";
	this.scrollContent.style.height = this.element.offsetHeight + "px";

	while(this.element.childNodes.length) this.scrollContent.appendChild(this.element.childNodes[0]);

	this.element.style.overflow = "hidden";
	this.element.style.display = "block";
	this.element.style.visibility = "visible";
	this.element.style.position = "relative";
	this.element.appendChild(this.scrollContent);

	this.scrollContent.className = 'scroll-content';

	this.element.index = this.index;
	this.element.over = false;
	
	var _this = this;

	if(document.all && !window.opera) {
		this.element.onmouseenter = function(){_this.element.over = true;};
		this.element.onmouseleave = function(){_this.element.over = false;}
	} else {
		this.element.onmouseover = function(){_this.element.over = true;};
		this.element.onmouseout = function(){_this.element.over = false;}
	}

	if (document.all)
	{
		this.element.onscroll = VSA_handleOnScroll;
		this.element.onresize = VSA_handleResize;
	}
	else
	{
		window.onresize = VSA_handleResize;
	}
	
	this.createScrollBar();
	
	if (window.addEventListener) {
		/* DOMMouseScroll is for mozilla. */
		this.element.addEventListener('DOMMouseScroll', VSA_handleMouseWheel, false);
	}
	/* IE/Opera. */
	this.element.onmousewheel = document.onmousewheel = VSA_handleMouseWheel;

	// move content by touch
	if(VSA_touchFlag) {
		_this.scrollContent.onmousedown = function(e) {
			var startY = e.pageY-getRealTop(_this.scrollContent);
			var origTop = _this.scrollContent.scrollTop;
			_this.scrollContent.onmousemove = function(e) {
				var moveY = e.pageY-getRealTop(_this.scrollContent);
				var iNewY = origTop-(moveY-startY);
				if(iNewY < 0) iNewY = 0;
				if(iNewY > _this.scrollContent.scrollHeight) iNewY = _this.scrollContent.scrollHeight;
				_this.scrollContent.scrollTop = iNewY;
				_this.scrollslider.style.top =  1 / _this.scrollFactor * Math.abs(_this.scrollContent.scrollTop) + _this.scrollButtonHeight + "px";
			}
		}
		_this.scrollContent.onmouseup = function(e) {
			_this.scrollContent.onmousemove = null;
		}
		this.scrollContent.addEventListener("touchstart", touchHandler, true);
		this.scrollContent.addEventListener("touchmove", touchHandler, true);
		this.scrollContent.addEventListener("touchend", touchHandler, true);
	}
}

function VSA_createScrollBar()
{
	if (this.scrollbar != null)
	{
		this.element.removeChild(this.scrollbar);
		this.scrollbar = null;
	}
	
	if (this.scrollContent.scrollHeight <= this.scrollContent.offsetHeight)
		this.enableScrollbar = false;
	else if (this.element.offsetHeight > 2*this.scrollButtonHeight)
		this.enableScrollbar = true;
	else
		this.enableScrollbar = false;

	if (this.scrollContent.scrollHeight - Math.abs(this.scrollContent.scrollTop) < this.element.offsetHeight)
		this.scrollContent.style.top = 0;

	if (this.enableScrollbar)
	{
		this.scrollbar = document.createElement("DIV");
		this.element.appendChild(this.scrollbar);
		this.scrollbar.style.position = "absolute";
		this.scrollbar.style.top = "0px";
		this.scrollbar.style.height = this.element.offsetHeight+"px";
		this.scrollbar.style.width = this.scrollbarWidth + "px";

		this.scrollbar.className = 'vscroll-bar';

		if(this.scrollbarWidth != this.scrollbar.offsetWidth)
		{
			this.scrollbarWidth = this.scrollbar.offsetHeight;
		}
		
		this.scrollbarWidth = this.scrollbar.offsetWidth;

		if(this.scrollbarPosition == 'left')
		{
			this.scrollContent.style.left = this.scrollbarWidth + 5 + "px";
			this.scrollContent.style.width = this.element.offsetWidth - this.scrollbarWidth - 5 + "px";
		}
		else if(this.scrollbarPosition == 'right')
		{
			this.scrollbar.style.left = this.element.offsetWidth - this.scrollbarWidth  + "px";
			this.scrollContent.style.width = this.element.offsetWidth - this.scrollbarWidth - 5 + "px";
		}

		//create scroll up button
		this.scrollup = document.createElement("DIV");
		this.scrollup.index = this.index;
		this.scrollup.onmousedown = VSA_handleBtnUpMouseDown;
		this.scrollup.onmouseup = VSA_handleBtnUpMouseUp;
		this.scrollup.onmouseout = VSA_handleBtnUpMouseOut;
		
		if(VSA_touchFlag) {
			this.scrollup.addEventListener("touchstart", touchHandler, true);
			this.scrollup.addEventListener("touchend", touchHandler, true);
		}
		
		this.scrollup.style.position = "absolute";
		this.scrollup.style.top = "0px";
		this.scrollup.style.left = "0px";
		this.scrollup.style.height = this.scrollButtonHeight + "px";
		this.scrollup.style.width = this.scrollbarWidth + "px";
		
		this.scrollup.innerHTML = '<img src="' + this.imagesPath + '/' + this.btnUpImage + '" border="0"/>';
		this.scrollbar.appendChild(this.scrollup);

		this.scrollup.className = 'vscroll-up';

		if(this.scrollButtonHeight != this.scrollup.offsetHeight)
		{
			this.scrollButtonHeight = this.scrollup.offsetHeight;
		}
		
		//create scroll down button
		this.scrolldown = document.createElement("DIV");
		this.scrolldown.index = this.index;
		this.scrolldown.onmousedown = VSA_handleBtnDownMouseDown;
		this.scrolldown.onmouseup = VSA_handleBtnDownMouseUp;
		this.scrolldown.onmouseout = VSA_handleBtnDownMouseOut;
		
		if(VSA_touchFlag) {
			this.scrolldown.addEventListener("touchstart", touchHandler, true);
			this.scrolldown.addEventListener("touchend", touchHandler, true);
		}
		
		this.scrolldown.style.position = "absolute";
		this.scrolldown.style.left = "0px";
		this.scrolldown.style.top =  this.scrollbar.offsetHeight - this.scrollButtonHeight + "px";
		this.scrolldown.style.width = this.scrollbarWidth + "px";
		this.scrolldown.innerHTML = '<img src="' + this.imagesPath + '/' + this.btnDownImage + '" border="0"/>';
		this.scrollbar.appendChild(this.scrolldown);

		this.scrolldown.className = 'vscroll-down';

		//create scroll
		this.scroll = document.createElement("DIV");
		this.scroll.index = this.index;
		this.scroll.style.position = "absolute";
		this.scroll.style.zIndex = 0;
		this.scroll.style.textAlign = "center";
		this.scroll.style.top = this.scrollButtonHeight + "px";
		this.scroll.style.left = "0px";
		this.scroll.style.width = this.scrollbarWidth + "px";
		
		var h = this.scrollbar.offsetHeight - 2*this.scrollButtonHeight;
		this.scroll.style.height = ((h > 0) ? h : 0) + "px";
		
		this.scroll.innerHTML = '';
		this.scroll.onclick = VSA_handleScrollbarClick;
		this.scrollbar.appendChild(this.scroll);
		this.scroll.style.overflow = "hidden";

		this.scroll.className = "vscroll-line";

		//create slider
		this.scrollslider = document.createElement("DIV");
		this.scrollslider.index = this.index;
		this.scrollslider.style.position = "absolute";
		this.scrollslider.style.zIndex = 1000;
		this.scrollslider.style.textAlign = "center";
		this.scrollslider.innerHTML = '<div id="scrollslider' + this.index + '" style="padding:0;margin:0;"><div class="scroll-bar-top"></div><div class="scroll-bar-bottom"></div></div>';
		this.scrollbar.appendChild(this.scrollslider);
		
		this.subscrollslider = document.getElementById("scrollslider"+this.index);
		this.subscrollslider.style.height = Math.round((this.scrollContent.offsetHeight/this.scrollContent.scrollHeight)*(this.scrollbar.offsetHeight - 2*this.scrollButtonHeight)) + "px";
		
		this.scrollslider.className = "vscroll-slider";
		
		this.scrollHeight = this.scrollbar.offsetHeight - 2*this.scrollButtonHeight - this.scrollslider.offsetHeight;
		this.scrollFactor = (this.scrollContent.scrollHeight - this.scrollContent.offsetHeight)/this.scrollHeight;
		this.topPosition = getRealTop(this.scrollbar) + this.scrollButtonHeight;
		/* this.scrollbarHeight = this.scrollbar.offsetHeight - 2*this.scrollButtonHeight - this.scrollslider.offsetHeight; */

		this.scrollslider.style.top = /* 1 / this.scrollFactor * Math.abs(this.scrollContent.offsetTop) +*/ this.scrollButtonHeight + "px";
		this.scrollslider.style.left = "0px";
		this.scrollslider.style.width = "100%";
		this.scrollslider.onmousedown = VSA_handleSliderMouseDown;
		if(VSA_touchFlag) {
			this.scrollslider.addEventListener("touchstart", touchHandler, true);
		}
		if (document.all)
			this.scrollslider.onmouseup = VSA_handleSliderMouseUp;
	}
	else
		this.scrollContent.style.width = this.element.offsetWidth + "px";
}

function VSA_handleBtnUpMouseDown()
{
	var sa = VSA_scrollAreas[this.index];
	sa.scrolling = true;
	sa.scrollUp();
}

function VSA_handleBtnUpMouseUp()
{
	VSA_scrollAreas[this.index].scrolling = false;
}

function VSA_handleBtnUpMouseOut()
{
	VSA_scrollAreas[this.index].scrolling = false;
}

function VSA_handleBtnDownMouseDown()
{
	var sa = VSA_scrollAreas[this.index];
	sa.scrolling = true;
	sa.scrollDown();
}

function VSA_handleBtnDownMouseUp()
{
	VSA_scrollAreas[this.index].scrolling = false;
}

function VSA_handleBtnDownMouseOut()
{
	VSA_scrollAreas[this.index].scrolling = false;
}

function VSA_scrollIt()
{
	this.scrollContent.scrollTop = this.scrollFactor * ((this.scrollslider.offsetTop + this.scrollslider.offsetHeight/2) - this.scrollButtonHeight - this.scrollslider.offsetHeight/2);
}

function VSA_scrollUp()
{
	if (this.scrollingLimit > 0)
	{
		this.scrollingLimit--;
		if (this.scrollingLimit == 0) this.scrolling = false;
	}
	if (!this.scrolling) return;
	if ( this.scrollContent.scrollTop - this.scrollStep > 0)
	{
		this.scrollContent.scrollTop -= this.scrollStep;
		this.scrollslider.style.top = 1 / this.scrollFactor * Math.abs(this.scrollContent.scrollTop) + this.scrollButtonHeight + "px";
	}
	else
	{
		this.scrollContent.scrollTop = "0";
		this.scrollslider.style.top = this.scrollButtonHeight + "px";
		return;
	}
	setTimeout("VSA_Ext_scrollUp(" + this.index + ")", 30);
}

function VSA_Ext_scrollUp(index)
{
	VSA_scrollAreas[index].scrollUp();
}

function VSA_scrollDown()
{
	if (this.scrollingLimit > 0)
	{
		this.scrollingLimit--;
		if (this.scrollingLimit == 0) this.scrolling = false;
	}
	if (!this.scrolling) return;


	this.scrollContent.scrollTop += this.scrollStep;
	this.scrollslider.style.top =  1 / this.scrollFactor * Math.abs(this.scrollContent.scrollTop) + this.scrollButtonHeight + "px";

	if (this.scrollContent.scrollTop >= (this.scrollContent.scrollHeight - this.scrollContent.offsetHeight))
	{
		this.scrollContent.scrollTop = (this.scrollContent.scrollHeight - this.scrollContent.offsetHeight);
		this.scrollslider.style.top = this.scrollbar.offsetHeight - this.scrollButtonHeight - this.scrollslider.offsetHeight + "px";
		return;
	}

	setTimeout("VSA_Ext_scrollDown(" + this.index + ")", 30);
}

function VSA_Ext_scrollDown(index)
{
	VSA_scrollAreas[index].scrollDown();
}

function VSA_handleMouseMove(evt)
{
	var sa = VSA_scrollAreas[((document.all && !window.opera) ? this.index : document.documentElement.scrollAreaIndex)];
	var posy = 0;
	if (!evt) var evt = window.event;
	
	if (evt.pageY)
		posy = evt.pageY;
	else if (evt.clientY)
		posy = evt.clientY;
			
		if (document.all && !window.opera)
		{
			if(!document.addEventListener) {
				posy += document.documentElement.scrollTop;
			}
		}

	var iNewY = posy - sa.iOffsetY - getRealTop(sa.scrollbar) - sa.scrollButtonHeight;
		iNewY += sa.scrollButtonHeight;
		
	if (iNewY < sa.scrollButtonHeight)
		iNewY = sa.scrollButtonHeight;
	if (iNewY > (sa.scrollbar.offsetHeight - sa.scrollButtonHeight) - sa.scrollslider.offsetHeight)
		iNewY = (sa.scrollbar.offsetHeight - sa.scrollButtonHeight) - sa.scrollslider.offsetHeight;

	sa.scrollslider.style.top = iNewY + "px";

	sa.scrollIt();
}

function VSA_handleSliderMouseDown(evt)
{
	if (!(document.uniqueID && document.compatMode && !window.XMLHttpRequest))
	{
		document.onselectstart = function() { return false; }
		document.onmousedown = function() { return false; }
	}

	var sa = VSA_scrollAreas[this.index];
	if (document.all && !window.opera)
	{
		sa.scrollslider.setCapture()
		sa.iOffsetY = event.offsetY;
		sa.scrollslider.onmousemove = VSA_handleMouseMove;
		if(VSA_touchFlag) {
			sa.scrollslider.addEventListener("touchmove", touchHandler, true);
		}
	}
	else
	{
		if(window.opera)
		{
			sa.iOffsetY = event.offsetY;
		}
		else
		{
			sa.iOffsetY = evt.layerY;
		}
		document.documentElement.scrollAreaIndex = sa.index;
		document.documentElement.addEventListener("mousemove", VSA_handleMouseMove, true);
		document.documentElement.addEventListener("mouseup", VSA_handleSliderMouseUp, true);
		if(VSA_touchFlag) {
			document.documentElement.addEventListener("touchmove", touchHandler, true);
			document.documentElement.addEventListener("touchend", touchHandler, true);
		}
	}
	return false;
}

function VSA_handleSliderMouseUp()
{
	if (!(document.uniqueID && document.compatMode && !window.XMLHttpRequest))
	{
		document.onmousedown = null;
		document.onselectstart = null;
	}

	if (document.all && !window.opera)
	{
		var sa = VSA_scrollAreas[this.index];
		sa.scrollslider.onmousemove = null;
		sa.scrollslider.releaseCapture();
		sa.scrollIt();
	}
	else
	{
		var sa = VSA_scrollAreas[document.documentElement.scrollAreaIndex];
		document.documentElement.removeEventListener("mousemove", VSA_handleMouseMove, true);
		document.documentElement.removeEventListener("mouseup", VSA_handleSliderMouseUp, true);
		if(VSA_touchFlag) {
			document.documentElement.removeEventListener("touchmove", touchHandler, true);
			document.documentElement.removeEventListener("touchend", touchHandler, true);
		}
		sa.scrollIt();
	}
	return false;
}

function VSA_handleResize()
{
	if (VSA_resizeTimer)
	{
		clearTimeout(VSA_resizeTimer);
		VSA_resizeTimer = 0;
	}
	VSA_resizeTimer = setTimeout("VSA_performResizeEvent()", 100);
}

function VSA_performResizeEvent()
{
	for (var i=0; i<VSA_scrollAreas.length; i++)
		VSA_scrollAreas[i].createScrollBar();
}
function VSA_handleMouseWheel(event){
	if (this.index != null) {
		var sa = VSA_scrollAreas[this.index];
		if (sa.scrollbar == null) return;
		sa.scrolling = true;
		sa.scrollingLimit = sa.wheelSensitivity;

		var delta = 0;
		if (!event) /* For IE. */
			event = window.event;
		if (event.wheelDelta) { /* IE/Opera. */
			delta = event.wheelDelta/120;
			/*if (window.opera) delta = -delta;*/
		} else if (event.detail) { /* Mozilla case. */
			delta = -event.detail/3;
		}

		if (delta && sa.element.over) {
			if (delta > 0) {
				sa.scrollUp();
			} else {
				sa.scrollDown();
			}
			if (event.preventDefault) {
				event.preventDefault();
			}
			event.returnValue = false;
		}
	}
}

function VSA_handleSelectStart()
{
	event.returnValue = false;
}

function VSA_handleScrollbarClick(evt)
{
	var sa = VSA_scrollAreas[this.index];
	var offsetY = (document.all ? event.offsetY : evt.layerY);

	if (offsetY < (sa.scrollButtonHeight + sa.scrollslider.offsetHeight/2))
		sa.scrollslider.style.top = sa.scrollButtonHeight + "px";
	else if (offsetY > (sa.scrollbar.offsetHeight - sa.scrollButtonHeight - sa.scrollslider.offsetHeight))
		sa.scrollslider.style.top = sa.scrollbar.offsetHeight - sa.scrollButtonHeight - sa.scrollslider.offsetHeight + "px";
	else
	{
		sa.scrollslider.style.top = offsetY + sa.scrollButtonHeight - sa.scrollslider.offsetHeight/2 + "px";
	}
	sa.scrollIt();
}

function VSA_handleOnScroll()
{
	//event.srcElement.doScroll("pageUp");
}

//--- common functions ----

function VSA_getElements(attrValue, tagName, ownerNode, attrName) //get Elements By Attribute Name
{
	if (!tagName) tagName = "*";
	if (!ownerNode) ownerNode = document;
	if (!attrName) attrName = "name";
	var result = [];
	var nl = ownerNode.getElementsByTagName(tagName);
	for (var i=0; i<nl.length; i++)
	{
	//	if (nl.item(i).getAttribute(attrName) == attrValue)
//		result.push(nl.item(i));
		if (nl.item(i).className.indexOf(attrValue) != -1)
		result.push(nl.item(i));
	}
	return result;
}
function getRealTop(obj) {
	var posTop = 0;
	while (obj.offsetParent) {
		posTop += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return posTop;
}
// initPopups
function initPopups()
{
	initPopup({
		openEvent:'click'
	});
	initPopup({
		popupHolderClass:'popup-hover'
	});
}
if (window.addEventListener)
	window.addEventListener("load", initPopups, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPopups);
	
function initPopup(_popup) {
	if (!_popup.popupHolderTag) _popup.popupHolderTag = 'div';
	if (!_popup.popupTag) _popup.popupTag = 'div';
	if (!_popup.popupHolderClass) _popup.popupHolderClass = 'popup-holder';
	if (!_popup.popupClass) _popup.popupClass = 'popup1';
	if (!_popup.linkOpenClass) _popup.linkOpenClass = 'open';
	if (!_popup.linkCloseClass) _popup.linkCloseClass = 'close';
	if (!_popup.openClass) _popup.openClass = 'active';
	if (!_popup.openEvent) _popup.openEvent = 'hover';
	
	var timer = [];	
	var _popupHolderTag = document.getElementsByTagName(_popup.popupHolderTag);
	if (_popupHolderTag) {
		for (var i=0; i<_popupHolderTag.length; i++) {
			if (_popupHolderTag[i].className.indexOf(_popup.popupHolderClass) != -1) {
				var _popupLink = _popupHolderTag[i].getElementsByTagName('a');
				for (var j=0; j<_popupLink.length; j++) {
					_popupLink[j].parent = _popupHolderTag[i];
					if (_popupLink[j].className.indexOf(_popup.linkOpenClass) != -1) {
						if (_popup.openEvent == 'click') {
							_popupLink[j].onclick = function(){
								if (this.parent.className.indexOf(_popup.openClass) != -1) {
									this.parent.className = this.parent.className.replace(_popup.openClass,'');
								} else {
									this.parent.className += ' '+_popup.openClass;
								}
								return false;
							}
						} else {
							var _popupTag = _popupHolderTag[i].getElementsByTagName(_popup.popupTag);
							for (var k=0; k<_popupTag.length; k++) {
								if (_popupTag[k].className.indexOf(_popup.popupClass) != -1) {
									_popupTag[k].parent = _popupHolderTag[i];
									_popupTag[k].onmouseover = function(){
										if (timer[j]) clearTimeout(timer[j]);
										if (this.parent.className.indexOf(_popup.openClass) == -1) {
											this.parent.className += ' '+_popup.openClass;
										}
									}
									_popupTag[k].onmouseout = function(){
										var _this = this;
										timer[j] = setTimeout(function(){
											_this.parent.className = _this.parent.className.replace(_popup.openClass,'');
										},2);
									}	
								}
							}
							_popupLink[j].onmouseover = function(){
								if (timer[j]) clearTimeout(timer[j]);
								if (this.parent.className.indexOf(_popup.openClass) == -1) {
									this.parent.className += ' '+_popup.openClass;
								}
							}
							_popupLink[j].onmouseout = function(){
								var _this = this;
								timer[j] = setTimeout(function(){
									_this.parent.className = _this.parent.className.replace(_popup.openClass,'');
								},2);
							}
						}
					} else if (_popupLink[j].className.indexOf(_popup.linkCloseClass) != -1) {
						_popupLink[j].onclick = function(){
							if (this.parent.className.indexOf(_popup.openClass) != -1) {
								this.parent.className = this.parent.className.replace(_popup.openClass,'');
							} else {
								this.parent.className += ' '+_popup.openClass;
							}
							return false;
						}
					}
				}
			}		
		}
	}
}
// custom forms script
var _selectHeight = 24;
var all_selects = false;
var active_select = null;
var selectText = "please select";

function initCustomForms() {
	getElements();
	separateElements();
	//replaceRadios();
	//replaceCheckboxes();
	replaceSelects();

	// hide drop when scrolling or resizing window
	if (window.addEventListener) {
		window.addEventListener("scroll", hideActiveSelectDrop, false);
		window.addEventListener("resize", hideActiveSelectDrop, false);
	}
	else if (window.attachEvent) {
		window.attachEvent("onscroll", hideActiveSelectDrop);
		window.attachEvent("onresize", hideActiveSelectDrop);
	}
}

function refreshCustomForms() {
	// remove prevously created elements
	if(window.inputs) {
		for(var i = 0; i < checkboxes.length; i++) {
			if(checkboxes[i].checked) {checkboxes[i]._ca.className = "checkboxAreaChecked";}
			else {checkboxes[i]._ca.className = "checkboxArea";}
		}
		for(var i = 0; i < radios.length; i++) {
			if(radios[i].checked) {radios[i]._ra.className = "radioAreaChecked";}
			else {radios[i]._ra.className = "radioArea";}
		}
		for(var i = 0; i < selects.length; i++) {
			var newText = document.createElement('div');
			if (selects[i].options[selects[i].selectedIndex].title.indexOf('image') != -1) {
				newText.innerHTML = '<img src="'+selects[i].options[selects[i].selectedIndex].title+'" alt="" />';
				newText.innerHTML += '<span>'+selects[i].options[selects[i].selectedIndex].text+'</span>';
			} else {
				newText.innerHTML = selects[i].options[selects[i].selectedIndex].text;
			}
			document.getElementById("mySelectText"+i).innerHTML = newText.innerHTML;
		}
	}
}

// getting all the required elements
function getElements() {
	// remove prevously created elements
	if(window.inputs) {
		for(var i = 0; i < inputs.length; i++) {
			inputs[i].className = inputs[i].className.replace('outtaHere','');
			if(inputs[i]._ca) inputs[i]._ca.parentNode.removeChild(inputs[i]._ca);
			else if(inputs[i]._ra) inputs[i]._ra.parentNode.removeChild(inputs[i]._ra);
		}
		for(i = 0; i < selects.length; i++) {
			selects[i].replaced = null;
			selects[i].className = selects[i].className.replace('outtaHere','');
			selects[i]._optionsDiv._parent.parentNode.removeChild(selects[i]._optionsDiv._parent);
			selects[i]._optionsDiv.parentNode.removeChild(selects[i]._optionsDiv);
		}
	}

	// reset state
	inputs = new Array();
	selects = new Array();
	labels = new Array();
	radios = new Array();
	radioLabels = new Array();
	checkboxes = new Array();
	checkboxLabels = new Array();
	for (var nf = 0; nf < document.getElementsByTagName("form").length; nf++) {
		if(document.forms[nf].className.indexOf("default") < 0) {
			for(var nfi = 0; nfi < document.forms[nf].getElementsByTagName("input").length; nfi++) {inputs.push(document.forms[nf].getElementsByTagName("input")[nfi]);}
			for(var nfl = 0; nfl < document.forms[nf].getElementsByTagName("label").length; nfl++) {labels.push(document.forms[nf].getElementsByTagName("label")[nfl]);}
			for(var nfs = 0; nfs < document.forms[nf].getElementsByTagName("select").length; nfs++) {selects.push(document.forms[nf].getElementsByTagName("select")[nfs]);}
		}
	}
}

// separating all the elements in their respective arrays
function separateElements() {
	var r = 0; var c = 0; var t = 0; var rl = 0; var cl = 0; var tl = 0; var b = 0;
	for (var q = 0; q < inputs.length; q++) {
		if(inputs[q].type == "radio") {
			radios[r] = inputs[q]; ++r;
			for(var w = 0; w < labels.length; w++) {
				if((inputs[q].id) && labels[w].htmlFor == inputs[q].id)
				{
					radioLabels[rl] = labels[w];
					++rl;
				}
			}
		}
		if(inputs[q].type == "checkbox") {
			checkboxes[c] = inputs[q]; ++c;
			for(var w = 0; w < labels.length; w++) {
				if((inputs[q].id) && (labels[w].htmlFor == inputs[q].id))
				{
					checkboxLabels[cl] = labels[w];
					++cl;
				}
			}
		}
	}
}

//replacing radio buttons
function replaceRadios() {
	for (var q = 0; q < radios.length; q++) {
		radios[q].className += " outtaHere";
		var radioArea = document.createElement("div");
		if(radios[q].checked) {
			radioArea.className = "radioAreaChecked";
		}
		else
		{
			radioArea.className = "radioArea";
		}
		radioArea.id = "myRadio" + q;
		radios[q].parentNode.insertBefore(radioArea, radios[q]);
		radios[q]._ra = radioArea;

		radioArea.onclick = new Function('rechangeRadios('+q+')');
		if (radioLabels[q]) {
			if(radios[q].checked) {
				radioLabels[q].className += "radioAreaCheckedLabel";
			}
			radioLabels[q].onclick = new Function('rechangeRadios('+q+')');
		}
	}
	return true;
}

//checking radios
function checkRadios(who) {
	var what = radios[who]._ra;
	for(var q = 0; q < radios.length; q++) {
		if((radios[q]._ra.className == "radioAreaChecked") && (radios[q]._ra.nextSibling.name == radios[who].name))
		{
			radios[q]._ra.className = "radioArea";
		}
	}
	what.className = "radioAreaChecked";
}

//changing radios
function changeRadios(who) {
	if(radios[who].checked) {
		for(var q = 0; q < radios.length; q++) {
			if(radios[q].name == radios[who].name) {
				radios[q].checked = false;
			} 
			radios[who].checked = true; 
			checkRadios(who);
		}
	}
}

//rechanging radios
function rechangeRadios(who) {
	if(!radios[who].checked) {
		for(var q = 0; q < radios.length; q++) {
			if(radios[q].name == radios[who].name) {
				radios[q].checked = false; 
			}
			if(radioLabels[q]) {
				radioLabels[q].className = radioLabels[q].className.replace("radioAreaCheckedLabel","");
			}
		}
		radios[who].checked = true; 
		if(radioLabels[who] && radioLabels[who].className.indexOf("radioAreaCheckedLabel") < 0) {
			radioLabels[who].className += " radioAreaCheckedLabel";
		}
		checkRadios(who);
		
		if(window.$ && window.$.fn) {
			$(radios[who]).trigger('change');
		}
	}
}

//replacing checkboxes
function replaceCheckboxes() {
	for (var q = 0; q < checkboxes.length; q++) {
		checkboxes[q].className += " outtaHere";
		var checkboxArea = document.createElement("div");
		if(checkboxes[q].checked) {
			checkboxArea.className = "checkboxAreaChecked";
			if(checkboxLabels[q]) {
				checkboxLabels[q].className += " checkboxAreaCheckedLabel"
			}
		}
		else {
			checkboxArea.className = "checkboxArea";
		}
		checkboxArea.id = "myCheckbox" + q;
		checkboxes[q].parentNode.insertBefore(checkboxArea, checkboxes[q]);
		checkboxes[q]._ca = checkboxArea;
		checkboxArea.onclick = new Function('rechangeCheckboxes('+q+')');
		if (checkboxLabels[q]) {
			checkboxLabels[q].onclick = new Function('changeCheckboxes('+q+')');
		}
		checkboxes[q].onkeydown = checkEvent;
	}
	return true;
}

//checking checkboxes
function checkCheckboxes(who, action) {
	var what = checkboxes[who]._ca;
	if(action == true) {
		what.className = "checkboxAreaChecked";
		what.checked = true;
	}
	if(action == false) {
		what.className = "checkboxArea";
		what.checked = false;
	}
	if(checkboxLabels[who]) {
		if(checkboxes[who].checked) {
			if(checkboxLabels[who].className.indexOf("checkboxAreaCheckedLabel") < 0) {
				checkboxLabels[who].className += " checkboxAreaCheckedLabel";
			}
		} else {
			checkboxLabels[who].className = checkboxLabels[who].className.replace("checkboxAreaCheckedLabel", "");
		}
	}
	
}

//changing checkboxes
function changeCheckboxes(who) {
	setTimeout(function(){
		if(checkboxes[who].checked) {
			checkCheckboxes(who, true);
		} else {
			checkCheckboxes(who, false);
		}
	},10);
}

// rechanging checkboxes
function rechangeCheckboxes(who) {
	var tester = false;
	if(checkboxes[who].checked == true) {
		tester = false;
	}
	else {
		tester = true;
	}
	checkboxes[who].checked = tester;
	checkCheckboxes(who, tester);
	if(window.$ && window.$.fn) {
		$(checkboxes[who]).trigger('change');
	}
}

// check event
function checkEvent(e) {
	if (!e) var e = window.event;
	if(e.keyCode == 32) {for (var q = 0; q < checkboxes.length; q++) {if(this == checkboxes[q]) {changeCheckboxes(q);}}} //check if space is pressed
}

// replace selects
function replaceSelects() {
	for(var q = 0; q < selects.length; q++) {
		if (!selects[q].replaced && selects[q].offsetWidth) {
			selects[q]._number = q;
			//create and build div structure
			var selectArea = document.createElement("div");
			var left = document.createElement("span");
			left.className = "left";
			selectArea.appendChild(left);

			var disabled = document.createElement("span");
			disabled.className = "disabled";
			selectArea.appendChild(disabled);

			selects[q]._disabled = disabled;
			var center = document.createElement("span");
			var button = document.createElement("a");
			var text = document.createTextNode(selectText);
			center.id = "mySelectText"+q;

			var stWidth = selects[q].offsetWidth;
			selectArea.style.width = stWidth + "px";
			if (selects[q].parentNode.className.indexOf("type2") != -1){
				button.href = "javascript:showOptions("+q+",true)";
			} else {
				button.href = "javascript:showOptions("+q+",false)";
			}
			button.className = "selectButton";
			selectArea.className = "selectArea";
			selectArea.className += " " + selects[q].className;
			selectArea.id = "sarea"+q;
			center.className = "center";
			center.appendChild(text);
			selectArea.appendChild(center);
			selectArea.appendChild(button);

			//insert select div
			selects[q].parentNode.insertBefore(selectArea, selects[q]);
			//build & place options div

			var optionsDiv = document.createElement("div");
			var optionsList = document.createElement("ul");
			optionsDiv.innerHTML += "<div class='select-top'><div></div></div>";
			optionsDiv.appendChild(optionsList);
			
			selects[q]._optionsDiv = optionsDiv;
			selects[q]._options = optionsList;

			optionsDiv.style.width = stWidth + "px";
			optionsDiv._parent = selectArea;

			optionsDiv.className = "optionsDivInvisible";
			optionsDiv.id = "optionsDiv"+q;

			if(selects[q].className.length) {
				optionsDiv.className += ' drop-'+selects[q].className;
			}

			populateSelectOptions(selects[q]);
			optionsDiv.innerHTML += "<div class='select-bottom'><div class='select-bottom-left'></div><div class='select-bottom-right'></div></div>";
			document.body.appendChild(optionsDiv);
			selects[q].replaced = true;
			
			//hide the select field
			if(selects[q].className.indexOf('default') != -1) {
				selectArea.style.display = 'none';
			} else {
				selects[q].className += " outtaHere";
			}
		}
		all_selects = true;
	}
}

//collecting select options
function populateSelectOptions(me) {
	me._options.innerHTML = "";
	for(var w = 0; w < me.options.length; w++) {
		var optionHolder = document.createElement('li');
		var optionLink = document.createElement('a');
		var optionTxt;
		if (me.options[w].title.indexOf('image') != -1) {
			optionTxt = document.createElement('img');
			optionSpan = document.createElement('span');
			optionTxt.src = me.options[w].title;
			optionSpan = document.createTextNode(me.options[w].text);
		} else {
			optionTxt = document.createTextNode(me.options[w].text);
		}
		
		// hidden default option
		if(me.options[w].className.indexOf('default') != -1) {
			optionHolder.style.display = 'none'
		}
		
		optionLink.href = "javascript:showOptions("+me._number+"); selectMe('"+me.id+"',"+w+","+me._number+");";
		if (me.options[w].title.indexOf('image') != -1) {
			optionLink.appendChild(optionTxt);
			optionLink.appendChild(optionSpan);
		} else {
			optionLink.appendChild(optionTxt);
		}
		optionHolder.appendChild(optionLink);
		me._options.appendChild(optionHolder);
		//check for pre-selected items
		if(me.options[w].selected) {
			selectMe(me.id,w,me._number,true);
		}
	}
	if (me.disabled) {
		me._disabled.style.display = "block";
	} else {
		me._disabled.style.display = "none";
	}
}

//selecting me
function selectMe(selectFieldId,linkNo,selectNo,quiet) {
	selectField = selects[selectNo];
	for(var k = 0; k < selectField.options.length; k++) {
		if(k==linkNo) {
			selectField.options[k].selected = true;
		}
		else {
			selectField.options[k].selected = false;
		}
	}
	
	//show selected option
	textVar = document.getElementById("mySelectText"+selectNo);
	var newText;
	var optionSpan;
	if (selectField.options[linkNo].title.indexOf('image') != -1) {
		newText = document.createElement('img');
		newText.src = selectField.options[linkNo].title;
		optionSpan = document.createElement('span');
		optionSpan = document.createTextNode(selectField.options[linkNo].text);
	} else {
		newText = document.createTextNode(selectField.options[linkNo].text);
	}
	if (selectField.options[linkNo].title.indexOf('image') != -1) {
		if (textVar.childNodes.length > 1) textVar.removeChild(textVar.childNodes[0]);
		textVar.replaceChild(newText, textVar.childNodes[0]);
		textVar.appendChild(optionSpan);
	} else {
		if (textVar.childNodes.length > 1) textVar.removeChild(textVar.childNodes[0]);
		textVar.replaceChild(newText, textVar.childNodes[0]);
	}
	if (!quiet && all_selects) {
		if(typeof selectField.onchange === 'function') {
			selectField.onchange();
		}
		if(window.$ && window.$.fn) {
			$(selectField).trigger('change');
		}
	}
}

//showing options
function showOptions(g) {
	_elem = document.getElementById("optionsDiv"+g);
	var divArea = document.getElementById("sarea"+g);
	if (active_select && active_select != _elem) {
		active_select.className = active_select.className.replace('optionsDivVisible',' optionsDivInvisible');
		active_select.style.height = "auto";
	}
	if(_elem.className.indexOf("optionsDivInvisible") != -1) {
		_elem.style.left = "-9999px";
		_elem.style.top = findPosY(divArea) + _selectHeight + 'px';
		_elem.className = _elem.className.replace('optionsDivInvisible','');
		_elem.className += " optionsDivVisible";
		/*if (_elem.offsetHeight > 200)
		{
			_elem.style.height = "200px";
		}*/
		_elem.style.left = findPosX(divArea) + 'px';
		
		active_select = _elem;
		if(_elem._parent.className.indexOf('selectAreaActive') < 0) {
			_elem._parent.className += ' selectAreaActive';
		}
		
		if(document.documentElement) {
			document.documentElement.onclick = hideSelectOptions;
		} else {
			window.onclick = hideSelectOptions;
		}
	}
	else if(_elem.className.indexOf("optionsDivVisible") != -1) {
		hideActiveSelectDrop();
	}
	
	// for mouseout
	/*_elem.timer = false;
	_elem.onmouseover = function() {
		if (this.timer) clearTimeout(this.timer);
	}
	_elem.onmouseout = function() {
		var _this = this;
		this.timer = setTimeout(function(){
			_this.style.height = "auto";
			_this.className = _this.className.replace('optionsDivVisible','');
			if (_elem.className.indexOf('optionsDivInvisible') == -1)
				_this.className += " optionsDivInvisible";
		},200);
	}*/
}

function hideActiveSelectDrop() {
	if(active_select) {
		active_select.style.height = "auto";
		active_select.className = active_select.className.replace('optionsDivVisible', '');
		active_select.className = active_select.className.replace('optionsDivInvisible', '');
		active_select._parent.className = active_select._parent.className.replace('selectAreaActive','')
		active_select.className += " optionsDivInvisible";
		active_select = false;
	}
}

function hideSelectOptions(e) {
	if(active_select) {
		if(!e) e = window.event;
		var _target = (e.target || e.srcElement);
		if(!isElementBefore(_target,'selectArea') && !isElementBefore(_target,'optionsDiv')) {
			hideActiveSelectDrop();
			if(document.documentElement) {
				document.documentElement.onclick = function(){};
			}
			else {
				window.onclick = null;
			}
		}
	}
}

function isElementBefore(_el,_class) {
	var _parent = _el;
	do {
		_parent = _parent.parentNode;
	}
	while(_parent && _parent.className != null && _parent.className.indexOf(_class) == -1)
	return _parent.className && _parent.className.indexOf(_class) != -1;
}

function findPosY(obj) {
	if (obj.getBoundingClientRect) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
		return Math.round(obj.getBoundingClientRect().top + scrollTop - clientTop);
	} else {
		var posTop = 0;
		while (obj.offsetParent) {posTop += obj.offsetTop; obj = obj.offsetParent;}
		return posTop;
	}
}

function findPosX(obj) {
	if (obj.getBoundingClientRect) {
		var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
		var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
		return Math.round(obj.getBoundingClientRect().left + scrollLeft - clientLeft);
	} else {
		var posLeft = 0;
		while (obj.offsetParent) {posLeft += obj.offsetLeft; obj = obj.offsetParent;}
		return posLeft;
	}
}

if (window.addEventListener) window.addEventListener("load", initCustomForms, false);
else if (window.attachEvent) window.attachEvent("onload", initCustomForms);
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());
Cufon.registerFont({"w":159,"face":{"font-family":"Trade Gothic LT Pro Bold","font-weight":700,"font-stretch":"condensed","units-per-em":"360","panose-1":"2 11 8 6 4 3 3 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-60 -347 360 84.5941","underline-thickness":"18","underline-position":"-27","stemh":"33","stemv":"35","unicode-range":"U+000D-U+FB02"},"glyphs":{" ":{"w":79},"\u0149":{"d":"90,0r-40,0r0,-194r38,0r0,20v24,-29,83,-36,83,17r0,157r-40,0r0,-150v-3,-23,-29,-14,-41,-2r0,152xm42,-260r0,43r-24,44r-19,0r17,-44r-16,0r0,-43r42,0","w":190},"\u0132":{"d":"72,0r-44,0r0,-260r44,0r0,260xm97,4r0,-39v20,2,33,-5,33,-22r0,-203r44,0r0,208v3,38,-23,60,-77,56","w":195},"\ufb01":{"d":"22,0r0,-161r-23,0r0,-33r23,0v-5,-50,13,-77,65,-70r0,34v-25,-5,-26,13,-24,36r23,0r0,33r-23,0r0,161r-41,0xm140,0r-40,0r0,-194r40,0r0,194xm140,-223r-40,0r0,-37r40,0r0,37"},"\ufb02":{"d":"22,0r0,-161r-23,0r0,-33r23,0v-5,-50,13,-77,65,-70r0,34v-25,-5,-26,13,-24,36r23,0r0,33r-23,0r0,161r-41,0xm140,0r-40,0r0,-260r40,0r0,260"},"\u0133":{"d":"60,0r-40,0r0,-194r40,0r0,194xm60,-223r-40,0r0,-37r40,0r0,37xm77,61r0,-37v14,1,22,-3,22,-15r0,-202r40,0r0,204v-2,46,-25,52,-62,50xm139,-223r-40,0r0,-37r40,0r0,37","w":156},"\r":{"w":100},"!":{"d":"35,-76r-8,-184r46,0r-8,184r-30,0xm71,0r-42,0r0,-42r42,0r0,42","w":100},"\"":{"d":"14,-161r0,-99r34,0r0,99r-34,0xm72,-161r0,-99r33,0r0,99r-33,0","w":119},"#":{"d":"147,-105r0,28r-26,0r-9,77r-32,0r9,-77r-29,0r-9,77r-33,0r9,-77r-23,0r0,-28r27,0r5,-50r-23,0r0,-28r27,0r9,-77r32,0r-9,77r29,0r9,-77r32,0r-9,77r23,0r0,28r-26,0r-5,50r22,0xm98,-155r-29,0r-6,50r29,0"},"$":{"d":"69,-260r0,-32r22,0r0,32v20,4,38,16,50,33r-28,23v-5,-9,-11,-18,-22,-21r0,75v31,19,58,40,58,80v0,36,-20,67,-58,70r0,42r-22,0r0,-42v-25,-3,-45,-21,-58,-41r30,-22v5,13,14,24,28,28r0,-84v-28,-17,-55,-39,-55,-74v0,-33,20,-62,55,-67xm69,-162r0,-63v-26,10,-21,49,0,63xm91,-105r0,70v30,-11,23,-56,0,-70"},"%":{"d":"18,-201v0,-33,26,-59,59,-59v33,0,59,26,59,59v0,33,-26,59,-59,59v-33,0,-59,-26,-59,-59xm47,-201v0,17,13,30,30,30v17,0,30,-13,30,-30v0,-17,-13,-30,-30,-30v-17,0,-30,13,-30,30xm173,-59v0,17,13,30,30,30v17,0,30,-13,30,-30v0,-17,-13,-30,-30,-30v-17,0,-30,13,-30,30xm144,-59v0,-33,26,-59,59,-59v33,0,59,26,59,59v0,33,-26,59,-59,59v-33,0,-59,-26,-59,-59xm201,-264r27,0r-148,268r-27,0","w":280},"&":{"d":"87,-238v-30,0,-16,56,-6,76v10,-14,22,-30,22,-48v0,-20,-6,-28,-16,-28xm145,-126r37,10v-5,24,-15,46,-24,68v7,6,16,11,25,12r0,40v-19,0,-37,-7,-51,-20v-35,39,-113,18,-113,-41v0,-27,16,-55,34,-74v-27,-46,-35,-132,36,-133v33,0,53,22,53,54v0,32,-25,57,-45,79v9,19,20,37,33,53v6,-16,11,-31,15,-48xm71,-95v-18,20,-14,59,15,60v9,0,14,-2,21,-8v-14,-16,-27,-33,-36,-52","w":200},"'":{"d":"23,-161r0,-99r34,0r0,99r-34,0","w":79},"(":{"d":"54,-264r35,0v-56,83,-57,212,0,295r-35,0v-55,-82,-55,-213,0,-295","w":100},")":{"d":"12,-264r34,0v56,82,56,213,0,295r-34,0v56,-83,55,-212,0,-295","w":100},"*":{"d":"134,-232r11,32v-18,1,-37,4,-55,6v13,14,26,26,40,38r-28,20v-6,-17,-14,-33,-22,-50v-8,17,-16,33,-22,50r-28,-20v14,-12,26,-24,39,-38v-18,-2,-36,-5,-54,-6r11,-32v15,9,30,17,46,24v-1,-18,-5,-35,-9,-52r34,0v-4,17,-8,34,-9,52v16,-7,31,-15,46,-24"},"+":{"d":"90,-109r0,-73r36,0r0,73r73,0r0,36r-73,0r0,73r-36,0r0,-73r-73,0r0,-36r73,0","w":216},",":{"d":"61,-42r0,42r-25,45r-19,0r18,-45r-16,0r0,-42r42,0","w":79},"-":{"d":"104,-80r-88,0r0,-33r88,0r0,33","w":119},".":{"d":"61,0r-42,0r0,-42r42,0r0,42","w":79},"\/":{"d":"-8,4r80,-268r36,0r-80,268r-36,0","w":100},"0":{"d":"101,-57r0,-146v0,-17,-8,-25,-21,-25v-13,0,-21,8,-21,25r0,146v0,17,8,25,21,25v13,0,21,-8,21,-25xm80,4v-90,0,-63,-116,-63,-196v0,-49,18,-72,63,-72v90,0,63,116,63,196v0,49,-18,72,-63,72"},"1":{"d":"64,0r0,-206r-36,0r0,-24v20,-10,38,-21,53,-34r23,0r0,264r-40,0"},"2":{"d":"140,0r-124,0r0,-35v55,-81,86,-126,86,-164v0,-21,-9,-29,-21,-29v-20,-1,-22,22,-21,44r-43,0v-3,-47,21,-80,67,-80v37,0,60,28,60,58v0,41,-13,71,-83,169r79,0r0,37"},"3":{"d":"17,-75r40,0v-1,21,0,44,20,43v20,4,21,-26,21,-50v0,-28,-11,-37,-38,-37r0,-35v26,0,36,-9,36,-40v0,-43,-39,-47,-38,-8r0,11r-40,0v-3,-44,18,-72,61,-73v65,-3,78,101,30,127v57,24,37,154,-33,141v-42,1,-63,-27,-59,-79"},"4":{"d":"40,-96r44,0r0,-101xm84,0r0,-63r-78,0r0,-33r75,-164r44,0r0,164r23,0r0,33r-23,0r0,63r-41,0"},"5":{"d":"18,-75r40,0v-1,21,0,43,20,43v32,0,21,-58,22,-90v2,-35,-39,-27,-43,-4r-34,0v1,-40,3,-72,3,-134r108,0r-1,37r-70,0v0,18,-4,40,-2,57v36,-36,82,-8,82,53v0,64,-5,117,-61,117v-43,0,-70,-26,-64,-79"},"6":{"d":"138,-190r-39,0v1,-20,-1,-38,-19,-38v-32,0,-18,55,-21,85v28,-32,84,-21,84,36v0,63,-6,111,-63,111v-90,0,-63,-116,-63,-196v0,-49,18,-72,63,-72v40,0,62,30,58,74xm59,-113v2,30,-10,81,21,81v28,0,20,-41,21,-68v1,-33,-29,-27,-42,-13"},"7":{"d":"95,-223r-75,0r0,-37r118,0r0,25r-53,235r-43,0"},"8":{"d":"80,4v-69,10,-84,-113,-36,-143v-46,-31,-22,-135,36,-125v58,-10,82,93,36,125v48,30,33,154,-36,143xm80,-32v17,0,23,-16,23,-43v0,-27,-6,-43,-23,-43v-17,0,-23,16,-23,43v0,27,6,43,23,43xm80,-157v14,0,19,-11,19,-36v0,-25,-5,-35,-19,-35v-14,0,-20,10,-20,35v0,25,6,36,20,36"},"9":{"d":"22,-70r39,0v-1,20,1,38,19,38v32,0,18,-55,21,-85v-28,32,-84,21,-84,-36v0,-63,6,-111,63,-111v90,0,63,116,63,196v0,49,-18,72,-63,72v-40,0,-62,-30,-58,-74xm101,-147v-2,-30,10,-81,-21,-81v-28,0,-20,41,-21,68v-1,33,29,27,42,13"},":":{"d":"61,0r-42,0r0,-42r42,0r0,42xm61,-100r-42,0r0,-43r42,0r0,43","w":79},";":{"d":"61,-42r0,42r-25,45r-19,0r18,-45r-16,0r0,-42r42,0xm61,-100r-42,0r0,-43r42,0r0,43","w":79},"<":{"d":"199,-37r0,37r-182,-76r0,-30r182,-76r0,37r-131,54","w":216},"=":{"d":"199,-146r0,35r-182,0r0,-35r182,0xm199,-71r0,35r-182,0r0,-35r182,0","w":216},">":{"d":"17,0r0,-37r131,-54r-131,-54r0,-37r182,76r0,30","w":216},"?":{"d":"129,-215v0,60,-54,64,-45,139r-35,0v-9,-63,29,-98,38,-138v0,-9,-6,-16,-15,-16v-15,0,-23,14,-26,27r-34,-13v11,-61,117,-65,117,1xm87,0r-42,0r0,-42r42,0r0,42","w":140},"@":{"d":"133,-84v42,2,64,-81,16,-86v-42,-2,-65,81,-16,86xm188,-179r6,-18r29,0r-25,106v0,5,1,10,6,10v20,0,42,-28,42,-66v0,-58,-43,-88,-97,-88v-62,0,-102,45,-102,106v0,96,122,137,183,75r30,0v-61,104,-246,57,-246,-76v0,-77,61,-134,136,-134v64,0,124,44,124,110v0,74,-63,103,-89,103v-12,1,-19,-9,-22,-20v-30,40,-94,12,-94,-40v0,-63,77,-126,119,-68","w":288},"A":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"B":{"d":"66,-117r0,80v34,3,51,-5,51,-40v0,-33,-17,-43,-51,-40xm66,-223r0,70v28,2,45,-4,46,-33v1,-31,-15,-40,-46,-37xm22,0r0,-260r66,0v75,-9,92,95,38,123v57,22,48,146,-34,137r-70,0","w":180},"C":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,56,-9,96,-66,97v-98,1,-68,-115,-68,-201v0,-37,21,-67,68,-67v52,0,70,39,66,91","w":180},"D":{"d":"66,-223r0,186v31,1,48,-2,48,-36r0,-114v2,-34,-17,-38,-48,-36xm22,0r0,-260v76,-3,136,-3,136,79r0,103v4,81,-60,82,-136,78","w":180},"E":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39"},"F":{"d":"66,0r-44,0r0,-260r124,0r0,39r-80,0r0,67r60,0r0,39r-60,0r0,115","k":{",":46,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":46,"\u2026":46}},"G":{"d":"83,-96r0,-36r73,0r0,132r-21,0r-9,-19v-32,46,-109,20,-104,-44v6,-84,-29,-201,65,-201v51,0,71,38,67,88r-42,0v0,-39,-8,-49,-26,-49v-11,0,-20,7,-20,29r0,133v0,17,6,28,21,28v27,0,26,-32,25,-61r-29,0","w":180},"H":{"d":"66,0r-44,0r0,-260r44,0r0,106r48,0r0,-106r44,0r0,260r-44,0r0,-115r-48,0r0,115","w":180},"I":{"d":"72,0r-44,0r0,-260r44,0r0,260","w":100},"J":{"d":"1,4r0,-39v20,2,33,-5,33,-22r0,-203r44,0r0,208v3,38,-23,60,-77,56","w":100},"K":{"d":"64,0r-45,0r0,-260r45,0r1,96r47,-96r44,0r-48,97r54,163r-45,0r-37,-121r-16,29r0,92"},"L":{"d":"134,0r-115,0r0,-260r45,0r0,221r70,0r0,39","w":140,"k":{"\u2019":46,"T":33,"\u0164":33,"\u0162":33,"\u021a":33,"V":27,"W":27,"\u0174":27,"Y":33,"\u00dd":33,"\u0176":33,"\u0178":33,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20}},"M":{"d":"142,-260r59,0r0,260r-39,0r-1,-203r-40,203r-22,0r-41,-203r0,203r-39,0r0,-260r59,0r32,152","w":219},"N":{"d":"62,0r-40,0r0,-260r41,0r55,149r0,-149r40,0r0,260r-38,0r-58,-162r0,162","w":180},"O":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29","w":180},"P":{"d":"66,-223r0,80v36,1,56,-1,56,-40v0,-39,-20,-41,-56,-40xm66,0r-44,0r0,-260v77,-2,144,-5,144,77v0,63,-35,80,-100,76r0,107","w":180,"k":{",":46,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":46,"\u2026":46}},"Q":{"d":"172,-19r0,38v-17,0,-30,-3,-46,-24v-46,25,-109,-7,-104,-58v9,-86,-30,-201,68,-201v98,0,61,115,68,201v0,12,-2,23,-7,33v10,9,16,11,21,11xm93,-53r0,-40v5,3,12,6,21,16r0,-119v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29r0,132v-4,26,21,35,39,25v-5,-9,-9,-12,-12,-14","w":180},"R":{"d":"66,-223r0,80v33,1,49,-1,49,-40v0,-38,-16,-41,-49,-40xm66,-107r0,107r-44,0r0,-260v76,-2,138,-4,138,77v0,42,-16,58,-31,65r37,118r-45,0r-32,-108v-6,1,-15,1,-23,1","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"W":6,"\u0174":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"S":{"d":"145,-201r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,43,-29,67,-71,67v-41,0,-65,-33,-67,-72r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-41,26,-65,70,-65v36,0,57,26,61,63"},"T":{"d":"48,0r0,-221r-44,0r0,-39r131,0r0,39r-43,0r0,221r-44,0","w":140,"k":{"s":27,"\u015b":27,"\u015d":27,"\u0161":27,"\u015f":27,"\u0219":27,",":33,":":27,";":27,"w":27,"\u0175":27,"y":27,"\u00fd":27,"\u0177":27,"\u00ff":27,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":27,"\u00e0":27,"\u00e1":27,"\u00e2":27,"\u00e3":27,"\u00e4":27,"\u0101":27,"\u0103":27,"\u00e5":27,"\u0105":27,"\u00e6":27,"c":27,"\u0107":27,"\u0109":27,"\u010d":27,"\u010b":27,"\u00e7":27,"e":27,"\u00e8":27,"\u00e9":27,"\u00ea":27,"\u011b":27,"\u00eb":27,"\u0113":27,"\u0115":27,"\u0117":27,"\u0119":27,"-":27,"\u00ad":27,"i":27,"\u0131":27,"\u00ec":27,"\u00ed":27,"\u00ee":27,"\u0129":27,"\u00ef":27,"\u012b":27,"\u012f":27,"\u0133":27,"o":27,"\u00f2":27,"\u00f3":27,"\u00f4":27,"\u00f5":27,"\u00f6":27,"\u014d":27,"\u014f":27,"\u0151":27,"\u00f8":27,"\u0153":27,"r":27,"\u0155":27,"\u0159":27,"\u0157":27,"u":27,"\u00f9":27,"\u00fa":27,"\u00fb":27,"\u0169":27,"\u00fc":27,"\u016b":27,"\u016d":27,"\u016f":27,"\u0171":27,"\u0173":27}},"U":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70","w":180},"V":{"d":"113,-260r44,0r-55,260r-44,0r-55,-260r44,0r33,180","k":{",":33,":":13,";":13,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":33,"\u2026":33,"a":13,"\u00e0":13,"\u00e1":13,"\u00e2":13,"\u00e3":13,"\u00e4":13,"\u0101":13,"\u0103":13,"\u00e5":13,"\u0105":13,"\u00e6":13,"e":13,"\u00e8":13,"\u00e9":13,"\u00ea":13,"\u011b":13,"\u00eb":13,"\u0113":13,"\u0115":13,"\u0117":13,"\u0119":13,"-":13,"\u00ad":13,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":13,"\u00f2":13,"\u00f3":13,"\u00f4":13,"\u00f5":13,"\u00f6":13,"\u014d":13,"\u014f":13,"\u0151":13,"\u00f8":13,"\u0153":13,"r":6,"\u0155":6,"\u0159":6,"\u0157":6,"u":6,"\u00f9":6,"\u00fa":6,"\u00fb":6,"\u0169":6,"\u00fc":6,"\u016b":6,"\u016d":6,"\u016f":6,"\u0171":6,"\u0173":6}},"W":{"d":"69,-94v13,-53,19,-112,30,-166r37,0r31,166r25,-166r41,0r-45,260r-38,0r-33,-172r-30,172r-38,0r-49,-260r42,0","w":240,"k":{",":20,":":13,";":13,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":20,"\u2026":20,"a":13,"\u00e0":13,"\u00e1":13,"\u00e2":13,"\u00e3":13,"\u00e4":13,"\u0101":13,"\u0103":13,"\u00e5":13,"\u0105":13,"\u00e6":13,"e":13,"\u00e8":13,"\u00e9":13,"\u00ea":13,"\u011b":13,"\u00eb":13,"\u0113":13,"\u0115":13,"\u0117":13,"\u0119":13,"-":13,"\u00ad":13,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":13,"\u00f2":13,"\u00f3":13,"\u00f4":13,"\u00f5":13,"\u00f6":13,"\u014d":13,"\u014f":13,"\u0151":13,"\u00f8":13,"\u0153":13,"r":6,"\u0155":6,"\u0159":6,"\u0157":6,"u":6,"\u00f9":6,"\u00fa":6,"\u00fb":6,"\u0169":6,"\u00fc":6,"\u016b":6,"\u016d":6,"\u016f":6,"\u0171":6,"\u0173":6}},"X":{"d":"5,0r51,-136r-47,-124r44,0r28,83r24,-83r44,0r-45,124r51,136r-44,0r-31,-95r-31,95r-44,0"},"Y":{"d":"102,-108r0,108r-44,0r0,-108r-54,-152r45,0r32,99r30,-99r45,0","k":{"v":13,",":33,":":20,";":20,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"Z":{"d":"99,-221r-73,0r0,-39r118,0r0,43r-82,178r82,0r0,39r-128,0r0,-42"},"[":{"d":"90,-260r0,17r-42,0r0,253r42,0r0,17r-77,0r0,-287r77,0","w":100},"\\":{"d":"28,-264r80,268r-36,0r-80,-268r36,0","w":100},"]":{"d":"10,-243r0,-17r77,0r0,287r-77,0r0,-17r43,0r0,-253r-43,0","w":100},"^":{"d":"59,-109r-39,0r69,-151r38,0r69,151r-39,0r-49,-108","w":216},"_":{"d":"180,45r-180,0r0,-18r180,0r0,18","w":180},"`":{"d":"36,-217r-48,-52r49,0r29,52r-30,0","w":79},"a":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1"},"b":{"d":"58,0r-39,0r0,-260r41,0r0,83v31,-34,85,-25,83,34v-2,56,15,149,-41,147v-20,0,-31,-7,-44,-24r0,20xm60,-154r0,114v19,14,42,20,42,-21v0,-43,9,-135,-42,-93"},"c":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,45,-15,77,-63,77v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v45,0,62,29,63,70"},"d":{"d":"140,0r-38,0r0,-20v-25,40,-88,31,-85,-30v2,-56,-15,-149,41,-147v18,0,26,7,42,20r0,-83r40,0r0,260xm100,-40r0,-114v-19,-14,-42,-20,-42,21v0,43,-9,135,42,93"},"e":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72"},"f":{"d":"27,0r0,-161r-23,0r0,-33r23,0v-5,-51,13,-77,66,-70r0,34v-13,0,-25,-1,-25,13r0,23r23,0r0,33r-23,0r0,161r-41,0","w":100},"g":{"d":"153,-197r0,33v-11,0,-18,0,-26,6v15,61,-4,121,-69,108v-4,1,-8,4,-8,9v0,26,103,-12,103,56v0,33,-30,46,-82,46v-66,0,-85,-44,-38,-61v-29,-10,-19,-47,6,-57v-20,-14,-26,-24,-26,-69v0,-76,69,-90,107,-50v11,-16,16,-21,33,-21xm83,32v27,0,34,-4,34,-14v0,-10,-7,-14,-34,-14v-27,0,-34,4,-34,14v0,10,7,14,34,14xm71,-83v16,0,20,-7,20,-40v0,-33,-4,-41,-20,-41v-13,0,-20,8,-20,41v0,33,7,40,20,40"},"h":{"d":"60,0r-41,0r0,-260r41,0r0,84v21,-28,80,-33,80,19r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152"},"i":{"d":"60,0r-40,0r0,-194r40,0r0,194xm60,-223r-40,0r0,-37r40,0r0,37","w":79},"j":{"d":"0,61r0,-37v14,1,22,-3,22,-15r0,-202r40,0r0,204v-2,45,-25,52,-62,50xm62,-223r-40,0r0,-37r40,0r0,37","w":79},"k":{"d":"148,-194r-42,62r47,132r-41,0r-33,-96r-19,28r0,68r-41,0r0,-260r41,0r0,135r45,-69r43,0"},"l":{"d":"60,0r-40,0r0,-260r40,0r0,260","w":79},"m":{"d":"140,0r-40,0r0,-150v-3,-23,-28,-13,-40,-2r0,152r-41,0r0,-194r39,0r0,20v23,-27,64,-34,80,0v19,-19,30,-23,45,-23v25,0,37,15,37,40r0,157r-40,0r0,-150v-3,-23,-28,-13,-40,-2r0,152","w":240},"n":{"d":"60,0r-41,0r0,-194r39,0r0,20v23,-29,83,-37,82,17r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152"},"o":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72"},"p":{"d":"19,-194r39,0r0,20v26,-39,88,-29,85,31v-3,56,15,149,-41,147v-18,0,-26,-8,-42,-21r0,78r-41,0r0,-255xm60,-154r0,114v19,14,42,20,42,-21v0,-43,9,-135,-42,-93"},"q":{"d":"102,-194r38,0r0,255r-40,0r0,-78v-30,35,-85,27,-83,-33v2,-56,-15,-149,41,-147v20,0,31,6,44,23r0,-20xm100,-40r0,-114v-19,-14,-42,-20,-42,21v0,43,-9,135,42,93"},"r":{"d":"60,0r-41,0r0,-194r39,0v1,7,-2,18,1,23v12,-19,28,-28,54,-26r0,42v-20,-7,-53,-6,-53,22r0,133","w":119,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"s":{"d":"127,-146r-34,6v0,-26,-41,-34,-41,-9v0,30,76,42,76,100v0,35,-24,53,-57,53v-35,0,-55,-20,-61,-54r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51","w":140},"t":{"d":"26,-161r-22,0r0,-33r22,0r0,-52r40,0r0,52r27,0r0,33r-27,0r0,112v-1,16,12,17,27,16r0,34v-32,9,-67,-3,-67,-41r0,-121","w":100},"u":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152"},"v":{"d":"69,-64v11,-41,16,-88,26,-130r41,0r-46,194r-40,0r-46,-194r41,0","w":140,"k":{",":20,".":20,"\u2026":20}},"w":{"d":"85,-193r30,0r22,120r22,-121r39,0r-45,194r-32,0r-23,-122r-26,122r-32,0r-38,-194r39,0r18,121","w":200,"k":{",":20,".":20,"\u2026":20}},"x":{"d":"4,0r44,-103r-40,-91r41,0r21,54r21,-54r42,0r-42,91r44,103r-41,0v-9,-21,-15,-46,-25,-66r-23,66r-42,0","w":140},"y":{"d":"96,-194r40,0r-50,208v-11,41,-30,49,-72,47r0,-33v36,6,40,-27,32,-57r-42,-165r41,0r26,124","w":140},"z":{"d":"85,-161r-69,0r0,-33r113,0r0,33r-75,128r75,0r0,33r-118,0r0,-33","w":140},"{":{"d":"0,-107r0,-20v51,-8,-20,-143,58,-137r39,0r0,18v-20,1,-42,-6,-42,18r0,70v0,30,-20,38,-28,42v9,1,28,11,28,42r0,70v-3,24,22,17,42,18r0,17v-37,1,-83,3,-77,-35v-3,-34,11,-100,-20,-103","w":100},"|":{"d":"22,4r0,-268r36,0r0,268r-36,0","w":79},"}":{"d":"100,-126r0,21v-51,8,20,142,-58,136r-39,0r0,-17v20,-1,42,6,42,-18r0,-70v0,-30,20,-38,28,-42v-9,-1,-28,-11,-28,-42r0,-70v3,-24,-22,-17,-42,-18r0,-18v37,-1,83,-3,77,35v3,34,-11,100,20,103","w":100},"~":{"d":"70,-121v24,0,52,23,77,23v14,0,23,-12,31,-23r16,31v-14,12,-26,28,-48,28v-35,0,-89,-47,-108,0r-16,-31v11,-12,24,-28,48,-28","w":216},"\u00a0":{"w":79},"\u00c0":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm76,-273r-48,-52r49,0r28,52r-29,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c1":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm131,-325r-47,52r-30,0r29,-52r48,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c2":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm26,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c3":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm58,-319v18,0,29,13,45,14v11,0,15,-6,15,-16r21,0v-4,21,-13,43,-37,43v-18,1,-29,-14,-45,-14v-11,0,-16,6,-16,16r-20,0v4,-21,13,-43,37,-43","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c4":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm128,-278r-39,0r0,-38r39,0r0,38xm32,-316r39,0r0,38r-39,0r0,-38","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u0100":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm28,-286r0,-23r106,0r0,23r-106,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u0102":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm112,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c5":{"d":"62,-96r36,0r-18,-112xm55,-58r-7,58r-44,0r48,-260r56,0r48,260r-44,0r-8,-58r-49,0xm61,-310v0,10,9,18,19,18v10,0,19,-8,19,-18v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm43,-310v0,-20,17,-37,37,-37v20,0,37,17,37,37v0,20,-17,36,-37,36v-20,0,-37,-16,-37,-36","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u0104":{"d":"75,46v-1,-25,22,-40,45,-46r-8,0r-8,-58r-49,0r-7,58r-44,0r48,-260r56,0r48,260v-29,1,-49,20,-52,42v3,28,37,14,50,2r7,13v-23,23,-84,38,-86,-11xm62,-96r36,0r-18,-112","k":{"\u2019":27,"v":6,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":13,"W":13,"\u0174":13,"Y":20,"\u00dd":20,"\u0176":20,"\u0178":20,"w":6,"\u0175":6,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6}},"\u00c6":{"d":"81,-100r39,0r0,-128xm4,0r84,-260r153,0r0,39r-76,0r0,67r59,0r0,39r-59,0r0,76r81,0r0,39r-126,0r0,-61r-52,0r-18,61r-46,0","w":259},"\u0106":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,56,-9,96,-66,97v-98,1,-68,-115,-68,-201v0,-37,21,-67,68,-67v52,0,70,39,66,91xm141,-325r-47,52r-30,0r29,-52r48,0","w":180},"\u0108":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,56,-9,96,-66,97v-98,1,-68,-115,-68,-201v0,-37,21,-67,68,-67v52,0,70,39,66,91xm35,-273r34,-52r40,0r35,52r-33,0r-22,-32r-21,32r-33,0","w":180},"\u010c":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,56,-9,96,-66,97v-98,1,-68,-115,-68,-201v0,-37,21,-67,68,-67v52,0,70,39,66,91xm143,-325r-34,52r-40,0r-34,-52r33,0r21,32r21,-32r33,0","w":180},"\u010a":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,56,-9,96,-66,97v-98,1,-68,-115,-68,-201v0,-37,21,-67,68,-67v52,0,70,39,66,91xm70,-316r39,0r0,38r-39,0r0,-38","w":180},"\u00c7":{"d":"156,-173r-44,0v2,-25,-3,-52,-22,-52v-18,0,-24,10,-24,29r0,132v0,19,6,29,24,29v27,2,22,-32,22,-58r44,0v4,53,-8,90,-57,96r-12,19v19,-3,39,6,40,26v3,37,-57,44,-80,29r6,-18v14,9,45,8,45,-9v0,-23,-32,-3,-38,-17r22,-30v-89,-6,-60,-117,-60,-200v0,-37,21,-67,68,-67v52,0,70,39,66,91","w":180},"\u010e":{"d":"66,-223r0,186v31,1,48,-2,48,-36r0,-114v2,-34,-17,-38,-48,-36xm22,0r0,-260v76,-3,136,-3,136,79r0,103v4,81,-60,82,-136,78xm135,-325r-35,52r-39,0r-35,-52r33,0r22,32r21,-32r33,0","w":180},"\u0110":{"d":"93,-154r0,39r-27,0r0,78v31,1,48,-2,48,-36r0,-114v2,-34,-17,-38,-48,-36r0,69r27,0xm7,-115r0,-39r15,0r0,-106v76,-3,136,-4,136,79r0,103v4,82,-60,81,-136,78r0,-115r-15,0","w":180},"\u00d0":{"d":"7,-115r0,-39r15,0r0,-106v76,-3,136,-3,136,79r0,103v4,81,-60,82,-136,78r0,-115r-15,0xm93,-154r0,39r-27,0r0,78v31,1,48,-2,48,-36r0,-114v2,-34,-17,-38,-48,-36r0,69r27,0","w":180},"\u00c8":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm80,-273r-47,-52r48,0r29,52r-30,0"},"\u00c9":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm136,-325r-47,51r-30,0r28,-51r49,0"},"\u00ca":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm30,-273r34,-52r40,0r35,52r-34,0r-21,-32r-21,32r-33,0"},"\u011a":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm139,-325r-35,52r-39,0r-35,-52r33,0r22,32r21,-32r33,0"},"\u00cb":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm132,-278r-39,0r0,-38r39,0r0,38xm36,-316r39,0r0,38r-39,0r0,-38"},"\u0112":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm31,-286r0,-23r106,0r0,23r-106,0"},"\u0114":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm116,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0"},"\u0116":{"d":"146,0r-124,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39xm64,-316r39,0r0,38r-39,0r0,-38"},"\u0118":{"d":"62,46v-1,-25,23,-40,45,-46r-85,0r0,-260r119,0r0,39r-75,0r0,67r58,0r0,39r-58,0r0,76r80,0r0,39v-30,0,-51,20,-54,42v3,29,37,13,50,2r7,13v-23,23,-85,37,-87,-11"},"\u011c":{"d":"83,-96r0,-36r73,0r0,132r-21,0r-9,-19v-32,46,-109,20,-104,-44v6,-84,-29,-201,65,-201v51,0,71,38,67,88r-42,0v0,-39,-8,-49,-26,-49v-11,0,-20,7,-20,29r0,133v0,17,6,28,21,28v27,0,26,-32,25,-61r-29,0xm33,-273r35,-52r40,0r34,52r-33,0r-21,-32r-21,32r-34,0","w":180},"\u011e":{"d":"83,-96r0,-36r73,0r0,132r-21,0r-9,-19v-32,46,-109,20,-104,-44v6,-84,-29,-201,65,-201v51,0,71,38,67,88r-42,0v0,-39,-8,-49,-26,-49v-11,0,-20,7,-20,29r0,133v0,17,6,28,21,28v27,0,26,-32,25,-61r-29,0xm120,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0","w":180},"\u0120":{"d":"83,-96r0,-36r73,0r0,132r-21,0r-9,-19v-32,46,-109,20,-104,-44v6,-84,-29,-201,65,-201v51,0,71,38,67,88r-42,0v0,-39,-8,-49,-26,-49v-11,0,-20,7,-20,29r0,133v0,17,6,28,21,28v27,0,26,-32,25,-61r-29,0xm68,-316r39,0r0,38r-39,0r0,-38","w":180},"\u0122":{"d":"83,-96r0,-36r73,0r0,132r-21,0r-9,-19v-32,46,-109,20,-104,-44v6,-84,-29,-201,65,-201v51,0,71,38,67,88r-42,0v0,-39,-8,-49,-26,-49v-11,0,-20,7,-20,29r0,133v0,17,6,28,21,28v27,0,26,-32,25,-61r-29,0xm76,82r10,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-16,0","w":180},"\u0124":{"d":"66,0r-44,0r0,-260r44,0r0,106r48,0r0,-106r44,0r0,260r-44,0r0,-115r-48,0r0,115xm36,-273r35,-52r40,0r34,52r-33,0r-21,-32r-22,32r-33,0","w":180},"\u0126":{"d":"66,0r-44,0r0,-260r44,0r0,47r48,0r0,-47r44,0r0,260r-44,0r0,-96r-48,0r0,96xm66,-182r0,49r48,0r0,-49r-48,0","w":180},"\u00cc":{"d":"72,0r-44,0r0,-260r44,0r0,260xm46,-274r-47,-51r48,0r29,51r-30,0","w":100},"\u00cd":{"d":"72,0r-44,0r0,-260r44,0r0,260xm101,-325r-47,52r-30,0r29,-52r48,0","w":100},"\u00ce":{"d":"72,0r-44,0r0,-260r44,0r0,260xm-4,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":100},"\u0128":{"d":"72,0r-44,0r0,-260r44,0r0,260xm29,-319v17,0,28,13,45,14v11,0,15,-5,15,-15r20,0v-4,21,-13,42,-37,42v-17,1,-28,-14,-45,-14v-11,0,-15,6,-15,16r-20,0v4,-21,13,-43,37,-43","w":100},"\u00cf":{"d":"72,0r-44,0r0,-260r44,0r0,260xm98,-278r-39,0r0,-39r39,0r0,39xm2,-317r39,0r0,39r-39,0r0,-39","w":100},"\u012a":{"d":"72,0r-44,0r0,-260r44,0r0,260xm-3,-286r0,-23r106,0r0,23r-106,0","w":100},"\u0130":{"d":"72,0r-44,0r0,-260r44,0r0,260xm31,-316r38,0r0,38r-38,0r0,-38","w":100},"\u012e":{"d":"40,79v-60,0,-34,-72,3,-79r-15,0r0,-260r44,0r0,260v-23,2,-35,21,-39,42v3,28,36,15,49,3r7,13v-15,12,-30,21,-49,21","w":100},"\u0134":{"d":"1,4r0,-39v20,2,33,-5,33,-22r0,-203r44,0r0,208v3,38,-23,60,-77,56xm0,-273r35,-52r40,0r34,52r-33,0r-21,-32r-22,32r-33,0","w":100},"\u0136":{"d":"64,0r-45,0r0,-260r45,0r1,96r47,-96r44,0r-48,97r54,163r-45,0r-37,-121r-16,29r0,92xm74,82r10,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-16,0"},"\u0139":{"d":"134,0r-115,0r0,-260r45,0r0,221r70,0r0,39xm102,-325r-47,52r-30,0r28,-52r49,0","w":140,"k":{"\u2019":46,"T":33,"\u0164":33,"\u0162":33,"\u021a":33,"V":27,"W":27,"\u0174":27,"Y":33,"\u00dd":33,"\u0176":33,"\u0178":33,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20}},"\u013d":{"d":"134,0r-115,0r0,-260r45,0r0,221r70,0r0,39xm83,-196r10,-30r-13,0r0,-34r31,0v2,28,-4,47,-13,64r-15,0","w":140},"\u013b":{"d":"134,0r-115,0r0,-260r45,0r0,221r70,0r0,39xm63,82r11,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-17,0","w":140,"k":{"\u2019":46,"T":33,"\u0164":33,"\u0162":33,"\u021a":33,"V":27,"W":27,"\u0174":27,"Y":33,"\u00dd":33,"\u0176":33,"\u0178":33,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20}},"\u0141":{"d":"64,-122r0,83r70,0r0,39r-115,0r0,-104r-19,8r0,-30r19,-8r0,-126r45,0r0,108r42,-16r0,29","w":140},"\u013f":{"d":"134,0r-115,0r0,-260r45,0r0,221r70,0r0,39xm84,-151r39,0r0,39r-39,0r0,-39","w":140},"\u0143":{"d":"62,0r-40,0r0,-260r41,0r55,149r0,-149r40,0r0,260r-38,0r-58,-162r0,162xm145,-325r-47,52r-30,0r28,-52r49,0","w":180},"\u0147":{"d":"62,0r-40,0r0,-260r41,0r55,149r0,-149r40,0r0,260r-38,0r-58,-162r0,162xm145,-325r-34,52r-40,0r-35,-52r33,0r22,32r21,-32r33,0","w":180},"\u00d1":{"d":"62,0r-40,0r0,-260r41,0r55,149r0,-149r40,0r0,260r-38,0r-58,-162r0,162xm68,-319v18,0,29,13,45,14v11,0,16,-6,16,-16r20,0v-4,21,-13,43,-37,43v-18,1,-29,-14,-45,-14v-11,0,-16,6,-16,16r-20,0v4,-21,13,-43,37,-43","w":180},"\u0145":{"d":"62,0r-40,0r0,-260r41,0r55,149r0,-149r40,0r0,260r-38,0r-58,-162r0,162xm78,82r10,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-16,0","w":180},"\u00d2":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm86,-274r-47,-51r48,0r29,51r-30,0","w":180},"\u00d3":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm141,-325r-47,52r-30,0r29,-52r48,0","w":180},"\u00d4":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm36,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":180},"\u00d5":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm68,-319v18,0,29,13,45,14v11,0,16,-6,16,-16r20,0v-4,21,-13,43,-37,43v-18,1,-29,-14,-45,-14v-11,0,-16,6,-16,16r-20,0v4,-21,13,-43,37,-43","w":180},"\u00d6":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm138,-278r-39,0r0,-38r39,0r0,38xm42,-316r39,0r0,38r-39,0r0,-38","w":180},"\u014c":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm37,-286r0,-23r106,0r0,23r-106,0","w":180},"\u014e":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm122,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0","w":180},"\u0150":{"d":"90,4v-98,0,-68,-115,-68,-201v0,-37,21,-67,68,-67v98,0,68,115,68,201v0,37,-21,67,-68,67xm66,-196r0,132v0,19,6,29,24,29v18,0,24,-10,24,-29r0,-132v0,-19,-6,-29,-24,-29v-18,0,-24,10,-24,29xm111,-325r-45,52r-29,0r25,-52r49,0xm174,-325r-47,52r-30,0r29,-52r48,0","w":180},"\u00d8":{"d":"66,-93v18,-37,30,-79,46,-117v-8,-25,-46,-19,-46,14r0,103xm114,-153v-17,34,-28,73,-43,109v11,17,50,9,43,-20r0,-89xm58,-3r-18,46r-30,0r25,-63v-26,-40,-6,-117,-13,-177v-6,-51,58,-84,105,-58r14,-34r29,0r-21,54v19,43,4,115,9,172v5,48,-51,82,-100,60","w":180},"\u0152":{"d":"119,-67r0,-127v0,-19,-10,-27,-25,-27v-20,0,-28,14,-28,34r0,113v0,20,8,34,28,34v15,0,25,-8,25,-27xm246,0r-149,0v-50,0,-75,-28,-75,-79v0,-85,-15,-181,75,-181r144,0r0,39r-78,0r0,67r61,0r0,39r-61,0r0,76r83,0r0,39","w":259},"\u0154":{"d":"66,-223r0,80v33,1,49,-1,49,-40v0,-38,-16,-41,-49,-40xm66,-107r0,107r-44,0r0,-260v76,-2,138,-4,138,77v0,42,-16,58,-31,65r37,118r-45,0r-32,-108v-6,1,-15,1,-23,1xm137,-325r-47,52r-30,0r28,-52r49,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"W":6,"\u0174":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u0158":{"d":"66,-223r0,80v33,1,49,-1,49,-40v0,-38,-16,-41,-49,-40xm66,-107r0,107r-44,0r0,-260v76,-2,138,-4,138,77v0,42,-16,58,-31,65r37,118r-45,0r-32,-108v-6,1,-15,1,-23,1xm139,-325r-35,52r-39,0r-35,-52r33,0r22,32r21,-32r33,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"W":6,"\u0174":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u0156":{"d":"66,-223r0,80v33,1,49,-1,49,-40v0,-38,-16,-41,-49,-40xm66,-107r0,107r-44,0r0,-260v76,-2,138,-4,138,77v0,42,-16,58,-31,65r37,118r-45,0r-32,-108v-6,1,-15,1,-23,1xm77,82r10,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-16,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"W":6,"\u0174":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u015a":{"d":"145,-201r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,43,-29,67,-71,67v-41,0,-65,-33,-67,-72r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-41,26,-65,70,-65v36,0,57,26,61,63xm134,-325r-48,52r-29,0r28,-52r49,0"},"\u015c":{"d":"145,-201r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,43,-29,67,-71,67v-41,0,-65,-33,-67,-72r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-41,26,-65,70,-65v36,0,57,26,61,63xm26,-273r35,-52r39,0r35,52r-33,0r-21,-32r-22,32r-33,0"},"\u0160":{"d":"145,-201r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,43,-29,67,-71,67v-41,0,-65,-33,-67,-72r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-41,26,-65,70,-65v36,0,57,26,61,63xm134,-325r-34,51r-40,0r-34,-51r33,0r21,32r21,-32r33,0"},"\u015e":{"d":"37,77r6,-18v13,8,45,9,45,-9v-1,-23,-32,-3,-38,-17r22,-30v-40,-2,-60,-34,-62,-71r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-42,26,-65,70,-65v36,0,57,27,61,63r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,38,-24,60,-58,66r-13,19v20,-3,39,6,40,26v3,38,-57,44,-80,29"},"\u0218":{"d":"145,-201r-42,5v-2,-40,-46,-37,-46,-3v0,44,91,65,91,136v0,43,-29,67,-71,67v-41,0,-65,-33,-67,-72r43,-7v2,26,12,40,26,40v15,0,26,-9,26,-24v0,-51,-91,-65,-91,-140v0,-41,26,-65,70,-65v36,0,57,26,61,63xm66,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0"},"\u0164":{"d":"48,0r0,-221r-44,0r0,-39r131,0r0,39r-43,0r0,221r-44,0xm124,-325r-34,52r-40,0r-35,-52r34,0r21,32r21,-32r33,0","w":140,"k":{"s":27,"\u015b":27,"\u015d":27,"\u0161":27,"\u015f":27,"\u0219":27,",":33,":":27,";":27,"w":27,"\u0175":27,"y":27,"\u00fd":27,"\u0177":27,"\u00ff":27,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":27,"\u00e0":27,"\u00e1":27,"\u00e2":27,"\u00e3":27,"\u00e4":27,"\u0101":27,"\u0103":27,"\u00e5":27,"\u0105":27,"\u00e6":27,"c":27,"\u0107":27,"\u0109":27,"\u010d":27,"\u010b":27,"\u00e7":27,"e":27,"\u00e8":27,"\u00e9":27,"\u00ea":27,"\u011b":27,"\u00eb":27,"\u0113":27,"\u0115":27,"\u0117":27,"\u0119":27,"-":27,"\u00ad":27,"i":27,"\u0131":27,"\u00ec":27,"\u00ed":27,"\u00ee":27,"\u0129":27,"\u00ef":27,"\u012b":27,"\u012f":27,"\u0133":27,"o":27,"\u00f2":27,"\u00f3":27,"\u00f4":27,"\u00f5":27,"\u00f6":27,"\u014d":27,"\u014f":27,"\u0151":27,"\u00f8":27,"\u0153":27,"r":27,"\u0155":27,"\u0159":27,"\u0157":27,"u":27,"\u00f9":27,"\u00fa":27,"\u00fb":27,"\u0169":27,"\u00fc":27,"\u016b":27,"\u016d":27,"\u016f":27,"\u0171":27,"\u0173":27}},"\u0162":{"d":"48,0r0,-221r-44,0r0,-39r131,0r0,39r-43,0r0,221r-44,0xm57,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":140,"k":{"s":27,"\u015b":27,"\u015d":27,"\u0161":27,"\u015f":27,"\u0219":27,",":33,":":27,";":27,"w":27,"\u0175":27,"y":27,"\u00fd":27,"\u0177":27,"\u00ff":27,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":27,"\u00e0":27,"\u00e1":27,"\u00e2":27,"\u00e3":27,"\u00e4":27,"\u0101":27,"\u0103":27,"\u00e5":27,"\u0105":27,"\u00e6":27,"c":27,"\u0107":27,"\u0109":27,"\u010d":27,"\u010b":27,"\u00e7":27,"e":27,"\u00e8":27,"\u00e9":27,"\u00ea":27,"\u011b":27,"\u00eb":27,"\u0113":27,"\u0115":27,"\u0117":27,"\u0119":27,"-":27,"\u00ad":27,"i":27,"\u0131":27,"\u00ec":27,"\u00ed":27,"\u00ee":27,"\u0129":27,"\u00ef":27,"\u012b":27,"\u012f":27,"\u0133":27,"o":27,"\u00f2":27,"\u00f3":27,"\u00f4":27,"\u00f5":27,"\u00f6":27,"\u014d":27,"\u014f":27,"\u0151":27,"\u00f8":27,"\u0153":27,"r":27,"\u0155":27,"\u0159":27,"\u0157":27,"u":27,"\u00f9":27,"\u00fa":27,"\u00fb":27,"\u0169":27,"\u00fc":27,"\u016b":27,"\u016d":27,"\u016f":27,"\u0171":27,"\u0173":27}},"\u021a":{"d":"48,0r0,-221r-44,0r0,-39r131,0r0,39r-43,0r0,221r-44,0xm57,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":140,"k":{"s":27,"\u015b":27,"\u015d":27,"\u0161":27,"\u015f":27,"\u0219":27,",":33,":":27,";":27,"w":27,"\u0175":27,"y":27,"\u00fd":27,"\u0177":27,"\u00ff":27,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":27,"\u00e0":27,"\u00e1":27,"\u00e2":27,"\u00e3":27,"\u00e4":27,"\u0101":27,"\u0103":27,"\u00e5":27,"\u0105":27,"\u00e6":27,"c":27,"\u0107":27,"\u0109":27,"\u010d":27,"\u010b":27,"\u00e7":27,"e":27,"\u00e8":27,"\u00e9":27,"\u00ea":27,"\u011b":27,"\u00eb":27,"\u0113":27,"\u0115":27,"\u0117":27,"\u0119":27,"-":27,"\u00ad":27,"i":27,"\u0131":27,"\u00ec":27,"\u00ed":27,"\u00ee":27,"\u0129":27,"\u00ef":27,"\u012b":27,"\u012f":27,"\u0133":27,"o":27,"\u00f2":27,"\u00f3":27,"\u00f4":27,"\u00f5":27,"\u00f6":27,"\u014d":27,"\u014f":27,"\u0151":27,"\u00f8":27,"\u0153":27,"r":27,"\u0155":27,"\u0159":27,"\u0157":27,"u":27,"\u00f9":27,"\u00fa":27,"\u00fb":27,"\u0169":27,"\u00fc":27,"\u016b":27,"\u016d":27,"\u016f":27,"\u0171":27,"\u0173":27}},"\u0166":{"d":"48,-172r0,-49r-44,0r0,-39r131,0r0,39r-43,0r0,49r34,0r0,38r-34,0r0,134r-44,0r0,-134r-34,0r0,-38r34,0","w":140},"\u00de":{"d":"66,-260r0,50v65,-3,100,14,100,77v0,63,-35,81,-100,77r0,56r-44,0r0,-260r44,0xm66,-173r0,80v36,1,56,-1,56,-40v0,-39,-20,-41,-56,-40","w":180},"\u00d9":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm86,-274r-47,-51r48,0r29,51r-30,0","w":180},"\u00da":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm141,-325r-47,51r-30,0r29,-51r48,0","w":180},"\u00db":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm36,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":180},"\u0168":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm69,-319v17,0,28,13,45,14v11,0,15,-5,15,-15r20,0v-4,21,-13,42,-37,42v-17,1,-28,-14,-45,-14v-11,0,-15,6,-15,16r-20,0v4,-21,13,-43,37,-43","w":180},"\u00dc":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm138,-278r-39,0r0,-38r39,0r0,38xm42,-316r39,0r0,38r-39,0r0,-38","w":180},"\u016a":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm37,-286r0,-23r106,0r0,23r-106,0","w":180},"\u016c":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm123,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0","w":180},"\u016e":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm72,-310v0,10,8,19,18,19v10,0,19,-9,19,-19v0,-10,-9,-18,-19,-18v-10,0,-18,8,-18,18xm54,-310v0,-20,16,-36,36,-36v20,0,37,16,37,36v0,20,-17,37,-37,37v-20,0,-36,-17,-36,-37","w":180},"\u0170":{"d":"22,-66r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,45,-26,70,-68,70v-42,0,-68,-25,-68,-70xm111,-325r-45,52r-28,0r25,-52r48,0xm175,-325r-48,52r-29,0r28,-52r49,0","w":180},"\u0172":{"d":"85,3v-41,-1,-63,-26,-63,-69r0,-194r44,0r0,196v0,19,8,29,24,29v16,0,24,-10,24,-29r0,-196r44,0r0,194v0,38,-17,60,-47,68v-12,8,-30,22,-30,40v0,29,37,14,50,2r7,13v-23,23,-84,37,-87,-11v-1,-21,17,-34,34,-43","w":180},"\u0174":{"d":"69,-94v13,-53,19,-112,30,-166r37,0r31,166r25,-166r41,0r-45,260r-38,0r-33,-172r-30,172r-38,0r-49,-260r42,0xm64,-273r35,-52r39,0r35,52r-33,0r-22,-32r-21,32r-33,0","w":240,"k":{",":20,":":13,";":13,"y":6,"\u00fd":6,"\u0177":6,"\u00ff":6,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":20,"\u2026":20,"a":13,"\u00e0":13,"\u00e1":13,"\u00e2":13,"\u00e3":13,"\u00e4":13,"\u0101":13,"\u0103":13,"\u00e5":13,"\u0105":13,"\u00e6":13,"e":13,"\u00e8":13,"\u00e9":13,"\u00ea":13,"\u011b":13,"\u00eb":13,"\u0113":13,"\u0115":13,"\u0117":13,"\u0119":13,"-":13,"\u00ad":13,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":13,"\u00f2":13,"\u00f3":13,"\u00f4":13,"\u00f5":13,"\u00f6":13,"\u014d":13,"\u014f":13,"\u0151":13,"\u00f8":13,"\u0153":13,"r":6,"\u0155":6,"\u0159":6,"\u0157":6,"u":6,"\u00f9":6,"\u00fa":6,"\u00fb":6,"\u0169":6,"\u00fc":6,"\u016b":6,"\u016d":6,"\u016f":6,"\u0171":6,"\u0173":6}},"\u00dd":{"d":"102,-108r0,108r-44,0r0,-108r-54,-152r45,0r32,99r30,-99r45,0xm131,-325r-47,52r-30,0r28,-52r49,0","k":{"v":13,",":33,":":20,";":20,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0176":{"d":"102,-108r0,108r-44,0r0,-108r-54,-152r45,0r32,99r30,-99r45,0xm26,-273r34,-52r40,0r35,52r-33,0r-22,-32r-21,32r-33,0","k":{"v":13,",":33,":":20,";":20,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0178":{"d":"102,-108r0,108r-44,0r0,-108r-54,-152r45,0r32,99r30,-99r45,0xm128,-278r-39,0r0,-39r39,0r0,39xm32,-317r39,0r0,39r-39,0r0,-39","k":{"v":13,",":33,":":20,";":20,"A":20,"\u00c0":20,"\u00c1":20,"\u00c2":20,"\u00c3":20,"\u00c4":20,"\u0100":20,"\u0102":20,"\u00c5":20,"\u0104":20,"\u00c6":20,".":33,"\u2026":33,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0179":{"d":"99,-221r-73,0r0,-39r118,0r0,43r-82,178r82,0r0,39r-128,0r0,-42xm142,-325r-47,52r-30,0r29,-52r48,0"},"\u017d":{"d":"99,-221r-73,0r0,-39r118,0r0,43r-82,178r82,0r0,39r-128,0r0,-42xm134,-325r-34,51r-40,0r-34,-51r33,0r21,32r21,-32r33,0"},"\u017b":{"d":"99,-221r-73,0r0,-39r118,0r0,43r-82,178r82,0r0,39r-128,0r0,-42xm67,-316r39,0r0,38r-39,0r0,-38"},"\u00e0":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm76,-217r-48,-52r49,0r28,52r-29,0"},"\u00e1":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm131,-269r-47,52r-30,0r29,-52r48,0"},"\u00e2":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm26,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u00e3":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm58,-262v18,0,29,13,45,14v11,0,15,-6,15,-16r21,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-16,5,-16,15r-20,0v4,-21,13,-42,37,-42"},"\u00e4":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm128,-221r-39,0r0,-39r39,0r0,39xm32,-260r39,0r0,39r-39,0r0,-39"},"\u0101":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm27,-229r0,-23r106,0r0,23r-106,0"},"\u0103":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm112,-270r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,37,63,36,64,0"},"\u00e5":{"d":"55,-137r-40,0v2,-39,27,-60,65,-60v37,0,59,17,59,52r2,145r-38,0v0,-5,-3,-10,-3,-15v-27,30,-88,25,-88,-25v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27xm98,-48r0,-50v-37,21,-45,34,-45,51v1,29,37,16,45,-1xm61,-253v0,10,9,18,19,18v10,0,19,-8,19,-18v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm43,-253v0,-20,17,-37,37,-37v20,0,37,17,37,37v0,20,-17,36,-37,36v-20,0,-37,-16,-37,-36"},"\u0105":{"d":"62,46v-1,-24,22,-39,43,-46v-2,-5,-2,-11,-3,-17v-30,32,-90,28,-90,-23v0,-42,28,-66,86,-88v1,-20,-3,-36,-20,-36v-18,0,-22,10,-23,27r-40,0v3,-39,27,-60,65,-60v37,0,59,16,59,52r2,145v-28,1,-44,19,-49,42v2,28,35,15,48,3r7,13v-23,24,-83,35,-85,-12xm98,-48r0,-50v-37,21,-45,34,-45,51v0,29,36,17,45,-1"},"\u00e6":{"d":"98,-48r0,-50v-36,21,-45,34,-45,51v1,29,38,16,45,-1xm138,-122r45,0v9,-46,-46,-61,-45,-10r0,10xm223,-89r-85,0v-1,26,-2,63,22,59v15,1,24,-13,23,-36r40,0v-1,41,-18,70,-63,70v-24,0,-40,-11,-49,-26v-26,23,-41,26,-53,26v-32,0,-46,-19,-46,-44v0,-42,28,-66,86,-88v1,-20,-3,-37,-20,-36v-18,0,-22,10,-23,27r-40,0v-2,-61,73,-76,106,-42v37,-41,113,-8,102,54r0,36","w":240},"\u0107":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,45,-15,77,-63,77v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v45,0,62,29,63,70xm132,-269r-47,52r-30,0r29,-52r48,0"},"\u0109":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,45,-15,77,-63,77v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v45,0,62,29,63,70xm26,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u010d":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,45,-15,77,-63,77v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v45,0,62,29,63,70xm134,-269r-34,52r-40,0r-34,-52r33,0r21,32r21,-32r33,0"},"\u010b":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,45,-15,77,-63,77v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v45,0,62,29,63,70xm61,-260r39,0r0,39r-39,0r0,-39"},"\u00e7":{"d":"143,-127r-41,0v1,-23,-7,-38,-22,-37v-34,0,-22,68,-22,103v0,22,8,31,22,31v18,0,24,-19,22,-43r41,0v1,43,-13,72,-54,76r-12,19v19,-3,39,6,40,26v3,37,-57,44,-80,29r6,-18v14,9,44,8,44,-9v-1,-23,-31,-3,-37,-17r22,-30v-61,-3,-56,-65,-55,-128v0,-42,17,-72,63,-72v45,0,62,29,63,70"},"\u010f":{"d":"140,0r-38,0r0,-20v-25,40,-88,31,-85,-30v2,-56,-15,-149,41,-147v18,0,26,7,42,20r0,-83r40,0r0,260xm100,-40r0,-114v-19,-14,-42,-20,-42,21v0,43,-9,135,42,93xm156,-196r10,-30r-14,0r0,-34r31,0v2,28,-4,47,-12,64r-15,0"},"\u0111":{"d":"140,0r-38,0r0,-20v-25,39,-89,32,-85,-30v3,-55,-15,-143,41,-143v18,0,25,7,42,19r0,-38r-38,0r0,-28r38,0r0,-20r40,0r0,20r20,0r0,28r-20,0r0,212xm100,-40r0,-110v-19,-15,-42,-21,-42,21v0,42,-8,130,42,89"},"\u00f0":{"d":"80,-30v32,2,22,-56,22,-87v0,-21,-8,-29,-22,-29v-32,-2,-22,56,-22,87v0,21,8,29,22,29xm139,-258r11,25r-34,13v24,39,27,94,27,157v0,39,-17,67,-63,67v-66,1,-63,-54,-63,-117v0,-43,23,-70,76,-66v-1,-11,-6,-20,-10,-28r-38,14r-10,-26r34,-12v-5,-7,-11,-14,-17,-20r31,-9v6,4,12,11,17,17"},"\u00e8":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm76,-217r-48,-52r49,0r28,52r-29,0"},"\u00e9":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm131,-269r-47,52r-30,0r29,-52r48,0"},"\u00ea":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm26,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u011b":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm134,-269r-34,52r-40,0r-34,-52r33,0r21,32r21,-32r33,0"},"\u00eb":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm128,-221r-39,0r0,-39r39,0r0,39xm32,-260r39,0r0,39r-39,0r0,-39"},"\u0113":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm27,-229r0,-23r106,0r0,23r-106,0"},"\u0115":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm112,-270r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,37,63,36,64,0"},"\u0117":{"d":"58,-122r44,0v10,-46,-45,-61,-44,-10r0,10xm80,-197v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-13,22,-36r41,0v-1,41,-18,70,-63,70v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72xm60,-260r39,0r0,39r-39,0r0,-39"},"\u0119":{"d":"76,4v-63,-1,-59,-65,-59,-129v0,-42,17,-72,63,-72v60,0,66,48,63,108r-85,0v-1,26,-2,63,22,59v15,1,23,-12,22,-36r41,0v-1,33,-13,57,-38,67v-11,8,-28,24,-28,41v0,29,37,14,50,2r7,13v-23,23,-86,38,-86,-11v0,-19,12,-32,28,-42xm58,-122r44,0v10,-46,-44,-61,-44,-10r0,10"},"\u011d":{"d":"153,-197r0,33v-11,0,-18,0,-26,6v15,61,-4,121,-69,108v-4,1,-8,4,-8,9v0,26,103,-12,103,56v0,33,-30,46,-82,46v-66,0,-85,-44,-38,-61v-29,-10,-19,-47,6,-57v-20,-14,-26,-24,-26,-69v0,-76,69,-90,107,-50v11,-16,16,-21,33,-21xm83,32v27,0,34,-4,34,-14v0,-10,-7,-14,-34,-14v-27,0,-34,4,-34,14v0,10,7,14,34,14xm71,-83v16,0,20,-7,20,-40v0,-33,-4,-41,-20,-41v-13,0,-20,8,-20,41v0,33,7,40,20,40xm20,-217r35,-52r39,0r35,52r-33,0r-21,-32r-22,32r-33,0"},"\u011f":{"d":"153,-197r0,33v-11,0,-18,0,-26,6v15,61,-4,121,-69,108v-4,1,-8,4,-8,9v0,26,103,-12,103,56v0,33,-30,46,-82,46v-66,0,-85,-44,-38,-61v-29,-10,-19,-47,6,-57v-20,-14,-26,-24,-26,-69v0,-76,69,-90,107,-50v11,-16,16,-21,33,-21xm83,32v27,0,34,-4,34,-14v0,-10,-7,-14,-34,-14v-27,0,-34,4,-34,14v0,10,7,14,34,14xm71,-83v16,0,20,-7,20,-40v0,-33,-4,-41,-20,-41v-13,0,-20,8,-20,41v0,33,7,40,20,40xm107,-270r20,0v-2,27,-17,51,-52,51v-35,0,-51,-24,-53,-51r20,0v2,36,64,37,65,0"},"\u0121":{"d":"153,-197r0,33v-11,0,-18,0,-26,6v15,61,-4,121,-69,108v-4,1,-8,4,-8,9v0,26,103,-12,103,56v0,33,-30,46,-82,46v-66,0,-85,-44,-38,-61v-29,-10,-19,-47,6,-57v-20,-14,-26,-24,-26,-69v0,-76,69,-90,107,-50v11,-16,16,-21,33,-21xm83,32v27,0,34,-4,34,-14v0,-10,-7,-14,-34,-14v-27,0,-34,4,-34,14v0,10,7,14,34,14xm71,-83v16,0,20,-7,20,-40v0,-33,-4,-41,-20,-41v-13,0,-20,8,-20,41v0,33,7,40,20,40xm55,-260r39,0r0,39r-39,0r0,-39"},"\u0123":{"d":"153,-197r0,33v-11,0,-18,0,-26,6v15,61,-4,121,-69,108v-4,1,-8,4,-8,9v0,26,103,-12,103,56v0,33,-30,46,-82,46v-66,0,-85,-44,-38,-61v-29,-10,-19,-47,6,-57v-20,-14,-26,-24,-26,-69v0,-76,69,-90,107,-50v11,-16,16,-21,33,-21xm83,32v27,0,34,-4,34,-14v0,-10,-7,-14,-34,-14v-27,0,-34,4,-34,14v0,10,7,14,34,14xm71,-83v16,0,20,-7,20,-40v0,-33,-4,-41,-20,-41v-13,0,-20,8,-20,41v0,33,7,40,20,40xm85,-269r-10,27r14,0r0,30r-31,0v-2,-25,3,-42,11,-57r16,0"},"\u0125":{"d":"60,0r-41,0r0,-260r41,0r0,84v21,-28,80,-33,80,19r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152xm24,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u0127":{"d":"60,0r-41,0r0,-212r-19,0r0,-28r19,0r0,-20r41,0r0,20r40,0r0,28r-40,0r0,38v22,-28,80,-33,80,20r0,154r-40,0r0,-148v-3,-23,-27,-13,-40,-2r0,150"},"\u0131":{"d":"60,0r-40,0r0,-194r40,0r0,194","w":79},"\u00ec":{"d":"60,0r-40,0r0,-194r40,0r0,194xm36,-217r-48,-52r49,0r29,52r-30,0","w":79},"\u00ed":{"d":"60,0r-40,0r0,-194r40,0r0,194xm91,-269r-47,52r-30,0r29,-52r48,0","w":79},"\u00ee":{"d":"60,0r-40,0r0,-194r40,0r0,194xm-14,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":79},"\u0129":{"d":"60,0r-40,0r0,-194r40,0r0,194xm19,-262v17,0,28,13,45,14v11,0,15,-6,15,-16r20,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-15,5,-15,15r-20,0v4,-21,13,-42,37,-42","w":79},"\u00ef":{"d":"60,0r-40,0r0,-194r40,0r0,194xm88,-221r-39,0r0,-39r39,0r0,39xm-8,-260r39,0r0,39r-39,0r0,-39","w":79},"\u012b":{"d":"60,0r-40,0r0,-194r40,0r0,194xm-13,-229r0,-23r106,0r0,23r-106,0","w":79},"\u012f":{"d":"30,79v-59,0,-35,-73,3,-79r-13,0r0,-194r40,0r0,194v-21,4,-33,21,-37,42v3,28,36,15,49,3r7,13v-15,12,-30,21,-49,21xm60,-223r-40,0r0,-37r40,0r0,37","w":79},"\u0237":{"d":"0,61r0,-37v14,1,22,-3,22,-15r0,-202r40,0r0,204v-2,45,-25,52,-62,50","w":79},"\u0135":{"d":"0,61r0,-37v14,1,22,-3,22,-15r0,-202r40,0r0,204v-2,45,-25,52,-62,50xm-14,-217r35,-52r39,0r35,52r-33,0r-21,-32r-22,32r-33,0","w":79},"\u0137":{"d":"148,-194r-42,62r47,132r-41,0r-33,-96r-19,28r0,68r-41,0r0,-260r41,0r0,135r45,-69r43,0xm70,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0"},"\u013a":{"d":"60,0r-40,0r0,-260r40,0r0,260xm92,-325r-47,52r-30,0r29,-52r48,0","w":79},"\u013e":{"d":"60,0r-40,0r0,-260r40,0r0,260xm76,-196r10,-30r-14,0r0,-34r31,0v2,28,-4,47,-13,64r-14,0","w":79},"\u013c":{"d":"60,0r-40,0r0,-260r40,0r0,260xm27,82r10,-29r-14,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":79},"\u0142":{"d":"60,-140r0,140r-40,0r0,-120r-25,13r0,-27r25,-13r0,-113r40,0r0,93r25,-13r0,27","w":79},"\u0140":{"d":"60,0r-40,0r0,-260r40,0r0,260xm86,-151r39,0r0,39r-39,0r0,-39","w":136},"\u0144":{"d":"60,0r-41,0r0,-194r39,0r0,20v23,-29,83,-37,82,17r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152xm136,-269r-47,52r-30,0r28,-52r49,0"},"\u0148":{"d":"60,0r-41,0r0,-194r39,0r0,20v23,-29,83,-37,82,17r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152xm135,-269r-35,52r-39,0r-35,-52r33,0r22,32r21,-32r33,0"},"\u00f1":{"d":"60,0r-41,0r0,-194r39,0r0,20v23,-29,83,-37,82,17r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152xm58,-262v18,0,29,13,45,14v11,0,15,-6,15,-16r21,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-16,5,-16,15r-20,0v4,-21,13,-42,37,-42"},"\u0146":{"d":"60,0r-41,0r0,-194r39,0r0,20v23,-29,83,-37,82,17r0,157r-40,0r0,-150v-2,-23,-28,-13,-40,-2r0,152xm67,82r10,-29r-15,0r0,-35r34,0v2,28,-4,47,-13,64r-16,0"},"\u00f2":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm76,-217r-48,-52r49,0r28,52r-29,0"},"\u00f3":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm131,-269r-47,52r-30,0r29,-52r48,0"},"\u00f4":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm26,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u00f5":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm58,-262v18,0,29,13,45,14v11,0,15,-6,15,-16r21,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-16,5,-16,15r-20,0v4,-21,13,-42,37,-42"},"\u00f6":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm128,-221r-39,0r0,-39r39,0r0,39xm32,-260r39,0r0,39r-39,0r0,-39"},"\u014d":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm27,-229r0,-23r106,0r0,23r-106,0"},"\u014f":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm112,-270r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,37,63,36,64,0"},"\u0151":{"d":"80,-30v35,0,22,-68,22,-102v0,-22,-8,-32,-22,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm80,4v-68,1,-63,-63,-63,-129v0,-42,17,-72,63,-72v68,-1,63,63,63,129v0,42,-17,72,-63,72xm100,-269r-45,52r-28,0r24,-52r49,0xm163,-269r-47,52r-30,0r29,-52r48,0"},"\u00f8":{"d":"66,-34v19,10,36,2,36,-27r0,-66xm55,0r-16,43r-24,0r21,-55v-24,-21,-17,-69,-19,-113v-3,-51,36,-84,88,-68r15,-40r25,0r-20,52v23,22,16,69,18,113v3,51,-37,84,-88,68xm94,-159v-17,-12,-36,-2,-36,27r0,70"},"\u0153":{"d":"80,-30v31,-1,20,-68,20,-102v0,-22,-8,-32,-20,-32v-34,0,-22,68,-22,103v0,22,8,31,22,31xm140,-122r43,0v9,-45,-45,-62,-43,-10r0,10xm223,-89r-83,0v0,25,-3,63,20,59v15,1,24,-13,23,-36r40,0v-1,41,-17,70,-58,70v-22,0,-36,-9,-44,-23v-8,14,-21,23,-45,23v-63,1,-59,-65,-59,-129v0,-42,17,-72,59,-72v25,0,38,7,46,22v9,-15,23,-22,43,-22v55,-1,61,51,58,108","w":240},"\u0155":{"d":"60,0r-41,0r0,-194r39,0v1,7,-2,18,1,23v12,-19,28,-28,54,-26r0,42v-20,-7,-53,-6,-53,22r0,133xm123,-269r-47,52r-30,0r28,-52r49,0","w":119,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u0159":{"d":"60,0r-41,0r0,-194r39,0v1,7,-2,18,1,23v12,-19,28,-28,54,-26r0,42v-20,-7,-53,-6,-53,22r0,133xm122,-269r-35,52r-39,0r-35,-52r33,0r22,32r21,-32r33,0","w":119,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u0157":{"d":"60,0r-41,0r0,-194r39,0v1,7,-2,18,1,23v12,-19,28,-28,54,-26r0,42v-20,-7,-53,-6,-53,22r0,133xm27,82r10,-29r-14,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":119,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u015b":{"d":"127,-146r-34,6v0,-26,-41,-34,-41,-9v0,30,76,42,76,100v0,35,-24,53,-57,53v-35,0,-55,-20,-61,-54r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51xm125,-269r-47,52r-30,0r28,-52r49,0","w":140},"\u015d":{"d":"127,-146r-34,6v0,-26,-41,-34,-41,-9v0,30,76,42,76,100v0,35,-24,53,-57,53v-35,0,-55,-20,-61,-54r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51xm15,-217r35,-52r40,0r34,52r-33,0r-21,-32r-21,32r-34,0","w":140},"\u0161":{"d":"127,-146r-34,6v0,-26,-41,-34,-41,-9v0,30,76,42,76,100v0,35,-24,53,-57,53v-35,0,-55,-20,-61,-54r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51xm125,-269r-35,52r-40,0r-34,-52r33,0r21,32r21,-32r34,0","w":140},"\u015f":{"d":"27,77r6,-18v13,8,45,9,45,-9v-1,-23,-32,-3,-38,-17r22,-30v-31,-2,-46,-24,-52,-53r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51r-34,6v0,-27,-41,-34,-41,-9v0,30,76,42,76,100v0,32,-19,49,-48,52r-13,19v20,-3,40,6,41,26v3,38,-58,44,-81,29","w":140},"\u0219":{"d":"127,-146r-34,6v0,-26,-41,-34,-41,-9v0,30,76,42,76,100v0,35,-24,53,-57,53v-35,0,-55,-20,-61,-54r35,-10v3,16,9,30,27,30v10,0,18,-5,18,-16v0,-33,-76,-46,-76,-99v0,-31,24,-52,54,-52v32,0,53,21,59,51xm56,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":140},"\u00df":{"d":"60,0r-41,0r0,-194v0,-45,22,-68,58,-68v48,0,61,31,61,71v1,29,-9,44,-26,49v23,7,33,28,33,69v0,70,-16,76,-66,73r0,-34v31,11,23,-32,24,-60v0,-19,-8,-28,-22,-28r0,-33v22,1,16,-29,17,-51v0,-17,-6,-23,-19,-23v-14,0,-19,8,-19,27r0,202"},"\u0165":{"d":"81,-206r9,-26r-12,0r0,-28r29,0v2,24,-4,40,-11,54r-15,0xm26,-161r-22,0r0,-33r22,0r0,-52r40,0r0,52r27,0r0,33r-27,0r0,112v-1,16,12,17,27,16r0,34v-32,9,-67,-3,-67,-41r0,-121","w":100},"\u0163":{"d":"26,-161r-22,0r0,-33r22,0r0,-52r40,0r0,52r27,0r0,33r-27,0r0,112v-1,16,12,17,27,16r0,34v-32,9,-67,-3,-67,-41r0,-121xm44,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":100},"\u021b":{"d":"26,-161r-22,0r0,-33r22,0r0,-52r40,0r0,52r27,0r0,33r-27,0r0,112v-1,16,12,17,27,16r0,34v-32,9,-67,-3,-67,-41r0,-121xm44,82r11,-29r-15,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":100},"\u0167":{"d":"26,-161r-22,0r0,-33r22,0r0,-52r40,0r0,52r27,0r0,33r-27,0r0,32r23,0r0,30r-23,0v4,27,-15,74,27,66r0,34v-32,9,-67,-3,-67,-41r0,-59r-20,0r0,-30r20,0r0,-32","w":100},"\u00fe":{"d":"19,-260r41,0r0,85v24,-37,87,-28,83,32v-3,56,15,149,-41,147v-18,0,-26,-8,-42,-21r0,78r-41,0r0,-321xm60,-154r0,114v19,14,42,20,42,-21v0,-43,9,-135,-42,-93"},"\u00f9":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm76,-217r-48,-52r49,0r28,52r-29,0"},"\u00fa":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm131,-269r-47,52r-30,0r29,-52r48,0"},"\u00fb":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm26,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0"},"\u0169":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm59,-262v17,0,28,13,45,14v11,0,15,-6,15,-16r20,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-15,5,-15,15r-20,0v4,-21,13,-42,37,-42"},"\u00fc":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm128,-221r-39,0r0,-39r39,0r0,39xm32,-260r39,0r0,39r-39,0r0,-39"},"\u016b":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm27,-229r0,-23r106,0r0,23r-106,0"},"\u016d":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm112,-270r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,37,63,36,64,0"},"\u016f":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm60,-253v0,10,9,18,19,18v10,0,19,-8,19,-18v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm42,-253v0,-20,17,-37,37,-37v20,0,37,17,37,37v0,20,-17,36,-37,36v-20,0,-37,-16,-37,-36"},"\u0171":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-24,30,-84,36,-83,-18r0,-157r41,0r0,150v2,23,28,13,40,2r0,-152xm101,-269r-45,52r-29,0r25,-52r49,0xm164,-269r-47,52r-30,0r29,-52r48,0"},"\u0173":{"d":"97,79v-59,0,-34,-72,6,-78r0,-21v-25,30,-84,38,-84,-17r0,-157r41,0r0,150v3,23,27,13,40,2r0,-152r40,0r0,194v-28,1,-44,19,-49,42v3,28,36,15,49,3r7,13v-15,11,-31,21,-50,21"},"\u0175":{"d":"85,-193r30,0r22,120r22,-121r39,0r-45,194r-32,0r-23,-122r-26,122r-32,0r-38,-194r39,0r18,121xm46,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":200,"k":{",":20,".":20,"\u2026":20}},"\u00fd":{"d":"96,-194r40,0r-50,208v-11,41,-30,49,-72,47r0,-33v36,6,40,-27,32,-57r-42,-165r41,0r26,124xm122,-269r-47,52r-30,0r28,-52r49,0","w":140},"\u0177":{"d":"96,-194r40,0r-50,208v-11,41,-30,49,-72,47r0,-33v36,6,40,-27,32,-57r-42,-165r41,0r26,124xm17,-217r34,-52r40,0r35,52r-33,0r-22,-32r-21,32r-33,0","w":140},"\u00ff":{"d":"96,-194r40,0r-50,208v-11,41,-30,49,-72,47r0,-33v36,6,40,-27,32,-57r-42,-165r41,0r26,124xm118,-221r-39,0r0,-39r39,0r0,39xm22,-260r39,0r0,39r-39,0r0,-39","w":140},"\u017a":{"d":"85,-161r-69,0r0,-33r113,0r0,33r-75,128r75,0r0,33r-118,0r0,-33xm129,-269r-47,52r-30,0r29,-52r48,0","w":140},"\u017e":{"d":"85,-161r-69,0r0,-33r113,0r0,33r-75,128r75,0r0,33r-118,0r0,-33xm125,-269r-35,52r-40,0r-34,-52r33,0r21,32r21,-32r34,0","w":140},"\u017c":{"d":"85,-161r-69,0r0,-33r113,0r0,33r-75,128r75,0r0,33r-118,0r0,-33xm55,-260r39,0r0,39r-39,0r0,-39","w":140},"\ue300":{"d":"36,-273r-48,-52r49,0r29,52r-30,0","w":79},"\u00b4":{"d":"91,-269r-47,52r-30,0r29,-52r48,0","w":79},"\ue301":{"d":"91,-325r-47,52r-30,0r29,-52r48,0","w":79},"\u02c6":{"d":"-14,-217r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":79},"\ue302":{"d":"-14,-273r34,-52r40,0r34,52r-33,0r-21,-32r-21,32r-33,0","w":79},"\u02c7":{"d":"94,-269r-34,52r-40,0r-34,-52r33,0r21,32r21,-32r33,0","w":79},"\ue303":{"d":"94,-325r-34,52r-40,0r-34,-52r33,0r21,32r21,-32r33,0","w":79},"\ue30b":{"d":"26,-196r10,-30r-13,0r0,-34r31,0v2,28,-4,47,-13,64r-15,0","w":79},"\u02dc":{"d":"18,-262v18,0,29,13,45,14v11,0,15,-6,15,-16r21,0v-4,21,-13,43,-37,43v-17,0,-28,-15,-45,-14v-11,0,-16,5,-16,15r-20,0v4,-21,13,-42,37,-42","w":79},"\ue304":{"d":"18,-319v18,0,29,13,45,14v11,0,15,-5,15,-15r21,0v-4,21,-13,42,-37,42v-18,1,-29,-14,-45,-14v-11,0,-16,6,-16,16r-20,0v4,-21,13,-43,37,-43","w":79},"\u00a8":{"d":"88,-221r-39,0r0,-39r39,0r0,39xm-8,-260r39,0r0,39r-39,0r0,-39","w":79},"\ue305":{"d":"-8,-316r39,0r0,38r-39,0r0,-38xm88,-278r-39,0r0,-38r39,0r0,38","w":79},"\u00af":{"d":"-13,-229r0,-23r106,0r0,23r-106,0","w":79},"\ue306":{"d":"-13,-286r0,-23r106,0r0,23r-106,0","w":79},"\u02c9":{"d":"-13,-229r0,-23r106,0r0,23r-106,0","w":79},"\u02d8":{"d":"72,-270r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,37,63,36,64,0","w":79},"\ue307":{"d":"72,-326r21,0v-2,27,-18,51,-53,51v-35,0,-51,-24,-53,-51r21,0v1,36,63,35,64,0","w":79},"\u02da":{"d":"21,-253v0,10,9,18,19,18v10,0,19,-8,19,-18v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm3,-253v0,-20,17,-37,37,-37v20,0,37,17,37,37v0,20,-17,36,-37,36v-20,0,-37,-16,-37,-36","w":79},"\ue308":{"d":"21,-310v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-18,-19,-18v-10,0,-19,8,-19,18xm3,-310v0,-20,17,-36,37,-36v20,0,37,16,37,36v0,20,-17,37,-37,37v-20,0,-37,-17,-37,-37","w":79},"\u02dd":{"d":"57,-269r-45,52r-29,0r25,-52r49,0xm120,-269r-47,52r-30,0r29,-52r48,0","w":79},"\ue309":{"d":"57,-325r-45,52r-29,0r25,-52r49,0xm120,-325r-47,52r-30,0r29,-52r48,0","w":79},"\u02d9":{"d":"21,-260r38,0r0,39r-38,0r0,-39","w":79},"\ue30a":{"d":"21,-316r38,0r0,38r-38,0r0,-38","w":79},"\u00b8":{"d":"-3,77r6,-18v14,9,45,8,45,-9v0,-23,-32,-3,-38,-17r24,-33r17,0r-14,22v19,-3,39,6,40,26v3,37,-57,44,-80,29","w":79},"\u02db":{"d":"87,-8r0,5v-18,8,-47,21,-47,45v0,29,37,13,50,2r6,13v-23,23,-86,38,-86,-11v0,-38,50,-49,77,-54","w":79},"\ue30c":{"d":"27,82r10,-29r-14,0r0,-35r33,0v2,28,-3,47,-12,64r-17,0","w":79},"\ue30d":{"d":"51,-269r-9,27r13,0r0,30r-31,0v-2,-25,4,-42,12,-57r15,0","w":79},"\u2026":{"d":"81,0r-41,0r0,-42r41,0r0,42xm201,0r-42,0r0,-42r42,0r0,42xm320,0r-41,0r0,-42r41,0r0,42","w":360},"\u00ad":{"d":"104,-80r-88,0r0,-33r88,0r0,33","w":119},"\u00a1":{"d":"65,-117r8,183r-46,0r8,-183r30,0xm29,-194r42,0r0,43r-42,0r0,-43","w":100},"\u00bf":{"d":"12,22v0,-60,53,-64,44,-139r35,0v9,62,-30,97,-38,138v0,9,6,16,15,16v15,0,23,-15,26,-28r35,13v-11,60,-117,66,-117,0xm53,-194r42,0r0,43r-42,0r0,-43","w":140},"\u2018":{"d":"19,-176r0,-43r25,-45r19,0r-18,45r16,0r0,43r-42,0","w":79,"k":{"\u2018":20}},"\u2019":{"d":"61,-260r0,43r-25,44r-19,0r18,-44r-16,0r0,-43r42,0","w":79},"\u201c":{"d":"25,-176r0,-43r25,-45r19,0r-18,45r17,0r0,43r-43,0xm92,-176r0,-43r25,-45r19,0r-18,45r16,0r0,43r-42,0"},"\u201d":{"d":"135,-260r0,43r-25,44r-19,0r17,-44r-16,0r0,-43r43,0xm68,-260r0,43r-25,44r-19,0r18,-44r-16,0r0,-43r42,0"},"\u201a":{"d":"61,-42r0,42r-25,45r-19,0r18,-45r-16,0r0,-42r42,0","w":79},"\u201e":{"d":"135,-42r0,42r-25,45r-19,0r17,-45r-16,0r0,-42r43,0xm68,-42r0,42r-25,45r-19,0r18,-45r-16,0r0,-42r42,0"},"\u2039":{"d":"58,-97r41,56r-35,0r-41,-56r41,-55r36,0","w":119},"\u203a":{"d":"21,-41r41,-56r-42,-55r36,0r41,55r-41,56r-35,0","w":119},"\u00ab":{"d":"58,-97r41,56r-35,0r-41,-56r41,-55r36,0xm118,-97r41,56r-35,0r-41,-56r41,-55r36,0","w":180},"\u00bb":{"d":"81,-41r41,-56r-42,-55r36,0r41,55r-41,56r-35,0xm21,-41r41,-56r-42,-55r36,0r41,55r-41,56r-35,0","w":180},"\u2013":{"d":"180,-84r-180,0r0,-26r180,0r0,26","w":180},"\u2014":{"d":"360,-84r-360,0r0,-26r360,0r0,26","w":360},"\u2022":{"d":"25,-130v0,-36,29,-65,65,-65v36,0,65,29,65,65v0,36,-29,65,-65,65v-36,0,-65,-29,-65,-65","w":180},"\u00b7":{"d":"16,-91v0,-13,10,-24,24,-24v13,0,24,11,24,24v0,14,-11,24,-24,24v-14,0,-24,-10,-24,-24","w":79},"\u2219":{"d":"16,-91v0,-13,10,-24,24,-24v13,0,24,11,24,24v0,14,-11,24,-24,24v-14,0,-24,-10,-24,-24","w":79},"\u2020":{"d":"156,-207r0,45r-60,-15r16,61v-7,24,-10,74,-15,145r-14,0v-5,-71,-8,-121,-15,-145r16,-61r-60,15r0,-45r58,15r-14,-72r44,0r-14,72","w":180},"\u2021":{"d":"156,-207r0,45r-60,-15r16,60r-16,59r60,-15r0,45r-58,-15r14,72r-44,0r14,-72r-58,15r0,-45r60,15r-16,-59r16,-60r-60,15r0,-45r58,15r-14,-72r44,0r-14,72","w":180},"\u00a7":{"d":"145,-235r-25,18v-7,-16,-46,-29,-46,-2v0,31,87,69,87,118v0,23,-14,42,-39,43v33,24,18,87,-29,87v-26,0,-43,-11,-61,-29r26,-21v5,21,49,34,49,4v0,-31,-88,-77,-88,-124v0,-24,17,-38,40,-41v-32,-26,-21,-82,34,-82v22,0,41,13,52,29xm52,-144v0,11,46,63,60,63v9,0,16,-8,16,-16v0,-10,-44,-62,-60,-62v-10,0,-16,7,-16,15","w":180},"\u00b6":{"d":"70,29r0,-156v-42,0,-68,-27,-68,-65v0,-88,99,-66,179,-68r0,23r-20,0r0,266r-30,0r0,-266r-31,0r0,266r-30,0","w":180},"\u00a6":{"d":"58,-107r0,111r-36,0r0,-111r36,0xm58,-264r0,111r-36,0r0,-111r36,0","w":79},"\u00a9":{"d":"144,4v-72,0,-137,-53,-137,-134v0,-81,65,-134,137,-134v72,0,137,53,137,134v0,81,-65,134,-137,134xm246,-130v0,-62,-46,-105,-102,-105v-57,0,-102,43,-102,105v0,62,45,106,102,106v56,0,102,-44,102,-106xm185,-108r29,0v-6,36,-33,57,-65,57v-46,0,-76,-35,-76,-80v0,-86,129,-111,140,-24r-28,0v-15,-47,-84,-28,-78,24v-8,52,69,72,78,23","w":288},"\u00ae":{"d":"120,-119r0,64r-29,0r0,-150v51,0,114,-8,114,44v0,27,-17,38,-36,40r36,66r-33,0r-33,-64r-19,0xm120,-182r0,40v24,1,59,2,55,-21v3,-22,-31,-19,-55,-19xm144,4v-72,0,-137,-53,-137,-134v0,-81,65,-134,137,-134v72,0,137,53,137,134v0,81,-65,134,-137,134xm246,-130v0,-62,-46,-105,-102,-105v-57,0,-102,43,-102,105v0,62,45,106,102,106v56,0,102,-44,102,-106","w":288},"\u2122":{"d":"201,-260r37,98r37,-98r49,0r0,148r-33,0r-1,-108r-39,108r-25,0r-41,-108r0,108r-33,0r0,-148r49,0xm133,-260r0,27r-43,0r0,121r-35,0r0,-121r-43,0r0,-27r121,0","w":356},"\u00a4":{"d":"157,-72r-18,19r-17,-17v-24,17,-61,17,-84,0r-17,17r-18,-19r17,-16v-18,-24,-18,-60,0,-84r-17,-16r18,-19r17,17v23,-17,60,-17,84,0r17,-17r18,19r-17,16v17,24,17,60,0,84xm40,-130v0,24,18,42,40,42v22,0,40,-18,40,-42v0,-24,-18,-42,-40,-42v-22,0,-40,18,-40,42"},"\u20ac":{"d":"13,-113r14,0r0,-29r-22,0r8,-30r14,0v-14,-84,75,-117,129,-71r-11,41v-12,-15,-28,-23,-43,-23v-26,0,-35,23,-31,53r65,0r-8,30r-57,0r0,29r50,0r-8,30r-42,0v-10,53,44,60,74,32r0,42v-55,32,-129,3,-118,-74r-22,0"},"\u00a2":{"d":"56,-53v13,-35,19,-77,30,-114v-46,-10,-32,72,-30,114xm144,-131r-37,0v0,-11,0,-20,-5,-26r-33,121v23,11,41,-9,37,-41r40,0v3,51,-23,83,-81,76r-12,43r-27,0r14,-52v-33,-18,-25,-70,-26,-119v-1,-46,24,-78,78,-71r12,-46r27,0r-15,54v19,12,28,33,28,61"},"\u00a3":{"d":"13,4r0,-39v23,-8,27,-28,27,-80r-27,0r0,-30r22,0v-17,-57,-17,-119,50,-119v39,0,58,23,58,73r-37,0v-1,-32,-7,-39,-22,-39v-34,0,-12,57,-8,85r36,0r0,30r-33,0v-1,32,-1,54,-12,73v22,18,48,8,43,-30r36,0v3,44,-9,77,-48,76v-18,0,-33,-8,-46,-18v-13,9,-24,17,-39,18"},"\u0192":{"d":"12,59r0,-33v46,8,34,-14,48,-156r-33,0r0,-31r36,0v7,-85,32,-110,85,-101r0,34v-35,-13,-43,-3,-47,67r37,0r0,31r-39,0v-10,128,-12,201,-87,189"},"\u00a5":{"d":"150,-168r0,30r-43,0r-10,29r53,0r0,30r-53,0r0,79r-34,0r0,-79r-54,0r0,-30r54,0r-10,-29r-44,0r0,-30r32,0r-33,-92r36,0r37,108r35,-108r36,0r-33,92r31,0"},"\u00aa":{"d":"5,-227v2,-24,19,-36,44,-37v59,-3,30,71,40,119v-10,-1,-27,5,-27,-7v-18,16,-57,11,-57,-17v0,-26,18,-40,54,-53v0,-12,0,-20,-12,-20v-10,0,-14,6,-14,15r-28,0xm44,-164v16,1,16,-20,15,-37v-22,11,-26,17,-26,27v0,7,5,10,11,10","w":95},"\u00ba":{"d":"48,-166v18,-1,11,-38,11,-57v0,-12,-4,-17,-11,-17v-18,1,-11,38,-11,57v0,12,4,17,11,17xm48,-143v-44,1,-42,-36,-41,-77v0,-26,11,-44,41,-44v44,-1,42,37,41,78v0,26,-11,43,-41,43","w":95},"\u00b9":{"d":"34,-105r0,-121r-19,0r0,-17v21,-5,26,-24,53,-21r0,159r-34,0","w":95},"\u00b2":{"d":"90,-105r-85,0r0,-29v36,-41,53,-68,53,-91v0,-6,-3,-10,-10,-10v-9,1,-13,9,-12,19r-31,0v-2,-29,16,-47,46,-48v24,0,40,17,40,35v0,26,-7,49,-47,95r46,0r0,29","w":95},"\u00b3":{"d":"7,-150r31,0v0,10,0,18,10,18v9,1,11,-12,10,-23v0,-17,-7,-19,-21,-19r0,-27v13,0,20,-3,20,-21v0,-18,-18,-18,-18,-4r0,6r-31,0v-2,-27,13,-43,41,-44v45,-2,54,58,24,76v35,17,23,94,-26,85v-27,1,-43,-15,-40,-47","w":95},"\u2044":{"d":"-27,4r-33,0r147,-268r33,0","w":60},"\u2215":{"d":"-27,4r-33,0r147,-268r33,0","w":60},"\u00bc":{"d":"161,-63r23,0r0,-48xm184,0r0,-36r-51,0r0,-29r47,-91r34,0r0,93r14,0r0,27r-14,0r0,36r-30,0xm59,4r-32,0r147,-268r33,0xm37,-105r0,-121r-19,0r0,-17v21,-4,26,-23,53,-20r0,158r-34,0","w":239},"\u00bd":{"d":"57,4r-33,0r147,-268r33,0xm36,-105r0,-121r-19,0r0,-17v21,-5,26,-24,54,-21r0,159r-35,0xm228,0r-85,0r0,-29v36,-41,53,-68,53,-91v0,-6,-3,-10,-10,-10v-9,1,-13,9,-12,19r-31,0v-2,-29,17,-46,47,-47v24,0,39,16,39,34v0,26,-6,49,-46,95r45,0r0,29","w":239},"\u00be":{"d":"161,-63r23,0r0,-48xm184,0r0,-36r-51,0r0,-29r47,-91r34,0r0,93r14,0r0,27r-14,0r0,36r-30,0xm66,4r-33,0r148,-268r33,0xm11,-150r31,0v0,9,-1,19,9,18v9,1,11,-12,10,-23v0,-17,-6,-19,-20,-19r0,-27v13,0,19,-3,19,-21v0,-18,-18,-18,-18,-4r0,6r-30,0v-2,-27,13,-43,41,-44v45,-2,54,58,24,76v35,17,23,94,-26,85v-27,1,-43,-15,-40,-47","w":239},"\u2030":{"d":"5,-206v0,-30,24,-54,54,-54v30,0,54,24,54,54v0,30,-24,54,-54,54v-30,0,-54,-24,-54,-54xm34,-206v0,14,11,25,25,25v14,0,25,-11,25,-25v0,-14,-11,-25,-25,-25v-14,0,-25,11,-25,25xm120,-54v0,-30,24,-54,54,-54v30,0,54,24,54,54v0,30,-24,54,-54,54v-30,0,-54,-24,-54,-54xm148,-54v0,14,12,25,26,25v14,0,25,-11,25,-25v0,-14,-11,-25,-25,-25v-14,0,-26,11,-26,25xm247,-54v0,-30,24,-54,54,-54v30,0,54,24,54,54v0,30,-24,54,-54,54v-30,0,-54,-24,-54,-54xm276,-54v0,14,11,25,25,25v14,0,25,-11,25,-25v0,-14,-11,-25,-25,-25v-14,0,-25,11,-25,25xm35,4r148,-268r25,0r-148,268r-25,0","w":360},"\u2212":{"d":"199,-73r-182,0r0,-36r182,0r0,36","w":216},"\u00b1":{"d":"90,-133r0,-49r36,0r0,49r73,0r0,35r-73,0r0,50r-36,0r0,-50r-73,0r0,-35r73,0xm17,0r0,-35r182,0r0,35r-182,0","w":216},"\u00d7":{"d":"199,-157r-66,66r66,66r-25,25r-66,-66r-66,66r-25,-25r66,-66r-66,-66r25,-25r66,66r66,-66","w":216},"\u00f7":{"d":"199,-73r-182,0r0,-36r182,0r0,36xm79,-166v0,-16,13,-28,29,-28v16,0,29,12,29,28v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29xm79,-17v0,-16,13,-28,29,-28v16,0,29,12,29,28v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":216},"\u2260":{"d":"202,-34r-103,0r-28,56r-35,-18r19,-38r-42,0r0,-41r63,0r20,-40r-83,0r0,-41r103,0r28,-55r36,18r-19,37r41,0r0,41r-62,0r-20,40r82,0r0,41","w":216},"\u2248":{"d":"179,-165r27,0v-3,33,-19,64,-57,64v-38,0,-100,-53,-111,0r-27,0v3,-32,18,-63,55,-63v36,0,102,53,113,-1xm178,-88r27,0v-3,33,-18,64,-55,64v-40,1,-101,-55,-113,0r-27,0v3,-32,19,-64,55,-64v37,0,99,52,113,0","w":216},"\u2264":{"d":"202,-38r-189,-61r0,-41r189,-63r0,43r-133,40r133,39r0,43xm202,14r-189,0r0,-41r189,0r0,41","w":216},"\u2265":{"d":"202,-99r-189,61r0,-43r134,-39r-134,-40r0,-43r189,63r0,41xm202,14r-189,0r0,-41r189,0r0,41","w":216},"\u00ac":{"d":"164,-36r0,-75r-147,0r0,-35r182,0r0,110r-35,0","w":216},"\u2206":{"d":"245,0r-242,0r96,-256r44,0xm186,-39r-65,-168r-61,168r126,0","w":248},"\u0394":{"d":"245,0r-242,0r96,-256r44,0xm186,-39r-65,-168r-61,168r126,0","w":248},"\u2126":{"d":"253,0r-100,0r0,-69v37,-9,55,-37,55,-74v0,-42,-29,-77,-73,-77v-44,0,-73,35,-73,77v0,37,19,64,55,74r0,69r-100,0r0,-37r65,0r0,-14v-43,-13,-65,-52,-65,-95v0,-67,53,-114,118,-114v66,0,118,45,118,113v0,43,-20,84,-65,96r0,14r65,0r0,37","w":273},"\u03a9":{"d":"253,0r-100,0r0,-69v37,-9,55,-37,55,-74v0,-42,-29,-77,-73,-77v-44,0,-73,35,-73,77v0,37,19,64,55,74r0,69r-100,0r0,-37r65,0r0,-14v-43,-13,-65,-52,-65,-95v0,-67,53,-114,118,-114v66,0,118,45,118,113v0,43,-20,84,-65,96r0,14r65,0r0,37","w":273},"\u00b5":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-15,13,-23,21,-42,23r0,57r-41,0r0,-255r41,0r0,150v2,23,28,13,40,2r0,-152"},"\u03bc":{"d":"100,-194r40,0r0,194r-38,0r0,-19v-15,13,-24,21,-42,23r0,57r-41,0r0,-255r41,0r0,150v3,23,27,13,40,2r0,-152"},"\u03c0":{"d":"207,-35r0,30v-34,19,-71,3,-71,-40r0,-91r-70,0r0,136r-40,0r0,-136r-26,0r0,-39r206,0r0,39r-29,0r0,82v-4,18,14,30,30,19","w":214},"\u00b0":{"d":"72,-181v17,0,30,-14,30,-31v0,-17,-13,-31,-30,-31v-17,0,-30,14,-30,31v0,17,13,31,30,31xm72,-161v-29,0,-52,-22,-52,-51v0,-29,23,-52,52,-52v29,0,52,23,52,52v0,29,-23,51,-52,51","w":144},"\u2113":{"d":"145,-42v7,6,11,17,17,24v-41,41,-132,27,-117,-48v-7,6,-13,13,-21,18r-16,-25r37,-30r0,-87v-9,-77,114,-98,114,-17v0,37,-22,71,-68,111v-1,28,-4,67,23,67v9,0,19,-4,31,-13xm121,-204v0,-14,-5,-25,-14,-25v-25,0,-14,64,-16,94v21,-23,30,-47,30,-69","w":180},"\u212e":{"d":"202,-93r-145,0r0,65v37,35,97,26,121,-22r13,8v-42,87,-175,47,-175,-51v0,-56,36,-100,93,-100v55,0,93,42,93,100xm57,-106r104,0r0,-52v-28,-28,-77,-30,-104,0r0,52","w":216},"\u221e":{"d":"280,-95v0,37,-23,67,-62,67v-30,0,-52,-20,-70,-41v-21,22,-37,41,-69,41v-39,0,-63,-30,-63,-67v0,-37,23,-66,62,-66v32,0,51,20,70,43v18,-22,39,-43,70,-43v39,0,62,29,62,66xm246,-94v0,-17,-11,-31,-29,-31v-19,0,-35,18,-47,31v16,27,73,49,76,0xm127,-94v-17,-27,-73,-50,-77,0v3,46,63,27,77,0","w":296},"\u2202":{"d":"186,-129v0,62,-16,134,-92,134v-48,0,-80,-35,-80,-83v0,-67,81,-105,129,-61v5,-38,-9,-86,-53,-88v-17,0,-31,8,-44,18r-22,-26v20,-15,38,-25,64,-25v75,0,98,68,98,131xm96,-27v37,0,49,-42,47,-77v-24,-38,-88,-23,-88,28v0,25,13,49,41,49","w":201},"\u222b":{"d":"82,-186v-4,-41,8,-97,56,-97v16,0,39,8,39,28v0,11,-8,20,-19,20v-23,0,-17,-27,-27,-27v-14,10,-5,42,-5,62r0,169v0,41,6,108,-54,108v-17,0,-40,-8,-40,-28v0,-11,8,-19,19,-19v23,0,17,27,27,27v13,-8,5,-34,5,-52","w":221},"\u221a":{"d":"201,-283r-77,360r-40,0r-54,-113r-18,9r-16,-33r55,-26r46,97r60,-294r44,0","w":196},"\u2211":{"d":"226,77r-217,0r0,-34r108,-148r-103,-144r0,-34r208,0r0,39r-151,0r97,139r-104,143r162,0r0,39","w":235},"\u220f":{"d":"246,77r-43,0r0,-321r-139,0r0,321r-42,0r0,-360r224,0r0,360","w":267},"\u25ca":{"d":"190,-128r-65,141r-38,0r-64,-141r65,-141r37,0xm149,-128r-42,-101r-42,101r42,101","w":213},"\uf8ff":{"d":"100,-42r-20,0r0,-24r20,0r0,24xm138,-172v0,33,-49,43,-40,88v-7,-1,-19,3,-18,-6v-7,-41,40,-55,40,-81v0,-17,-13,-30,-28,-30v-15,0,-26,10,-29,34r-18,-3v0,-66,93,-63,93,-2xm18,-18r148,0r0,-222r-148,0r0,222xm0,-258r184,0r0,258r-184,0r0,-258","w":184}}});
Cufon.registerFont({"w":159,"face":{"font-family":"Trade Gothic LT Pro","font-weight":400,"font-stretch":"condensed","units-per-em":"360","panose-1":"2 11 5 6 4 3 3 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-60 -342 360 78.1453","underline-thickness":"18","underline-position":"-27","stemh":"19","stemv":"24","unicode-range":"U+000D-U+FB02"},"glyphs":{" ":{"w":79},"\u0149":{"d":"44,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm-2,-260r30,0v4,40,-11,62,-21,88r-11,0r17,-54r-15,0r0,-34","w":177},"\u0132":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm125,-260r28,0r0,195v3,59,-30,75,-79,66r2,-24v27,8,49,1,49,-35r0,-202","w":176},"\ufb01":{"d":"1,-166r0,-21r29,0v0,-39,-6,-79,38,-77v7,0,14,2,20,3r0,20v-15,-7,-33,-1,-33,17r0,37r31,0r0,21r-31,0r0,166r-25,0r0,-166r-29,0xm111,0r0,-187r25,0r0,187r-25,0xm111,-230r0,-30r25,0r0,30r-25,0"},"\ufb02":{"d":"1,-166r0,-21r29,0v0,-39,-6,-79,38,-77v7,0,14,2,20,3r0,20v-15,-7,-33,-1,-33,17r0,37r31,0r0,21r-31,0r0,166r-25,0r0,-166r-29,0xm111,0r0,-260r25,0r0,260r-25,0"},"\u0133":{"d":"27,0r0,-187r26,0r0,187r-26,0xm27,-230r0,-30r26,0r0,30r-26,0xm76,60r0,-22v15,5,28,0,27,-21r0,-204r26,0r0,206v1,37,-20,45,-53,41xm103,-230r0,-30r26,0r0,30r-26,0","w":154},"\r":{"w":100},"!":{"d":"50,-77r-5,-183r30,0r-6,183r-19,0xm45,-34r30,0r0,34r-30,0r0,-34","w":119},"\"":{"d":"26,-168r0,-92r22,0r0,92r-22,0xm72,-168r0,-92r22,0r0,92r-22,0","w":119},"#":{"d":"145,-102r0,20r-31,0r-9,82r-21,0r9,-82r-35,0r-9,82r-22,0r10,-82r-31,0r0,-20r33,0r6,-56r-30,0r0,-20r32,0r10,-82r20,0r-9,82r36,0r9,-82r21,0r-9,82r28,0r0,20r-30,0r-6,56r28,0xm102,-158r-36,0r-6,56r36,0"},"$":{"d":"87,-115r0,93v21,-2,33,-18,33,-41v0,-23,-15,-38,-33,-52xm69,-159r0,-79v-39,10,-31,63,0,79xm14,-71r26,0v1,24,7,43,29,49r0,-105v-26,-18,-53,-37,-53,-72v0,-33,22,-57,53,-61r0,-34r18,0r0,34v35,5,54,33,55,69r-26,0v-1,-20,-10,-41,-29,-47r0,91v28,19,59,40,59,83v0,37,-24,61,-59,64r0,42r-18,0r0,-42v-36,-5,-55,-33,-55,-71"},"%":{"d":"138,-56v0,-31,24,-56,56,-56v32,0,57,25,57,56v0,31,-25,56,-57,56v-32,0,-56,-25,-56,-56xm160,-56v0,18,14,34,34,34v20,0,35,-16,35,-34v0,-18,-15,-35,-35,-35v-20,0,-34,17,-34,35xm17,-204v0,-31,24,-56,56,-56v32,0,56,25,56,56v0,31,-24,56,-56,56v-32,0,-56,-25,-56,-56xm38,-204v0,18,15,35,35,35v20,0,34,-17,34,-35v0,-18,-14,-34,-34,-34v-20,0,-35,16,-35,34xm199,-264r21,0r-149,268r-21,0","w":280},"&":{"d":"71,-121v-31,25,-43,101,16,101v14,0,29,-10,37,-22v-21,-24,-40,-53,-53,-79xm91,-244v-34,-3,-23,64,-10,83v18,-20,29,-36,29,-59v0,-13,-10,-24,-19,-24xm148,-126r26,1v-2,30,-6,50,-18,77v9,10,19,20,31,29r-15,19v-9,-4,-23,-14,-32,-24v-32,48,-122,31,-122,-39v0,-38,27,-61,43,-79v-7,-14,-19,-45,-19,-66v0,-75,95,-68,94,-10v0,36,-23,57,-46,79v13,26,29,49,47,71v7,-19,9,-38,11,-58","w":200},"'":{"d":"29,-168r0,-92r22,0r0,92r-22,0","w":79},"(":{"d":"86,29r-18,11v-60,-89,-59,-216,0,-304r18,11v-51,92,-51,190,0,282","w":100},")":{"d":"14,-253r18,-11v60,89,59,216,0,304r-18,-11v52,-92,52,-190,0,-282","w":100},"*":{"d":"92,-260r-7,57r51,-25r8,24r-56,11r41,40r-21,16r-28,-49r-29,49r-20,-16r41,-40r-56,-11r7,-24r52,25r-7,-57r24,0"},"+":{"d":"96,-105r0,-82r24,0r0,82r82,0r0,23r-82,0r0,82r-24,0r0,-82r-82,0r0,-23r82,0","w":216},",":{"d":"25,-34r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34","w":79},"-":{"d":"104,-82r-89,0r0,-23r89,0r0,23","w":119},".":{"d":"25,-34r30,0r0,34r-30,0r0,-34","w":79},"\/":{"d":"20,4r-24,0r84,-268r24,0","w":100},"0":{"d":"117,-130v0,-85,-13,-112,-37,-112v-24,0,-37,27,-37,112v0,85,13,112,37,112v24,0,37,-27,37,-112xm143,-130v0,94,-21,134,-63,134v-42,0,-63,-40,-63,-134v0,-94,21,-134,63,-134v42,0,63,40,63,134"},"1":{"d":"126,0r-88,0r0,-22r32,0r0,-208r-33,2r0,-15v22,-2,30,-23,59,-21r0,242r30,0r0,22"},"2":{"d":"140,0r-123,0r0,-22v23,-77,95,-120,95,-179v0,-27,-13,-41,-31,-41v-21,0,-36,16,-38,55r-24,0v-1,-106,119,-99,119,-10v0,65,-58,84,-97,175r99,0r0,22"},"3":{"d":"45,-205r-23,-3v3,-31,20,-56,53,-56v29,0,57,21,57,64v1,38,-16,56,-33,62v69,21,34,154,-26,142v-35,0,-58,-28,-58,-66r24,0v2,28,14,44,37,44v17,0,35,-18,35,-54v0,-43,-18,-55,-59,-55r0,-22v39,0,55,-10,55,-50v0,-31,-13,-43,-31,-43v-22,0,-30,19,-31,37"},"4":{"d":"92,-236v-22,49,-39,104,-59,155r59,0r0,-155xm80,-260r38,0r0,179r27,0r0,22r-27,0r0,59r-26,0r0,-59r-83,0r0,-12"},"5":{"d":"20,-58r24,-2v2,19,10,42,33,42v22,0,39,-23,39,-68v0,-74,-48,-80,-68,-39r-21,-3r9,-132r91,0r-2,22r-68,0r-5,79v45,-30,90,-2,90,72v0,108,-118,119,-122,29"},"6":{"d":"135,-213r-23,1v-4,-26,-18,-30,-28,-30v-23,0,-38,32,-39,104v39,-38,97,-23,96,60v0,50,-22,82,-56,82v-45,0,-66,-26,-66,-120v0,-104,24,-148,65,-148v33,0,46,21,51,51xm83,-136v-23,1,-38,14,-38,47v0,53,13,71,36,71v20,0,34,-15,34,-60v0,-46,-15,-58,-32,-58"},"7":{"d":"22,-238r0,-22r116,0r0,14r-75,246r-28,0r76,-238r-89,0"},"8":{"d":"118,-64v0,-28,-17,-46,-38,-61v-21,15,-38,33,-38,61v0,21,11,46,38,46v27,0,38,-25,38,-46xm112,-208v0,-17,-10,-34,-32,-34v-53,0,-32,78,0,92v19,-12,32,-32,32,-58xm144,-66v0,37,-24,70,-64,70v-40,0,-64,-33,-64,-70v0,-32,17,-54,42,-72v-23,-18,-36,-36,-36,-67v0,-34,26,-59,58,-59v32,0,58,25,58,59v0,31,-13,49,-36,67v25,18,42,40,42,72"},"9":{"d":"24,-47r24,-1v4,26,18,30,28,30v23,0,37,-32,38,-104v-38,39,-96,22,-95,-60v0,-50,22,-82,56,-82v45,0,66,26,66,120v0,104,-24,148,-65,148v-33,0,-47,-21,-52,-51xm77,-124v23,-1,38,-14,38,-47v0,-53,-14,-71,-37,-71v-20,0,-33,15,-33,60v0,46,15,58,32,58"},":":{"d":"25,-34r30,0r0,34r-30,0r0,-34xm25,-132r30,0r0,34r-30,0r0,-34","w":79},";":{"d":"25,-34r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34xm25,-132r30,0r0,34r-30,0r0,-34","w":79},"<":{"d":"202,-26r0,25r-188,-84r0,-18r188,-83r0,25r-152,67","w":216},"=":{"d":"14,-120r0,-24r188,0r0,24r-188,0xm14,-43r0,-24r188,0r0,24r-188,0","w":216},">":{"d":"14,-1r0,-25r152,-68r-152,-67r0,-25r188,83r0,18","w":216},"?":{"d":"67,-77r-20,0v-7,-68,43,-83,44,-138v0,-19,-11,-27,-21,-27v-16,0,-24,17,-25,31r-22,-4v3,-27,19,-49,48,-49v24,0,46,17,46,49v-1,65,-57,72,-50,138xm40,-34r30,0r0,34r-30,0r0,-34","w":140},"@":{"d":"126,-73v31,0,55,-48,55,-77v0,-17,-14,-34,-29,-34v-33,0,-57,45,-57,76v0,21,13,35,31,35xm193,-179r8,-22r22,0v-11,40,-27,77,-34,121v0,5,3,9,8,9v26,0,53,-43,53,-81v0,-57,-47,-91,-100,-91v-63,0,-110,51,-110,112v0,107,141,153,200,72r23,0v-23,39,-66,63,-112,63v-76,0,-134,-60,-134,-135v0,-74,60,-133,133,-133v66,0,121,47,121,111v0,62,-49,103,-83,103v-13,0,-22,-9,-25,-23v-26,40,-95,22,-95,-33v0,-66,83,-144,125,-73","w":288},"A":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0"},"B":{"d":"24,0r0,-260r69,0v70,-5,84,105,21,122v31,8,46,34,46,66v0,67,-62,77,-136,72xm52,-125r0,101v46,3,80,-4,80,-48v0,-45,-31,-57,-80,-53xm52,-236r0,88v45,2,74,-7,74,-48v0,-41,-33,-41,-74,-40","w":180},"C":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,58,-26,90,-70,90v-46,0,-75,-36,-75,-134v0,-98,29,-134,75,-134v39,0,62,28,66,83","w":180},"D":{"d":"52,-236r0,212v58,2,80,-9,80,-106v0,-97,-23,-108,-80,-106xm24,0r0,-260v95,-4,136,5,136,130v0,124,-41,135,-136,130","w":180},"E":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260"},"F":{"d":"24,0r0,-260r111,0r0,24r-83,0r0,88r62,0r0,24r-62,0r0,124r-28,0","w":140,"k":{",":40,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":40,"\u2026":40}},"G":{"d":"160,-180r-28,0v-2,-34,-13,-60,-41,-60v-31,0,-46,28,-46,110v0,82,15,110,46,110v41,0,44,-36,41,-78r-36,0r0,-24r64,0r0,122r-18,0r-4,-19v-11,14,-26,23,-47,23v-46,0,-74,-36,-74,-134v0,-98,28,-134,74,-134v48,0,65,42,69,84","w":180},"H":{"d":"24,-260r28,0r0,112r76,0r0,-112r28,0r0,260r-28,0r0,-124r-76,0r0,124r-28,0r0,-260","w":180},"I":{"d":"26,-260r28,0r0,260r-28,0r0,-260","w":79},"J":{"d":"48,-260r28,0r0,195v3,59,-29,75,-78,66r2,-24v27,8,48,0,48,-35r0,-202","w":100},"K":{"d":"20,-260r28,0r1,133r73,-133r30,0r-50,91r59,169r-30,0r-49,-140r-34,60r0,80r-28,0r0,-260"},"L":{"d":"24,-260r28,0r0,236r84,0r0,24r-112,0r0,-260","w":140,"k":{"\u2019":27,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":20,"W":13,"\u0174":13,"Y":27,"\u00dd":27,"\u0176":27,"\u0178":27,"y":13,"\u00fd":13,"\u0177":13,"\u00ff":13}},"M":{"d":"20,-260r45,0r46,197r44,-197r45,0r0,260r-26,0r-1,-238r-54,238r-18,0r-55,-238r0,238r-26,0r0,-260","w":219},"N":{"d":"20,-260r44,0r68,192r0,-192r28,0r0,260r-30,0r-82,-226r0,226r-28,0r0,-260","w":180},"O":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134","w":180},"P":{"d":"20,0r0,-260v70,-5,131,3,130,71v-1,56,-40,79,-102,72r0,117r-28,0xm48,-236r0,95v44,3,74,-3,74,-48v0,-45,-31,-50,-74,-47","k":{",":40,"A":6,"\u00c0":6,"\u00c1":6,"\u00c2":6,"\u00c3":6,"\u00c4":6,"\u0100":6,"\u0102":6,"\u00c5":6,"\u0104":6,"\u00c6":6,".":40,"\u2026":40}},"Q":{"d":"96,-50r0,-23v13,4,22,11,30,21v6,-17,9,-42,9,-78v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v9,0,18,-3,25,-12v-5,-8,-11,-13,-19,-18xm171,-4r0,24v-21,-1,-33,-13,-43,-29v-67,36,-111,-4,-111,-121v0,-97,29,-134,73,-134v44,0,73,37,73,134v0,48,-7,82,-20,103v6,10,15,22,28,23","w":180},"R":{"d":"52,-236r0,90v45,3,83,-7,78,-45v4,-37,-32,-49,-78,-45xm24,0r0,-260v69,-4,135,-1,134,67v0,29,-13,54,-42,64r44,129r-30,0r-41,-123r-37,1r0,122r-28,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"S":{"d":"143,-193r-26,0v7,-53,-76,-64,-76,-13v0,59,104,59,104,143v0,41,-23,67,-66,67v-41,0,-65,-30,-66,-74r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-37,25,-61,62,-61v37,0,63,26,65,71"},"T":{"d":"3,-260r134,0r0,24r-53,0r0,236r-28,0r0,-236r-53,0r0,-24","w":140,"k":{",":27,":":20,";":20,"w":20,"\u0175":20,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"c":20,"\u0107":20,"\u0109":20,"\u010d":20,"\u010b":20,"\u00e7":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":20,"\u0131":20,"\u00ec":20,"\u00ed":20,"\u00ee":20,"\u0129":20,"\u00ef":20,"\u012b":20,"\u012f":20,"\u0133":20,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"r":20,"\u0155":20,"\u0159":20,"\u0157":20,"s":20,"\u015b":20,"\u015d":20,"\u0161":20,"\u015f":20,"\u0219":20,"u":20,"\u00f9":20,"\u00fa":20,"\u00fb":20,"\u0169":20,"\u00fc":20,"\u016b":20,"\u016d":20,"\u016f":20,"\u0171":20,"\u0173":20}},"U":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192","w":180},"V":{"d":"6,-260r28,0r46,206r46,-206r28,0r-61,260r-26,0","k":{",":27,":":13,";":13,"A":6,"\u00c0":6,"\u00c1":6,"\u00c2":6,"\u00c3":6,"\u00c4":6,"\u0100":6,"\u0102":6,"\u00c5":6,"\u0104":6,"\u00c6":6,".":27,"\u2026":27,"a":13,"\u00e0":13,"\u00e1":13,"\u00e2":13,"\u00e3":13,"\u00e4":13,"\u0101":13,"\u0103":13,"\u00e5":13,"\u0105":13,"\u00e6":13,"e":13,"\u00e8":13,"\u00e9":13,"\u00ea":13,"\u011b":13,"\u00eb":13,"\u0113":13,"\u0115":13,"\u0117":13,"\u0119":13,"-":13,"\u00ad":13,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":13,"\u00f2":13,"\u00f3":13,"\u00f4":13,"\u00f5":13,"\u00f6":13,"\u014d":13,"\u014f":13,"\u0151":13,"\u00f8":13,"\u0153":13,"r":6,"\u0155":6,"\u0159":6,"\u0157":6,"u":6,"\u00f9":6,"\u00fa":6,"\u00fb":6,"\u0169":6,"\u00fc":6,"\u016b":6,"\u016d":6,"\u016f":6,"\u0171":6,"\u0173":6}},"W":{"d":"2,-260r26,0r32,203r39,-203r23,0r41,203r29,-203r25,0r-41,260r-24,0r-42,-204r-41,204r-24,0","w":219,"k":{",":13,":":6,";":6,"A":6,"\u00c0":6,"\u00c1":6,"\u00c2":6,"\u00c3":6,"\u00c4":6,"\u0100":6,"\u0102":6,"\u00c5":6,"\u0104":6,"\u00c6":6,".":13,"\u2026":13,"a":6,"\u00e0":6,"\u00e1":6,"\u00e2":6,"\u00e3":6,"\u00e4":6,"\u0101":6,"\u0103":6,"\u00e5":6,"\u0105":6,"\u00e6":6,"e":6,"\u00e8":6,"\u00e9":6,"\u00ea":6,"\u011b":6,"\u00eb":6,"\u0113":6,"\u0115":6,"\u0117":6,"\u0119":6,"o":6,"\u00f2":6,"\u00f3":6,"\u00f4":6,"\u00f5":6,"\u00f6":6,"\u014d":6,"\u014f":6,"\u0151":6,"\u00f8":6,"\u0153":6}},"X":{"d":"7,-260r30,0r40,92r37,-92r30,0r-51,122r62,138r-30,0r-48,-109r-42,109r-30,0r56,-138"},"Y":{"d":"6,-260r30,0r45,114r43,-114r30,0r-60,150r0,110r-28,0r0,-110","k":{"v":6,",":27,":":20,";":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"Z":{"d":"24,-260r120,0r0,20r-96,216r96,0r0,24r-128,0r0,-20r93,-216r-85,0r0,-24"},"[":{"d":"22,36r0,-296r66,0r0,14r-43,0r0,268r43,0r0,14r-66,0","w":100},"\\":{"d":"104,4r-24,0r-84,-268r24,0","w":100},"]":{"d":"78,-260r0,296r-66,0r0,-14r43,0r0,-268r-43,0r0,-14r66,0","w":100},"^":{"d":"22,-106r76,-154r20,0r76,154r-26,0r-60,-123r-60,123r-26,0","w":216},"_":{"d":"180,45r-180,0r0,-18r180,0r0,18","w":180},"`":{"d":"42,-208r-45,-50r28,0r35,50r-18,0","w":79},"a":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10"},"b":{"d":"50,-18r-6,18r-20,0v9,-74,2,-177,4,-260r26,0r0,86v44,-37,89,-14,89,80v0,97,-52,121,-93,76xm54,-153r0,117v33,35,63,21,63,-58v0,-78,-31,-90,-63,-59"},"c":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,37,-21,63,-55,63v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59","w":140},"d":{"d":"112,0v-1,-6,1,-14,-2,-18v-41,45,-93,21,-93,-76v0,-94,44,-117,89,-80r0,-86r26,0r0,210v0,24,1,39,4,50r-24,0xm106,-36r0,-117v-32,-31,-63,-19,-63,59v0,79,30,94,63,58"},"e":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102","w":140},"f":{"d":"6,-166r0,-21r29,0v0,-39,-6,-79,38,-77v7,0,15,2,21,3r0,20v-15,-7,-33,-1,-33,17r0,37r30,0r0,21r-30,0r0,166r-26,0r0,-166r-29,0","w":100},"g":{"d":"121,15v0,-17,-33,-20,-55,-25v-38,12,-32,53,16,52v29,0,39,-12,39,-27xm50,-124v0,36,13,47,28,47v15,0,27,-11,27,-47v0,-36,-12,-47,-27,-47v-15,0,-28,11,-28,47xm147,-191r0,24v-10,-3,-18,0,-24,6v17,51,-4,120,-62,102v-4,1,-13,5,-13,12v0,13,22,14,46,19v27,6,51,14,51,45v0,24,-24,44,-64,44v-69,0,-83,-57,-36,-78v-28,-5,-25,-49,4,-50v-41,-30,-22,-124,32,-124v12,0,28,5,34,17v6,-10,16,-17,32,-17"},"h":{"d":"26,0r0,-260r26,0r0,93v26,-34,82,-35,82,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0"},"i":{"d":"27,0r0,-187r26,0r0,187r-26,0xm27,-230r0,-30r26,0r0,30r-26,0","w":79},"j":{"d":"1,60r0,-22v15,5,28,0,27,-21r0,-204r26,0r0,206v1,37,-20,45,-53,41xm28,-230r0,-30r26,0r0,30r-26,0","w":79},"k":{"d":"24,0r0,-260r26,0r0,164r50,-91r27,0r-35,60r43,127r-26,0r-35,-102r-24,47r0,55r-26,0","w":140},"l":{"d":"27,0r0,-260r26,0r0,260r-26,0","w":79},"m":{"d":"55,0r-26,0r0,-187r24,0r0,20v16,-26,65,-35,77,0v19,-32,81,-35,81,19r0,148r-26,0r0,-144v3,-42,-43,-22,-52,-6r0,150r-26,0r0,-144v2,-40,-44,-24,-52,-6r0,150","w":240},"n":{"d":"26,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0"},"o":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98","w":140},"p":{"d":"50,-187r0,18v40,-45,93,-22,93,75v0,94,-45,119,-89,80r0,75r-26,0r0,-248r22,0xm54,-151r0,116v31,33,63,20,63,-59v0,-78,-31,-93,-63,-57"},"q":{"d":"109,-169v3,-3,0,-13,1,-18r22,0r0,248r-26,0r0,-75v-43,39,-89,14,-89,-80v0,-97,52,-120,92,-75xm106,-35r0,-116v-33,-35,-63,-21,-63,57v0,79,31,92,63,59"},"r":{"d":"24,0r0,-187r26,0r0,22v15,-23,27,-26,48,-26r0,25v-19,0,-34,6,-48,33r0,133r-26,0","w":100,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"s":{"d":"120,-146r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99v0,30,-22,52,-52,52v-34,0,-50,-19,-59,-50r23,-5v3,35,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45","w":140},"t":{"d":"3,-166r0,-21r25,0r0,-63r26,0r0,63r35,0r0,21r-35,0r0,131v-2,18,20,22,35,16r0,19v-29,9,-61,4,-61,-37r0,-129r-25,0","w":100},"u":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0"},"v":{"d":"6,-187r26,0r39,161r36,-161r26,0r-46,187r-34,0","w":140,"k":{",":13,".":13,"\u2026":13}},"w":{"d":"6,-187r25,0r27,137r31,-137r24,0r32,137r24,-137r25,0r-39,187r-22,0r-33,-145r-32,145r-22,0","w":200,"k":{",":13,".":13,"\u2026":13}},"x":{"d":"44,-97r-44,-90r27,0r31,65r27,-65r27,0r-40,90r47,97r-26,0r-34,-73r-32,73r-27,0","w":119},"y":{"d":"1,-187r26,0r36,143r29,-143r27,0r-43,183v-13,46,-28,69,-72,65r0,-21v29,2,40,-12,46,-41","w":119},"z":{"d":"14,-166r0,-21r97,0r0,17r-74,148r74,0r0,22r-103,0r0,-19r72,-147r-66,0","w":119},"{":{"d":"6,-105r0,-14v60,-7,-33,-165,78,-145r0,15v-19,-1,-34,-2,-34,19v0,43,13,115,-27,118v39,3,27,75,27,118v0,21,15,20,34,19r0,15v-33,2,-57,-2,-57,-35r0,-80v0,-23,-6,-30,-21,-30","w":100},"|":{"d":"28,4r0,-268r24,0r0,268r-24,0","w":79},"}":{"d":"94,-119r0,14v-60,6,33,164,-77,145r0,-15v19,1,33,1,33,-19v0,-43,-13,-115,27,-118v-39,-3,-27,-75,-27,-118v0,-20,-14,-20,-33,-19r0,-15v32,-2,56,2,56,35r0,80v0,23,6,30,21,30","w":100},"~":{"d":"69,-118v24,0,57,24,79,25v15,0,24,-13,33,-26r13,18v-9,15,-22,32,-47,32v-24,0,-57,-24,-79,-25v-15,0,-24,13,-33,26r-13,-18v9,-15,22,-32,47,-32","w":216},"\u00a0":{"w":79},"\u00c0":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm82,-274r-45,-49r28,0r35,49r-18,0"},"\u00c1":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm123,-323r-46,49r-18,0r36,-49r28,0"},"\u00c2":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm31,-274r37,-49r24,0r37,49r-24,0r-25,-36r-26,36r-23,0"},"\u00c3":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm103,-279v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v22,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36"},"\u00c4":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm44,-277r0,-37r24,0r0,37r-24,0xm92,-277r0,-37r24,0r0,37r-24,0"},"\u0100":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm128,-287r-96,0r0,-17r96,0r0,17"},"\u0102":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm34,-321r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46"},"\u00c5":{"d":"51,-101r58,0r-29,-139xm60,-260r39,0r58,260r-28,0r-16,-77r-66,0r-16,77r-28,0xm61,-308v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm46,-308v0,-19,15,-34,34,-34v19,0,34,15,34,34v0,19,-15,34,-34,34v-19,0,-34,-15,-34,-34"},"\u0104":{"d":"77,46v0,-27,28,-40,51,-47r-15,-76r-66,0r-16,77r-28,0r57,-260r39,0r58,260v-30,1,-60,19,-60,41v0,32,45,16,59,5r6,11v-24,19,-85,38,-85,-11xm51,-101r58,0r-29,-139"},"\u00c6":{"d":"108,-260r135,0r0,24r-86,0r0,88r67,0r0,24r-67,0r0,100r90,0r0,24r-118,0r0,-77r-66,0r-30,77r-30,0xm72,-101r57,0r-1,-143","w":259},"\u0106":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,58,-26,90,-70,90v-46,0,-75,-36,-75,-134v0,-98,29,-134,75,-134v39,0,62,28,66,83xm134,-323r-46,49r-18,0r35,-49r29,0","w":180},"\u0108":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,58,-26,90,-70,90v-46,0,-75,-36,-75,-134v0,-98,29,-134,75,-134v39,0,62,28,66,83xm41,-274r36,-49r25,0r36,49r-23,0r-25,-36r-26,36r-23,0","w":180},"\u010c":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,58,-26,90,-70,90v-46,0,-75,-36,-75,-134v0,-98,29,-134,75,-134v39,0,62,28,66,83xm78,-274r-37,-49r23,0r26,36r26,-36r23,0r-37,49r-24,0","w":180},"\u010a":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,58,-26,90,-70,90v-46,0,-75,-36,-75,-134v0,-98,29,-134,75,-134v39,0,62,28,66,83xm78,-277r0,-37r24,0r0,37r-24,0","w":180},"\u00c7":{"d":"158,-181r-28,0v-4,-41,-16,-59,-38,-59v-33,0,-47,29,-47,110v0,81,14,110,47,110v26,0,41,-18,42,-66r28,0v-1,55,-23,86,-63,89v-4,7,-10,12,-14,19v17,-8,40,2,40,23v0,33,-46,40,-72,27r5,-16v13,7,48,7,47,-10v2,-14,-23,-19,-34,-11v-11,-9,10,-21,14,-32v-42,-3,-68,-40,-68,-133v0,-98,29,-134,75,-134v39,0,62,28,66,83","w":180},"\u010e":{"d":"52,-236r0,212v58,2,80,-9,80,-106v0,-97,-23,-108,-80,-106xm24,0r0,-260v95,-4,136,5,136,130v0,124,-41,135,-136,130xm68,-274r-37,-49r23,0r26,36r25,-36r24,0r-37,49r-24,0","w":180},"\u0110":{"d":"52,-148r43,0r0,24r-43,0r0,100v58,2,80,-9,80,-106v0,-97,-23,-108,-80,-106r0,88xm4,-148r20,0r0,-112v95,-4,136,5,136,130v0,124,-41,135,-136,130r0,-124r-20,0r0,-24","w":180},"\u00d0":{"d":"52,-148r43,0r0,24r-43,0r0,100v58,2,80,-9,80,-106v0,-97,-23,-108,-80,-106r0,88xm4,-148r20,0r0,-112v95,-4,136,5,136,130v0,124,-41,135,-136,130r0,-124r-20,0r0,-24","w":180},"\u00c8":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm85,-274r-46,-49r28,0r36,49r-18,0"},"\u00c9":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm125,-323r-45,49r-18,0r35,-49r28,0"},"\u00ca":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm33,-274r37,-49r24,0r37,49r-23,0r-26,-36r-25,36r-24,0"},"\u011a":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm70,-274r-36,-49r23,0r25,36r26,-36r23,0r-36,49r-25,0"},"\u00cb":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm46,-277r0,-37r24,0r0,37r-24,0xm94,-277r0,-37r24,0r0,37r-24,0"},"\u0112":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm130,-287r-96,0r0,-17r96,0r0,17"},"\u0114":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm36,-321r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46"},"\u0116":{"d":"24,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24r-123,0r0,-260xm70,-277r0,-37r24,0r0,37r-24,0"},"\u0118":{"d":"65,46v0,-26,26,-39,48,-46r-89,0r0,-260r119,0r0,24r-91,0r0,88r67,0r0,24r-67,0r0,100r95,0r0,24v-32,0,-62,19,-62,41v0,32,45,16,59,5r6,11v-24,19,-85,38,-85,-11"},"\u011c":{"d":"160,-180r-28,0v-2,-34,-13,-60,-41,-60v-31,0,-46,28,-46,110v0,82,15,110,46,110v41,0,44,-36,41,-78r-36,0r0,-24r64,0r0,122r-18,0r-4,-19v-11,14,-26,23,-47,23v-46,0,-74,-36,-74,-134v0,-98,28,-134,74,-134v48,0,65,42,69,84xm41,-274r36,-49r25,0r36,49r-23,0r-25,-36r-26,36r-23,0","w":180},"\u011e":{"d":"160,-180r-28,0v-2,-34,-13,-60,-41,-60v-31,0,-46,28,-46,110v0,82,15,110,46,110v41,0,44,-36,41,-78r-36,0r0,-24r64,0r0,122r-18,0r-4,-19v-11,14,-26,23,-47,23v-46,0,-74,-36,-74,-134v0,-98,28,-134,74,-134v48,0,65,42,69,84xm43,-321r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46","w":180},"\u0120":{"d":"160,-180r-28,0v-2,-34,-13,-60,-41,-60v-31,0,-46,28,-46,110v0,82,15,110,46,110v41,0,44,-36,41,-78r-36,0r0,-24r64,0r0,122r-18,0r-4,-19v-11,14,-26,23,-47,23v-46,0,-74,-36,-74,-134v0,-98,28,-134,74,-134v48,0,65,42,69,84xm78,-277r0,-37r24,0r0,37r-24,0","w":180},"\u0122":{"d":"160,-180r-28,0v-2,-34,-13,-60,-41,-60v-31,0,-46,28,-46,110v0,82,15,110,46,110v41,0,44,-36,41,-78r-36,0r0,-24r64,0r0,122r-18,0r-4,-19v-11,14,-26,23,-47,23v-46,0,-74,-36,-74,-134v0,-98,28,-134,74,-134v48,0,65,42,69,84xm80,17r26,0v3,28,-7,43,-15,61r-10,0r12,-34r-13,0r0,-27","w":180},"\u0124":{"d":"24,-260r28,0r0,112r76,0r0,-112r28,0r0,260r-28,0r0,-124r-76,0r0,124r-28,0r0,-260xm42,-274r37,-49r24,0r37,49r-23,0r-26,-36r-25,36r-24,0","w":180},"\u0126":{"d":"24,-260r28,0r0,59r76,0r0,-59r28,0r0,260r-28,0r0,-109r-76,0r0,109r-28,0r0,-260xm52,-181r0,49r76,0r0,-49r-76,0","w":180},"\u00cc":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm42,-274r-45,-49r28,0r35,49r-18,0","w":79},"\u00cd":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm83,-323r-46,49r-18,0r36,-49r28,0","w":79},"\u00ce":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm-9,-274r37,-49r24,0r37,49r-23,0r-26,-36r-26,36r-23,0","w":79},"\u0128":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm63,-279v-20,-1,-56,-35,-60,2r-13,0v0,-15,10,-35,27,-35v23,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36","w":79},"\u00cf":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm4,-277r0,-37r24,0r0,37r-24,0xm52,-277r0,-37r24,0r0,37r-24,0","w":79},"\u012a":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm88,-287r-96,0r0,-17r96,0r0,17","w":79},"\u0130":{"d":"26,-260r28,0r0,260r-28,0r0,-260xm28,-277r0,-37r24,0r0,37r-24,0","w":79},"\u012e":{"d":"-1,46v-1,-23,18,-38,34,-46r-7,0r0,-260r28,0r0,260v-19,4,-32,18,-36,42v2,27,33,20,49,7r6,11v-22,21,-72,28,-74,-14","w":79},"\u0134":{"d":"48,-260r28,0r0,195v3,59,-29,75,-78,66r2,-24v27,8,48,0,48,-35r0,-202xm13,-274r36,-49r24,0r37,49r-23,0r-26,-36r-25,36r-23,0","w":100},"\u0136":{"d":"20,-260r28,0r1,133r73,-133r30,0r-50,91r59,169r-30,0r-49,-140r-34,60r0,80r-28,0r0,-260xm74,17r26,0v3,28,-7,43,-15,61r-10,0r12,-34r-13,0r0,-27"},"\u0139":{"d":"24,-260r28,0r0,236r84,0r0,24r-112,0r0,-260xm92,-323r-45,49r-18,0r35,-49r28,0","w":140,"k":{"\u2019":27,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":20,"W":13,"\u0174":13,"Y":27,"\u00dd":27,"\u0176":27,"\u0178":27,"y":13,"\u00fd":13,"\u0177":13,"\u00ff":13}},"\u013d":{"d":"24,-260r28,0r0,236r84,0r0,24r-112,0r0,-260xm71,-260r26,0v3,27,-7,41,-15,58r-10,0r12,-32r-13,0r0,-26","w":140},"\u013b":{"d":"24,-260r28,0r0,236r84,0r0,24r-112,0r0,-260xm66,17r27,0v3,29,-8,43,-16,61r-10,0r13,-34r-14,0r0,-27","w":140,"k":{"\u2019":27,"T":20,"\u0164":20,"\u0162":20,"\u021a":20,"V":20,"W":13,"\u0174":13,"Y":27,"\u00dd":27,"\u0176":27,"\u0178":27,"y":13,"\u00fd":13,"\u0177":13,"\u00ff":13}},"\u0141":{"d":"52,-119r0,95r84,0r0,24r-112,0r0,-108r-29,12r0,-22r29,-12r0,-130r28,0r0,119r55,-23r0,23","w":140},"\u013f":{"d":"24,-260r28,0r0,236r84,0r0,24r-112,0r0,-260xm84,-112r0,-36r23,0r0,36r-23,0","w":140},"\u0143":{"d":"20,-260r44,0r68,192r0,-192r28,0r0,260r-30,0r-82,-226r0,226r-28,0r0,-260xm136,-323r-45,49r-18,0r35,-49r28,0","w":180},"\u0147":{"d":"20,-260r44,0r68,192r0,-192r28,0r0,260r-30,0r-82,-226r0,226r-28,0r0,-260xm80,-274r-36,-49r23,0r25,36r26,-36r23,0r-37,49r-24,0","w":180},"\u00d1":{"d":"20,-260r44,0r68,192r0,-192r28,0r0,260r-30,0r-82,-226r0,226r-28,0r0,-260xm113,-279v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v23,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36","w":180},"\u0145":{"d":"20,-260r44,0r68,192r0,-192r28,0r0,260r-30,0r-82,-226r0,226r-28,0r0,-260xm78,17r27,0v3,29,-8,43,-16,61r-10,0r13,-34r-14,0r0,-27","w":180},"\u00d2":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm93,-274r-46,-49r28,0r36,49r-18,0","w":180},"\u00d3":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm133,-323r-46,49r-18,0r36,-49r28,0","w":180},"\u00d4":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm41,-274r37,-49r24,0r37,49r-23,0r-26,-36r-26,36r-23,0","w":180},"\u00d5":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm113,-279v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v23,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36","w":180},"\u00d6":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm54,-277r0,-37r24,0r0,37r-24,0xm102,-277r0,-37r24,0r0,37r-24,0","w":180},"\u014c":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm138,-287r-96,0r0,-17r96,0r0,17","w":180},"\u014e":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm43,-321r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46","w":180},"\u0150":{"d":"135,-130v0,-88,-20,-110,-45,-110v-25,0,-45,22,-45,110v0,88,20,110,45,110v25,0,45,-22,45,-110xm163,-130v0,97,-29,134,-73,134v-44,0,-73,-37,-73,-134v0,-97,29,-134,73,-134v44,0,73,37,73,134xm158,-323r-45,49r-18,0r35,-49r28,0xm115,-323r-44,49r-17,0r32,-49r29,0","w":180},"\u00d8":{"d":"128,-203v-24,53,-43,112,-66,167v8,12,17,16,28,16v25,0,45,-22,45,-110v0,-33,-3,-56,-7,-73xm51,-60v24,-53,43,-111,66,-166v-8,-10,-17,-14,-27,-14v-25,0,-45,22,-45,110v0,31,2,54,6,70xm51,-10r-21,53r-19,0r27,-68v-14,-21,-21,-55,-21,-105v0,-117,44,-157,110,-121r16,-38r19,0r-21,53v14,21,22,55,22,106v0,97,-29,134,-73,134v-15,0,-28,-4,-39,-14","w":180},"\u0152":{"d":"158,-124r0,100r89,0r0,24r-139,0v-66,0,-95,-27,-95,-130v0,-168,102,-124,230,-130r0,24r-85,0r0,88r64,0r0,24r-64,0xm130,-60r0,-139v0,-29,-9,-36,-33,-36v-35,0,-56,21,-56,105v0,84,21,106,56,106v24,0,33,-7,33,-36","w":259},"\u0154":{"d":"52,-236r0,90v45,3,83,-7,78,-45v4,-37,-32,-49,-78,-45xm24,0r0,-260v69,-4,135,-1,134,67v0,29,-13,54,-42,64r44,129r-30,0r-41,-123r-37,1r0,122r-28,0xm126,-323r-46,49r-18,0r36,-49r28,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u0158":{"d":"52,-236r0,90v45,3,83,-7,78,-45v4,-37,-32,-49,-78,-45xm24,0r0,-260v69,-4,135,-1,134,67v0,29,-13,54,-42,64r44,129r-30,0r-41,-123r-37,1r0,122r-28,0xm70,-274r-36,-49r23,0r25,36r26,-36r23,0r-36,49r-25,0","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u0156":{"d":"52,-236r0,90v45,3,83,-7,78,-45v4,-37,-32,-49,-78,-45xm24,0r0,-260v69,-4,135,-1,134,67v0,29,-13,54,-42,64r44,129r-30,0r-41,-123r-37,1r0,122r-28,0xm75,17r27,0v3,29,-8,43,-16,61r-10,0r13,-34r-14,0r0,-27","w":180,"k":{"T":6,"\u0164":6,"\u0162":6,"\u021a":6,"V":6,"Y":6,"\u00dd":6,"\u0176":6,"\u0178":6}},"\u015a":{"d":"143,-193r-26,0v7,-53,-76,-64,-76,-13v0,59,104,59,104,143v0,41,-23,67,-66,67v-41,0,-65,-30,-66,-74r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-37,25,-61,62,-61v37,0,63,26,65,71xm123,-323r-45,49r-18,0r35,-49r28,0"},"\u015c":{"d":"143,-193r-26,0v7,-53,-76,-64,-76,-13v0,59,104,59,104,143v0,41,-23,67,-66,67v-41,0,-65,-30,-66,-74r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-37,25,-61,62,-61v37,0,63,26,65,71xm31,-274r36,-49r24,0r37,49r-23,0r-26,-36r-25,36r-23,0"},"\u0160":{"d":"143,-193r-26,0v7,-53,-76,-64,-76,-13v0,59,104,59,104,143v0,41,-23,67,-66,67v-41,0,-65,-30,-66,-74r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-37,25,-61,62,-61v37,0,63,26,65,71xm68,-274r-37,-49r23,0r26,36r25,-36r24,0r-37,49r-24,0"},"\u015e":{"d":"41,72r5,-16v12,8,48,7,48,-10v0,-14,-23,-19,-35,-11v-11,-9,10,-21,14,-32v-40,-3,-58,-32,-60,-73r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-36,25,-61,62,-61v37,0,62,25,65,71r-26,0v7,-53,-76,-64,-76,-13v0,59,104,60,104,143v1,39,-21,64,-59,66r-13,19v17,-8,40,1,40,23v0,33,-46,40,-72,27"},"\u0218":{"d":"143,-193r-26,0v7,-53,-76,-64,-76,-13v0,59,104,59,104,143v0,41,-23,67,-66,67v-41,0,-65,-30,-66,-74r26,0v1,31,15,50,43,50v23,0,38,-15,38,-43v0,-59,-104,-66,-104,-140v0,-37,25,-61,62,-61v37,0,63,26,65,71xm67,17r27,0v3,29,-8,43,-16,61r-10,0r13,-34r-14,0r0,-27"},"\u0164":{"d":"3,-260r134,0r0,24r-53,0r0,236r-28,0r0,-236r-53,0r0,-24xm58,-274r-37,-49r23,0r26,36r25,-36r23,0r-36,49r-24,0","w":140,"k":{",":27,":":20,";":20,"w":20,"\u0175":20,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"c":20,"\u0107":20,"\u0109":20,"\u010d":20,"\u010b":20,"\u00e7":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":20,"\u0131":20,"\u00ec":20,"\u00ed":20,"\u00ee":20,"\u0129":20,"\u00ef":20,"\u012b":20,"\u012f":20,"\u0133":20,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"r":20,"\u0155":20,"\u0159":20,"\u0157":20,"s":20,"\u015b":20,"\u015d":20,"\u0161":20,"\u015f":20,"\u0219":20,"u":20,"\u00f9":20,"\u00fa":20,"\u00fb":20,"\u0169":20,"\u00fc":20,"\u016b":20,"\u016d":20,"\u016f":20,"\u0171":20,"\u0173":20}},"\u0162":{"d":"3,-260r134,0r0,24r-53,0r0,236r-28,0r0,-236r-53,0r0,-24xm57,17r26,0v3,29,-8,43,-16,61r-10,0r13,-34r-13,0r0,-27","w":140,"k":{",":27,":":20,";":20,"w":20,"\u0175":20,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"c":20,"\u0107":20,"\u0109":20,"\u010d":20,"\u010b":20,"\u00e7":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":20,"\u0131":20,"\u00ec":20,"\u00ed":20,"\u00ee":20,"\u0129":20,"\u00ef":20,"\u012b":20,"\u012f":20,"\u0133":20,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"r":20,"\u0155":20,"\u0159":20,"\u0157":20,"s":20,"\u015b":20,"\u015d":20,"\u0161":20,"\u015f":20,"\u0219":20,"u":20,"\u00f9":20,"\u00fa":20,"\u00fb":20,"\u0169":20,"\u00fc":20,"\u016b":20,"\u016d":20,"\u016f":20,"\u0171":20,"\u0173":20}},"\u021a":{"d":"3,-260r134,0r0,24r-53,0r0,236r-28,0r0,-236r-53,0r0,-24xm57,17r26,0v3,29,-8,43,-16,61r-10,0r13,-34r-13,0r0,-27","w":140,"k":{",":27,":":20,";":20,"w":20,"\u0175":20,"y":20,"\u00fd":20,"\u0177":20,"\u00ff":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"c":20,"\u0107":20,"\u0109":20,"\u010d":20,"\u010b":20,"\u00e7":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":20,"\u0131":20,"\u00ec":20,"\u00ed":20,"\u00ee":20,"\u0129":20,"\u00ef":20,"\u012b":20,"\u012f":20,"\u0133":20,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"r":20,"\u0155":20,"\u0159":20,"\u0157":20,"s":20,"\u015b":20,"\u015d":20,"\u0161":20,"\u015f":20,"\u0219":20,"u":20,"\u00f9":20,"\u00fa":20,"\u00fb":20,"\u0169":20,"\u00fc":20,"\u016b":20,"\u016d":20,"\u016f":20,"\u0171":20,"\u0173":20}},"\u0166":{"d":"13,-162r0,-21r43,0r0,-53r-53,0r0,-24r134,0r0,24r-53,0r0,53r42,0r0,21r-42,0r0,162r-28,0r0,-162r-43,0","w":140},"\u00de":{"d":"20,0r0,-260r28,0r0,58v61,-6,102,16,102,72v0,56,-41,77,-102,71r0,59r-28,0xm48,-178r0,95v43,3,74,-2,74,-47v0,-45,-30,-51,-74,-48"},"\u00d9":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm93,-274r-46,-49r28,0r36,49r-18,0","w":180},"\u00da":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm133,-323r-46,49r-18,0r36,-49r28,0","w":180},"\u00db":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm41,-274r37,-49r24,0r37,49r-23,0r-26,-36r-26,36r-23,0","w":180},"\u0168":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm113,-279v-21,0,-56,-34,-61,2r-13,0v0,-15,11,-35,28,-35v23,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36","w":180},"\u00dc":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm54,-277r0,-37r24,0r0,37r-24,0xm102,-277r0,-37r24,0r0,37r-24,0","w":180},"\u016a":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm138,-287r-96,0r0,-17r96,0r0,17","w":180},"\u016c":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm44,-321r13,0v2,20,14,29,34,29v20,0,28,-11,32,-29r13,0v-3,29,-19,46,-48,46v-27,0,-43,-20,-44,-46","w":180},"\u016e":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm71,-308v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm56,-308v0,-19,15,-34,34,-34v19,0,34,15,34,34v0,19,-15,34,-34,34v-19,0,-34,-15,-34,-34","w":180},"\u0170":{"d":"24,-260r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,42,-19,72,-66,72v-47,0,-66,-30,-66,-72r0,-192xm159,-323r-45,49r-18,0r35,-49r28,0xm116,-323r-44,49r-17,0r32,-49r29,0","w":180},"\u0172":{"d":"87,4v-42,-2,-64,-30,-63,-72r0,-192r28,0r0,191v0,26,7,49,38,49v31,0,38,-23,38,-49r0,-191r28,0r0,192v0,36,-14,61,-45,69v-14,9,-38,22,-38,41v2,31,46,15,59,4r6,11v-24,18,-81,38,-84,-11v-1,-20,16,-34,33,-42","w":180},"\u0174":{"d":"2,-260r26,0r32,203r39,-203r23,0r41,203r29,-203r25,0r-41,260r-24,0r-42,-204r-41,204r-24,0xm62,-274r37,-49r24,0r36,49r-23,0r-25,-36r-26,36r-23,0","w":219,"k":{",":13,":":6,";":6,"A":6,"\u00c0":6,"\u00c1":6,"\u00c2":6,"\u00c3":6,"\u00c4":6,"\u0100":6,"\u0102":6,"\u00c5":6,"\u0104":6,"\u00c6":6,".":13,"\u2026":13,"a":6,"\u00e0":6,"\u00e1":6,"\u00e2":6,"\u00e3":6,"\u00e4":6,"\u0101":6,"\u0103":6,"\u00e5":6,"\u0105":6,"\u00e6":6,"e":6,"\u00e8":6,"\u00e9":6,"\u00ea":6,"\u011b":6,"\u00eb":6,"\u0113":6,"\u0115":6,"\u0117":6,"\u0119":6,"o":6,"\u00f2":6,"\u00f3":6,"\u00f4":6,"\u00f5":6,"\u00f6":6,"\u014d":6,"\u014f":6,"\u0151":6,"\u00f8":6,"\u0153":6}},"\u00dd":{"d":"6,-260r30,0r45,114r43,-114r30,0r-60,150r0,110r-28,0r0,-110xm123,-323r-46,49r-18,0r36,-49r28,0","k":{"v":6,",":27,":":20,";":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0176":{"d":"6,-260r30,0r45,114r43,-114r30,0r-60,150r0,110r-28,0r0,-110xm31,-274r36,-49r25,0r36,49r-23,0r-25,-36r-26,36r-23,0","k":{"v":6,",":27,":":20,";":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0178":{"d":"6,-260r30,0r45,114r43,-114r30,0r-60,150r0,110r-28,0r0,-110xm44,-277r0,-37r24,0r0,37r-24,0xm92,-277r0,-37r24,0r0,37r-24,0","k":{"v":6,",":27,":":20,";":20,"A":13,"\u00c0":13,"\u00c1":13,"\u00c2":13,"\u00c3":13,"\u00c4":13,"\u0100":13,"\u0102":13,"\u00c5":13,"\u0104":13,"\u00c6":13,".":27,"\u2026":27,"a":20,"\u00e0":20,"\u00e1":20,"\u00e2":20,"\u00e3":20,"\u00e4":20,"\u0101":20,"\u0103":20,"\u00e5":20,"\u0105":20,"\u00e6":20,"e":20,"\u00e8":20,"\u00e9":20,"\u00ea":20,"\u011b":20,"\u00eb":20,"\u0113":20,"\u0115":20,"\u0117":20,"\u0119":20,"-":20,"\u00ad":20,"i":6,"\u0131":6,"\u00ec":6,"\u00ed":6,"\u00ee":6,"\u0129":6,"\u00ef":6,"\u012b":6,"\u012f":6,"\u0133":6,"o":20,"\u00f2":20,"\u00f3":20,"\u00f4":20,"\u00f5":20,"\u00f6":20,"\u014d":20,"\u014f":20,"\u0151":20,"\u00f8":20,"\u0153":20,"u":13,"\u00f9":13,"\u00fa":13,"\u00fb":13,"\u0169":13,"\u00fc":13,"\u016b":13,"\u016d":13,"\u016f":13,"\u0171":13,"\u0173":13,"p":13,"q":20}},"\u0179":{"d":"24,-260r120,0r0,20r-96,216r96,0r0,24r-128,0r0,-20r93,-216r-85,0r0,-24xm132,-323r-45,49r-18,0r35,-49r28,0"},"\u017d":{"d":"24,-260r120,0r0,20r-96,216r96,0r0,24r-128,0r0,-20r93,-216r-85,0r0,-24xm68,-274r-37,-49r23,0r26,36r25,-36r24,0r-37,49r-24,0"},"\u017b":{"d":"24,-260r120,0r0,20r-96,216r96,0r0,24r-128,0r0,-20r93,-216r-85,0r0,-24xm74,-277r0,-37r24,0r0,37r-24,0"},"\u00e0":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm82,-208r-45,-50r28,0r35,50r-18,0"},"\u00e1":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm123,-258r-46,50r-18,0r36,-50r28,0"},"\u00e2":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm31,-208r37,-50r24,0r37,50r-24,0r-25,-37r-26,37r-23,0"},"\u00e3":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm103,-214v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v22,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35"},"\u00e4":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm44,-212r0,-36r24,0r0,36r-24,0xm92,-212r0,-36r24,0r0,36r-24,0"},"\u0101":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm126,-221r-95,0r0,-17r95,0r0,17"},"\u0103":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm32,-256r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46"},"\u00e5":{"d":"46,-132r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191r-27,0r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-69,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37xm105,-37r0,-64v-24,7,-62,24,-62,54v0,39,48,33,62,10xm61,-242v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm46,-242v0,-19,15,-34,34,-34v19,0,34,15,34,34v0,19,-15,34,-34,34v-19,0,-34,-15,-34,-34"},"\u0105":{"d":"100,77v-57,0,-27,-71,9,-77r-3,-16v-28,33,-89,22,-89,-29v0,-46,51,-68,88,-77v2,-26,-5,-47,-27,-47v-20,0,-29,20,-32,37r-24,-4v5,-30,23,-55,56,-55v87,-2,37,121,58,191v-25,3,-45,18,-49,42v2,27,35,19,49,7r5,12v-13,10,-24,16,-41,16xm105,-37r0,-64v-24,8,-62,24,-62,54v0,39,47,33,62,10"},"\u00e6":{"d":"93,-37r0,-64v-17,7,-56,24,-56,54v0,37,45,35,56,10xm118,-111r63,0v-1,-40,-8,-58,-31,-58v-17,0,-31,17,-32,58xm207,-89r-89,0v-8,75,54,95,67,36r24,3v-2,50,-77,77,-103,28v-20,22,-37,26,-47,26v-29,0,-48,-19,-48,-49v0,-46,51,-69,82,-77v2,-26,-6,-47,-25,-47v-15,0,-25,20,-28,37r-24,-4v-1,-49,70,-76,93,-32v45,-55,110,-5,98,79","w":219},"\u0107":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,37,-21,63,-55,63v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59xm114,-258r-45,50r-18,0r35,-50r28,0","w":140},"\u0109":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,37,-21,63,-55,63v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59xm21,-208r37,-50r24,0r36,50r-23,0r-25,-37r-26,37r-23,0","w":140},"\u010d":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,37,-21,63,-55,63v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59xm58,-208r-37,-50r23,0r26,37r25,-37r23,0r-36,50r-24,0","w":140},"\u010b":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,37,-21,63,-55,63v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59xm58,-212r0,-36r24,0r0,36r-24,0","w":140},"\u00e7":{"d":"125,-132r-26,0v-3,-28,-13,-37,-29,-37v-22,0,-31,13,-31,75v0,62,9,76,31,76v17,0,26,-9,30,-41r25,0v-4,33,-18,58,-46,62v-4,6,-13,13,-13,19v17,-8,39,2,39,23v0,33,-46,40,-72,27r5,-16v13,7,48,8,48,-10v0,-14,-23,-19,-35,-11v-11,-9,10,-21,14,-31v-36,-2,-52,-33,-52,-98v0,-68,18,-97,57,-97v34,0,50,22,55,59","w":140},"\u010f":{"d":"112,0v-1,-6,1,-14,-2,-18v-41,45,-93,21,-93,-76v0,-94,44,-117,89,-80r0,-86r26,0r0,210v0,24,1,39,4,50r-24,0xm106,-36r0,-117v-32,-31,-63,-19,-63,59v0,79,30,94,63,58xm147,-260r25,0v3,27,-7,41,-15,58r-10,0r12,-32r-12,0r0,-26"},"\u0111":{"d":"112,0v-1,-6,1,-14,-2,-18v-41,45,-93,21,-93,-76v0,-90,45,-114,89,-77r0,-41r-44,0r0,-21r44,0r0,-27r26,0r0,27r18,0r0,21r-18,0r0,162v0,24,1,39,4,50r-24,0xm106,-36r0,-114v-30,-32,-63,-20,-63,56v0,79,30,94,63,58"},"\u00f0":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm48,-252r23,-8v6,6,12,12,17,19r35,-13r9,16r-33,13v21,36,28,81,28,131v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98v0,-76,22,-106,74,-94v-3,-10,-6,-19,-11,-28r-33,12r-9,-16r31,-12v-5,-7,-11,-14,-17,-20","w":140},"\u00e8":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm73,-208r-46,-50r28,0r36,50r-18,0","w":140},"\u00e9":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm113,-258r-45,50r-18,0r35,-50r28,0","w":140},"\u00ea":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm22,-208r36,-50r24,0r37,50r-23,0r-26,-37r-25,37r-23,0","w":140},"\u011b":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm58,-208r-36,-50r23,0r25,37r26,-37r23,0r-37,50r-24,0","w":140},"\u00eb":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm35,-212r0,-36r23,0r0,36r-23,0xm82,-212r0,-36r24,0r0,36r-24,0","w":140},"\u0113":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm118,-221r-96,0r0,-17r96,0r0,17","w":140},"\u0115":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm24,-256r13,0v2,20,15,29,35,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46","w":140},"\u0117":{"d":"39,-111r62,0v-1,-40,-8,-58,-31,-58v-19,0,-31,13,-31,58xm127,-89r-88,0v-1,44,7,71,34,71v20,0,29,-18,32,-35r24,3v-4,28,-25,54,-59,54v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v44,0,59,44,57,102xm58,-212r0,-36r24,0r0,36r-24,0","w":140},"\u0119":{"d":"127,-89r-88,0v-1,44,7,71,34,71v19,0,29,-18,32,-35r24,3v-3,47,-62,50,-70,92v2,27,35,19,49,7r6,12v-22,21,-74,27,-74,-15v0,-19,14,-34,30,-42v-39,0,-57,-30,-57,-98v0,-68,18,-97,57,-97v43,0,59,44,57,102xm39,-111r62,0v-1,-40,-8,-58,-31,-58v-18,0,-31,13,-31,58","w":140},"\u011d":{"d":"121,15v0,-17,-33,-20,-55,-25v-38,12,-32,53,16,52v29,0,39,-12,39,-27xm50,-124v0,36,13,47,28,47v15,0,27,-11,27,-47v0,-36,-12,-47,-27,-47v-15,0,-28,11,-28,47xm147,-191r0,24v-10,-3,-18,0,-24,6v17,51,-4,120,-62,102v-4,1,-13,5,-13,12v0,13,22,14,46,19v27,6,51,14,51,45v0,24,-24,44,-64,44v-69,0,-83,-57,-36,-78v-28,-5,-25,-49,4,-50v-41,-30,-22,-124,32,-124v12,0,28,5,34,17v6,-10,16,-17,32,-17xm31,-208r36,-50r24,0r37,50r-23,0r-26,-37r-25,37r-23,0"},"\u011f":{"d":"121,15v0,-17,-33,-20,-55,-25v-38,12,-32,53,16,52v29,0,39,-12,39,-27xm50,-124v0,36,13,47,28,47v15,0,27,-11,27,-47v0,-36,-12,-47,-27,-47v-15,0,-28,11,-28,47xm147,-191r0,24v-10,-3,-18,0,-24,6v17,51,-4,120,-62,102v-4,1,-13,5,-13,12v0,13,22,14,46,19v27,6,51,14,51,45v0,24,-24,44,-64,44v-69,0,-83,-57,-36,-78v-28,-5,-25,-49,4,-50v-41,-30,-22,-124,32,-124v12,0,28,5,34,17v6,-10,16,-17,32,-17xm33,-256r14,0v2,20,14,29,34,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46"},"\u0121":{"d":"121,15v0,-17,-33,-20,-55,-25v-38,12,-32,53,16,52v29,0,39,-12,39,-27xm50,-124v0,36,13,47,28,47v15,0,27,-11,27,-47v0,-36,-12,-47,-27,-47v-15,0,-28,11,-28,47xm147,-191r0,24v-10,-3,-18,0,-24,6v17,51,-4,120,-62,102v-4,1,-13,5,-13,12v0,13,22,14,46,19v27,6,51,14,51,45v0,24,-24,44,-64,44v-69,0,-83,-57,-36,-78v-28,-5,-25,-49,4,-50v-41,-30,-22,-124,32,-124v12,0,28,5,34,17v6,-10,16,-17,32,-17xm68,-212r0,-36r24,0r0,36r-24,0"},"\u0123":{"d":"121,15v0,-17,-33,-20,-55,-25v-38,12,-32,53,16,52v29,0,39,-12,39,-27xm50,-124v0,36,13,47,28,47v15,0,27,-11,27,-47v0,-36,-12,-47,-27,-47v-15,0,-28,11,-28,47xm147,-191r0,24v-10,-3,-18,0,-24,6v17,51,-4,120,-62,102v-4,1,-13,5,-13,12v0,13,22,14,46,19v27,6,51,14,51,45v0,24,-24,44,-64,44v-69,0,-83,-57,-36,-78v-28,-5,-25,-49,4,-50v-41,-30,-22,-124,32,-124v12,0,28,5,34,17v6,-10,16,-17,32,-17xm91,-208r-23,0v-3,-24,6,-36,13,-50r9,0r-11,27r12,0r0,23"},"\u0125":{"d":"26,0r0,-260r26,0r0,93v26,-34,82,-35,82,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm30,-274r36,-49r25,0r36,49r-23,0r-26,-36r-25,36r-23,0"},"\u0127":{"d":"26,-233r0,-27r26,0r0,27r45,0r0,21r-45,0r0,45v25,-34,82,-36,82,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0r0,-212r-19,0r0,-21r19,0"},"\u0131":{"d":"27,0r0,-187r26,0r0,187r-26,0","w":79},"\u00ec":{"d":"27,0r0,-187r26,0r0,187r-26,0xm42,-208r-45,-50r28,0r35,50r-18,0","w":79},"\u00ed":{"d":"27,0r0,-187r26,0r0,187r-26,0xm83,-258r-46,50r-18,0r36,-50r28,0","w":79},"\u00ee":{"d":"27,0r0,-187r26,0r0,187r-26,0xm-9,-208r37,-50r24,0r37,50r-23,0r-26,-37r-26,37r-23,0","w":79},"\u0129":{"d":"27,0r0,-187r26,0r0,187r-26,0xm63,-214v-20,-1,-56,-35,-60,2r-13,0v0,-15,10,-35,27,-35v0,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35","w":79},"\u00ef":{"d":"27,0r0,-187r26,0r0,187r-26,0xm4,-212r0,-36r24,0r0,36r-24,0xm52,-212r0,-36r24,0r0,36r-24,0","w":79},"\u012b":{"d":"27,0r0,-187r26,0r0,187r-26,0xm88,-221r-96,0r0,-17r96,0r0,17","w":79},"\u012f":{"d":"-1,46v-1,-23,18,-38,34,-46r-6,0r0,-187r26,0r0,187v-18,5,-32,18,-35,42v2,27,33,20,49,7r6,11v-22,21,-72,28,-74,-14xm27,-230r0,-30r26,0r0,30r-26,0","w":79},"\u0237":{"d":"1,60r0,-22v15,5,28,0,27,-21r0,-204r26,0r0,206v1,37,-20,45,-53,41","w":79},"\u0135":{"d":"1,60r0,-22v15,5,28,0,27,-21r0,-204r26,0r0,206v1,37,-20,45,-53,41xm-9,-208r37,-50r24,0r37,50r-23,0r-26,-37r-26,37r-23,0","w":79},"\u0137":{"d":"24,0r0,-260r26,0r0,164r50,-91r27,0r-35,60r43,127r-26,0r-35,-102r-24,47r0,55r-26,0xm63,17r27,0v3,29,-8,43,-16,61r-10,0r13,-34r-14,0r0,-27","w":140},"\u013a":{"d":"27,0r0,-260r26,0r0,260r-26,0xm84,-323r-45,49r-18,0r35,-49r28,0","w":79},"\u013e":{"d":"27,0r0,-260r26,0r0,260r-26,0xm68,-260r25,0v3,27,-7,41,-15,58r-10,0r13,-32r-13,0r0,-26","w":79},"\u013c":{"d":"27,0r0,-260r26,0r0,260r-26,0xm27,17r26,0v3,29,-8,43,-16,61r-10,0r13,-34r-13,0r0,-27","w":79},"\u0142":{"d":"53,-146r0,146r-26,0r0,-133r-28,15r0,-22r28,-14r0,-106r26,0r0,92r28,-14r0,21","w":79},"\u0140":{"d":"27,0r0,-260r26,0r0,260r-26,0xm81,-112r0,-36r23,0r0,36r-23,0","w":116},"\u0144":{"d":"26,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm127,-258r-45,50r-18,0r35,-50r28,0"},"\u0148":{"d":"26,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm68,-208r-36,-50r23,0r26,37r25,-37r23,0r-36,50r-25,0"},"\u00f1":{"d":"26,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm103,-214v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v22,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35"},"\u0146":{"d":"26,0r0,-187r24,0r0,20v28,-33,84,-37,84,25r0,142r-26,0r0,-138v0,-47,-39,-34,-56,-8r0,146r-26,0xm66,17r26,0v3,28,-7,43,-15,61r-10,0r12,-34r-13,0r0,-27"},"\u00f2":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm73,-208r-46,-50r28,0r36,50r-18,0","w":140},"\u00f3":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm113,-258r-45,50r-18,0r35,-50r28,0","w":140},"\u00f4":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm22,-208r36,-50r24,0r37,50r-23,0r-26,-37r-25,37r-23,0","w":140},"\u00f5":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm93,-214v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v0,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35","w":140},"\u00f6":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm35,-212r0,-36r23,0r0,36r-23,0xm82,-212r0,-36r24,0r0,36r-24,0","w":140},"\u014d":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm118,-221r-96,0r0,-17r96,0r0,17","w":140},"\u014f":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm24,-256r13,0v2,20,15,29,35,29v20,0,27,-11,31,-29r14,0v-3,29,-20,46,-49,46v-27,0,-43,-20,-44,-46","w":140},"\u0151":{"d":"39,-94v0,62,9,76,31,76v22,0,31,-14,31,-76v0,-62,-9,-75,-31,-75v-22,0,-31,13,-31,75xm13,-94v0,-68,18,-97,57,-97v39,0,57,29,57,97v0,68,-18,98,-57,98v-39,0,-57,-30,-57,-98xm138,-258r-46,50r-18,0r35,-50r29,0xm94,-258r-44,50r-17,0r33,-50r28,0","w":140},"\u00f8":{"d":"89,-162v-34,-17,-51,-6,-50,68v0,22,1,38,3,49xm132,-227r-22,56v12,15,17,40,17,77v2,81,-30,113,-83,91r-18,46r-18,0r22,-57v-12,-15,-17,-42,-17,-80v-2,-81,31,-112,84,-90r17,-43r18,0xm52,-24v35,16,50,3,49,-70v0,-21,-1,-36,-3,-46","w":140},"\u0153":{"d":"34,-94v0,62,10,76,32,76v22,0,32,-14,32,-76v0,-62,-10,-75,-32,-75v-22,0,-32,13,-32,75xm123,-111r59,0v-1,-40,-9,-58,-32,-58v-15,0,-26,16,-27,58xm208,-89r-85,0v-2,43,13,75,31,71v20,0,28,-18,31,-35r24,3v-2,50,-76,79,-99,24v-8,20,-22,30,-44,30v-39,0,-58,-30,-58,-98v0,-68,19,-97,58,-97v23,0,37,10,45,32v9,-22,23,-32,39,-32v44,-1,60,44,58,102","w":219},"\u0155":{"d":"24,0r0,-187r26,0r0,22v15,-23,27,-26,48,-26r0,25v-19,0,-34,6,-48,33r0,133r-26,0xm109,-258r-45,50r-18,0r35,-50r28,0","w":100,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u0159":{"d":"24,0r0,-187r26,0r0,22v15,-23,27,-26,48,-26r0,25v-19,0,-34,6,-48,33r0,133r-26,0xm48,-208r-36,-50r23,0r25,37r26,-37r23,0r-37,50r-24,0","w":100,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u0157":{"d":"24,0r0,-187r26,0r0,22v15,-23,27,-26,48,-26r0,25v-19,0,-34,6,-48,33r0,133r-26,0xm24,17r26,0v3,28,-7,43,-15,61r-11,0r13,-34r-13,0r0,-27","w":100,"k":{",":20,".":20,"\u2026":20,"-":13,"\u00ad":13}},"\u015b":{"d":"120,-146r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99v0,30,-22,52,-52,52v-34,0,-50,-19,-59,-50r23,-5v3,35,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45xm116,-258r-46,50r-18,0r35,-50r29,0","w":140},"\u015d":{"d":"120,-146r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99v0,30,-22,52,-52,52v-34,0,-50,-19,-59,-50r23,-5v3,35,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45xm22,-208r36,-50r24,0r37,50r-23,0r-26,-37r-25,37r-23,0","w":140},"\u0161":{"d":"120,-146r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99v0,30,-22,52,-52,52v-34,0,-50,-19,-59,-50r23,-5v3,35,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45xm58,-208r-36,-50r23,0r25,37r26,-37r23,0r-37,50r-24,0","w":140},"\u015f":{"d":"125,-48v0,27,-18,50,-48,51r-13,19v17,-8,40,1,40,23v0,33,-46,40,-72,27r5,-16v12,8,48,7,48,-10v0,-14,-23,-19,-35,-11v-11,-9,10,-21,14,-32v-31,-3,-41,-22,-50,-49r23,-5v4,34,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99","w":140},"\u0219":{"d":"120,-146r-21,6v0,-28,-54,-43,-54,-7v0,38,80,41,80,99v0,30,-22,52,-52,52v-34,0,-50,-19,-59,-50r23,-5v3,35,62,47,62,5v0,-43,-80,-44,-80,-99v0,-24,21,-46,49,-46v29,0,46,17,52,45xm56,17r26,0v3,28,-7,43,-15,61r-10,0r12,-34r-13,0r0,-27","w":140},"\u00df":{"d":"26,0r0,-209v0,-28,18,-55,52,-55v60,0,78,97,32,119v17,9,35,24,35,71v-1,70,-29,87,-69,73r0,-22v27,12,43,5,43,-47v0,-46,-10,-62,-39,-62r0,-22v19,-1,30,-11,30,-44v0,-58,-57,-55,-58,-11r0,209r-26,0"},"\u0165":{"d":"3,-166r0,-21r25,0r0,-63r26,0r0,63r35,0r0,21r-35,0r0,131v-2,18,20,22,35,16r0,19v-29,9,-61,4,-61,-37r0,-129r-25,0xm72,-260r25,0v3,27,-7,41,-15,58r-10,0r13,-32r-13,0r0,-26","w":100},"\u0163":{"d":"3,-166r0,-21r25,0r0,-63r26,0r0,63r35,0r0,21r-35,0r0,131v-2,18,20,22,35,16r0,19v-29,9,-61,4,-61,-37r0,-129r-25,0xm42,17r26,0v3,28,-7,43,-15,61r-11,0r13,-34r-13,0r0,-27","w":100},"\u021b":{"d":"3,-166r0,-21r25,0r0,-63r26,0r0,63r35,0r0,21r-35,0r0,131v-2,18,20,22,35,16r0,19v-29,9,-61,4,-61,-37r0,-129r-25,0xm42,17r26,0v3,28,-7,43,-15,61r-11,0r13,-34r-13,0r0,-27","w":100},"\u0167":{"d":"5,-105r0,-22r23,0r0,-39r-25,0r0,-21r25,0r0,-63r26,0r0,63r35,0r0,21r-35,0r0,39r30,0r0,22r-30,0v4,36,-17,103,35,86r0,19v-29,10,-61,3,-61,-37r0,-68r-23,0","w":100},"\u00fe":{"d":"53,-260r0,86v42,-37,90,-14,90,80v0,94,-45,119,-89,80r0,75r-26,0r0,-321r25,0xm54,-151r0,116v31,33,63,20,63,-59v0,-78,-31,-93,-63,-57"},"\u00f9":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm82,-208r-45,-50r28,0r35,50r-18,0"},"\u00fa":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm123,-258r-46,50r-18,0r36,-50r28,0"},"\u00fb":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm31,-208r37,-50r24,0r37,50r-24,0r-25,-37r-26,37r-23,0"},"\u0169":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm104,-214v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v0,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35"},"\u00fc":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm44,-212r0,-36r24,0r0,36r-24,0xm92,-212r0,-36r24,0r0,36r-24,0"},"\u016b":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm129,-221r-96,0r0,-17r96,0r0,17"},"\u016d":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm35,-256r13,0v2,20,14,29,34,29v20,0,28,-11,32,-29r13,0v-3,29,-19,46,-48,46v-27,0,-43,-20,-44,-46"},"\u016f":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm62,-242v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm47,-242v0,-19,15,-34,34,-34v19,0,35,15,35,34v0,19,-16,34,-35,34v-19,0,-34,-15,-34,-34"},"\u0171":{"d":"134,-187r0,187r-25,0r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0xm149,-258r-46,50r-18,0r36,-50r28,0xm105,-258r-43,50r-18,0r33,-50r28,0"},"\u0173":{"d":"100,77v-57,0,-27,-71,9,-77r0,-21v-27,34,-83,38,-83,-24r0,-142r26,0r0,138v0,47,39,33,56,8r0,-146r26,0r0,187v-23,4,-47,18,-47,42v0,27,35,19,49,7r5,12v-13,10,-24,16,-41,16"},"\u0175":{"d":"6,-187r25,0r27,137r31,-137r24,0r32,137r24,-137r25,0r-39,187r-22,0r-33,-145r-32,145r-22,0xm52,-208r36,-50r25,0r36,50r-23,0r-26,-37r-25,37r-23,0","w":200,"k":{",":13,".":13,"\u2026":13}},"\u00fd":{"d":"1,-187r26,0r36,143r29,-143r27,0r-43,183v-13,46,-28,69,-72,65r0,-21v29,2,40,-12,46,-41xm103,-258r-45,50r-18,0r35,-50r28,0","w":119},"\u0177":{"d":"1,-187r26,0r36,143r29,-143r27,0r-43,183v-13,46,-28,69,-72,65r0,-21v29,2,40,-12,46,-41xm13,-208r36,-50r24,0r37,50r-23,0r-26,-37r-25,37r-23,0","w":119},"\u00ff":{"d":"1,-187r26,0r36,143r29,-143r27,0r-43,183v-13,46,-28,69,-72,65r0,-21v29,2,40,-12,46,-41xm24,-212r0,-36r24,0r0,36r-24,0xm72,-212r0,-36r24,0r0,36r-24,0","w":119},"\u017a":{"d":"14,-166r0,-21r97,0r0,17r-74,148r74,0r0,22r-103,0r0,-19r72,-147r-66,0xm111,-258r-46,50r-18,0r35,-50r29,0","w":119},"\u017e":{"d":"14,-166r0,-21r97,0r0,17r-74,148r74,0r0,22r-103,0r0,-19r72,-147r-66,0xm48,-208r-36,-50r23,0r25,37r26,-37r23,0r-37,50r-24,0","w":119},"\u017c":{"d":"14,-166r0,-21r97,0r0,17r-74,148r74,0r0,22r-103,0r0,-19r72,-147r-66,0xm53,-212r0,-36r23,0r0,36r-23,0","w":119},"\ue300":{"d":"42,-274r-45,-49r28,0r35,49r-18,0","w":79},"\u00b4":{"d":"83,-258r-46,50r-18,0r36,-50r28,0","w":79},"\ue301":{"d":"83,-323r-46,49r-18,0r36,-49r28,0","w":79},"\u02c6":{"d":"-9,-208r37,-50r24,0r37,50r-23,0r-26,-37r-26,37r-23,0","w":79},"\ue302":{"d":"-9,-274r37,-49r24,0r37,49r-23,0r-26,-36r-26,36r-23,0","w":79},"\u02c7":{"d":"28,-208r-37,-50r23,0r26,37r26,-37r23,0r-37,50r-24,0","w":79},"\ue303":{"d":"28,-274r-37,-49r23,0r26,36r26,-36r23,0r-37,49r-24,0","w":79},"\ue30b":{"d":"29,-260r25,0v3,27,-7,41,-15,58r-9,0r12,-32r-13,0r0,-26","w":79},"\u02dc":{"d":"63,-214v-21,0,-57,-34,-61,2r-13,0v0,-15,11,-35,28,-35v22,0,57,35,61,-2r13,0v-1,18,-8,35,-28,35","w":79},"\ue304":{"d":"63,-279v-21,0,-56,-34,-61,2r-13,0v0,-15,11,-35,28,-35v22,-1,57,34,61,-3r13,0v-1,18,-8,36,-28,36","w":79},"\u00a8":{"d":"4,-212r0,-36r24,0r0,36r-24,0xm52,-212r0,-36r24,0r0,36r-24,0","w":79},"\ue305":{"d":"52,-277r0,-37r24,0r0,37r-24,0xm4,-277r0,-37r24,0r0,37r-24,0","w":79},"\u00af":{"d":"88,-221r-96,0r0,-17r96,0r0,17","w":79},"\ue306":{"d":"88,-287r-96,0r0,-17r96,0r0,17","w":79},"\u02c9":{"d":"88,-221r-96,0r0,-17r96,0r0,17","w":79},"\u02d8":{"d":"-6,-256r13,0v2,20,14,29,34,29v20,0,28,-11,32,-29r13,0v-3,29,-19,46,-48,46v-27,0,-43,-20,-44,-46","w":79},"\ue307":{"d":"-6,-321r13,0v2,20,14,29,34,29v20,0,28,-11,32,-29r13,0v-3,29,-19,46,-48,46v-27,0,-43,-20,-44,-46","w":79},"\u02da":{"d":"21,-242v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm6,-242v0,-19,15,-34,34,-34v19,0,34,15,34,34v0,19,-15,34,-34,34v-19,0,-34,-15,-34,-34","w":79},"\ue308":{"d":"21,-308v0,10,9,19,19,19v10,0,19,-9,19,-19v0,-10,-9,-19,-19,-19v-10,0,-19,9,-19,19xm6,-308v0,-19,15,-34,34,-34v19,0,34,15,34,34v0,19,-15,34,-34,34v-19,0,-34,-15,-34,-34","w":79},"\u02dd":{"d":"103,-258r-45,50r-18,0r35,-50r28,0xm60,-258r-44,50r-17,0r32,-50r29,0","w":79},"\ue309":{"d":"103,-323r-45,49r-18,0r35,-49r28,0xm60,-323r-44,49r-17,0r32,-49r29,0","w":79},"\u02d9":{"d":"28,-212r0,-36r24,0r0,36r-24,0","w":79},"\ue30a":{"d":"28,-277r0,-37r24,0r0,37r-24,0","w":79},"\u00b8":{"d":"3,72r5,-16v13,7,48,7,47,-10v2,-14,-23,-19,-34,-11r-5,-5v11,-10,11,-33,35,-30v-5,8,-12,14,-16,22v17,-8,40,2,40,23v0,33,-46,40,-72,27","w":79},"\u02db":{"d":"72,-6r0,3v-19,7,-57,20,-57,44v0,32,46,16,60,5r6,11v-24,19,-85,38,-85,-11v0,-37,49,-46,76,-52","w":79},"\ue30c":{"d":"27,17r26,0v3,29,-8,43,-16,61r-10,0r13,-34r-13,0r0,-27","w":79},"\ue30d":{"d":"52,-208r-23,0v-3,-24,6,-36,13,-50r9,0r-11,27r12,0r0,23","w":79},"\u2026":{"d":"45,-34r30,0r0,34r-30,0r0,-34xm165,-34r30,0r0,34r-30,0r0,-34xm285,-34r30,0r0,34r-30,0r0,-34","w":360},"\u00ad":{"d":"104,-82r-89,0r0,-23r89,0r0,23","w":119},"\u00a1":{"d":"69,-110r6,183r-30,0r6,-183r18,0xm75,-153r-30,0r0,-34r30,0r0,34","w":119},"\u00bf":{"d":"73,-110r20,0v7,68,-43,83,-44,138v0,19,11,27,21,27v16,0,24,-17,25,-31r22,4v-3,27,-19,48,-48,48v-24,0,-46,-16,-46,-48v1,-65,57,-72,50,-138xm100,-153r-30,0r0,-34r30,0r0,34","w":140},"\u2018":{"d":"56,-176r-30,0v-4,-41,12,-62,22,-88r10,0r-16,54r14,0r0,34","w":79,"k":{"\u2018":20}},"\u2019":{"d":"24,-260r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34","w":79},"\u201c":{"d":"116,-176r-30,0v-4,-41,12,-62,22,-88r10,0r-16,54r14,0r0,34xm56,-176r-30,0v-4,-41,12,-62,22,-88r10,0r-16,54r14,0r0,34","w":140},"\u201d":{"d":"24,-260r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34xm84,-260r30,0v4,40,-11,62,-21,88r-11,0r16,-54r-14,0r0,-34","w":140},"\u201a":{"d":"24,-34r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34","w":79},"\u201e":{"d":"24,-34r30,0v4,41,-12,62,-22,88r-10,0r16,-54r-14,0r0,-34xm84,-34r30,0v4,40,-11,62,-21,88r-11,0r16,-54r-14,0r0,-34","w":140},"\u2039":{"d":"95,-38r-24,0r-45,-56r45,-55r24,0r-46,55","w":119},"\u203a":{"d":"49,-38r-24,0r46,-56r-46,-55r24,0r45,55","w":119},"\u00ab":{"d":"99,-38r-25,0r-44,-56r44,-55r25,0r-46,55xm150,-38r-24,0r-45,-56r45,-55r24,0r-46,55","w":180},"\u00bb":{"d":"81,-149r25,0r44,55r-44,56r-25,0r46,-56xm30,-149r24,0r45,55r-45,56r-24,0r46,-56","w":180},"\u2013":{"d":"180,-85r-180,0r0,-17r180,0r0,17","w":180},"\u2014":{"d":"360,-85r-360,0r0,-17r360,0r0,17","w":360},"\u2022":{"d":"25,-130v0,-36,29,-65,65,-65v36,0,65,29,65,65v0,36,-29,65,-65,65v-36,0,-65,-29,-65,-65","w":180},"\u00b7":{"d":"22,-94v0,-10,8,-17,18,-17v10,0,18,7,18,17v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18","w":79},"\u2219":{"d":"22,-94v0,-10,8,-17,18,-17v10,0,18,7,18,17v0,10,-8,18,-18,18v-10,0,-18,-8,-18,-18","w":79},"\u2020":{"d":"27,-171r0,-28r57,9v-1,-29,-6,-58,-8,-74r28,0v-2,16,-7,45,-8,74r57,-9r0,28r-57,-8v1,22,5,45,8,62v-6,29,-7,94,-10,147r-8,0v-3,-53,-4,-118,-10,-147v3,-17,7,-40,8,-62","w":180},"\u2021":{"d":"153,-199r0,28r-57,-8v1,22,5,45,8,62v-3,17,-7,41,-8,63r57,-9r0,28r-57,-8v1,29,6,57,8,73r-28,0v2,-16,7,-44,8,-73r-57,8r0,-28r57,9v-1,-22,-5,-46,-8,-63v3,-17,7,-40,8,-62r-57,8r0,-28r57,9v-1,-29,-6,-58,-8,-74r28,0v-2,16,-7,45,-8,74","w":180},"\u00a7":{"d":"141,-235r-17,14v-8,-21,-57,-36,-57,-2v0,32,90,77,90,125v0,24,-17,39,-40,39v32,26,26,90,-24,89v-25,0,-43,-11,-58,-30r18,-14v10,24,61,39,61,2v0,-37,-91,-80,-91,-132v0,-22,21,-36,42,-36v-31,-24,-32,-83,22,-84v22,0,40,13,54,29xm47,-143v0,16,46,69,67,69v11,0,19,-11,19,-21v0,-20,-46,-70,-65,-70v-14,0,-21,9,-21,22","w":180},"\u00b6":{"d":"77,30r0,-152v-44,0,-73,-29,-73,-68v2,-89,95,-68,177,-70r0,20r-25,0r0,270r-24,0r0,-270r-31,0r0,270r-24,0","w":180},"\u00a6":{"d":"28,4r0,-103r24,0r0,103r-24,0xm28,-161r0,-103r24,0r0,103r-24,0","w":79},"\u00a9":{"d":"144,4v-73,0,-135,-58,-135,-134v0,-76,62,-134,135,-134v73,0,135,58,135,134v0,76,-62,134,-135,134xm144,-18v61,0,109,-48,109,-112v0,-63,-48,-112,-109,-112v-62,0,-109,49,-109,112v0,64,47,112,109,112xm192,-104r23,0v-18,95,-153,59,-146,-26v-11,-88,133,-117,146,-28r-23,0v-19,-60,-97,-31,-97,27v0,33,21,62,54,62v24,0,40,-14,43,-35","w":288},"\u00ae":{"d":"117,-120r0,69r-24,0r0,-156v51,0,114,-8,114,44v0,28,-19,40,-38,43r42,69r-28,0r-42,-69r-24,0xm117,-187r0,47v29,-1,70,6,66,-24v4,-27,-38,-23,-66,-23xm144,4v-73,0,-135,-58,-135,-134v0,-76,62,-134,135,-134v73,0,135,58,135,134v0,76,-62,134,-135,134xm144,-18v61,0,109,-48,109,-112v0,-63,-48,-112,-109,-112v-62,0,-109,49,-109,112v0,64,47,112,109,112","w":288},"\u2122":{"d":"134,-260r0,20r-48,0r0,132r-24,0r0,-132r-48,0r0,-20r120,0xm183,-236v-4,39,0,86,-1,128r-24,0r0,-152r38,0r46,116r44,-116r38,0r0,152r-23,0r-1,-128r-51,128r-16,0","w":356},"\u00a4":{"d":"158,-67r-15,16r-17,-17v-25,22,-67,22,-92,0r-17,17r-15,-16r17,-17v-21,-21,-21,-71,0,-92r-17,-17r15,-15r17,16v25,-22,67,-22,92,0r17,-16r15,15r-17,17v21,21,21,71,0,92xm28,-130v0,32,21,55,52,55v31,0,52,-23,52,-55v0,-32,-21,-55,-52,-55v-31,0,-52,23,-52,55"},"\u20ac":{"d":"158,-236r-7,28v-14,-18,-27,-32,-49,-32v-35,0,-44,37,-46,76r84,0r-5,22r-80,0r0,33r71,0r-5,22r-64,0v3,37,12,67,48,67v18,0,35,-9,46,-21r0,27v-13,12,-30,18,-47,18v-52,0,-71,-39,-76,-91r-23,0r6,-22r16,0r0,-33r-22,0r6,-22r17,0v4,-53,20,-100,75,-100v22,0,41,10,55,28"},"\u00a2":{"d":"56,-35r31,-137v-32,-4,-37,8,-39,75v0,33,2,52,8,62xm102,-161r-31,138v24,4,33,-4,38,-40r26,0v-4,41,-28,70,-69,61r-10,43r-17,0r11,-49v-19,-13,-28,-41,-28,-89v1,-74,19,-102,70,-96r9,-41r17,0r-10,47v15,10,23,28,26,52r-25,0v-1,-11,-3,-20,-7,-26"},"\u00a3":{"d":"12,4r0,-25v34,-17,32,-58,28,-98r-28,0r0,-21r23,0v-4,-18,-10,-38,-10,-58v0,-46,24,-66,52,-66v46,0,59,37,61,75r-24,0v-4,-30,-11,-53,-34,-53v-41,0,-28,72,-19,102r38,0r0,21r-33,0v3,28,3,53,-6,77v22,27,63,38,62,-26r23,0v8,85,-64,88,-95,44v-9,13,-22,25,-38,28"},"\u0192":{"d":"12,60r0,-24v4,2,9,4,15,4v19,0,29,-6,43,-179r-32,0r0,-22r33,0v6,-90,26,-109,78,-101r0,23v-40,-7,-42,-6,-52,78r31,0r0,22r-32,0v-14,179,-29,200,-71,200v-4,0,-9,0,-13,-1"},"\u00a5":{"d":"151,-107r0,21r-58,0r0,86r-26,0r0,-86r-57,0r0,-21r57,0v-2,-13,-8,-22,-12,-33r-45,0r0,-22r36,0r-39,-98r26,0r48,120r46,-120r26,0r-39,98r37,0r0,22r-46,0v-4,11,-10,20,-12,33r58,0"},"\u00aa":{"d":"27,-229r-16,-2v3,-18,13,-33,35,-33v55,-2,26,71,38,115v-9,0,-21,2,-21,-7v-18,18,-56,9,-56,-21v0,-28,33,-42,55,-47v1,-14,-2,-25,-15,-24v-13,0,-18,9,-20,19xm62,-174r0,-33v-13,4,-35,15,-35,30v0,22,30,14,35,3","w":95},"\u00ba":{"d":"59,-205v0,-33,-5,-42,-18,-42v-12,0,-16,9,-16,42v0,33,4,42,16,42v13,0,18,-9,18,-42xm5,-205v0,-41,10,-59,36,-59v26,0,38,18,38,59v0,41,-12,58,-38,58v-26,0,-36,-17,-36,-58","w":83},"\u00b9":{"d":"19,-105r0,-17r17,0r0,-118r-17,1r0,-13v12,-1,20,-15,39,-12r0,142r19,0r0,17r-58,0","w":95},"\u00b2":{"d":"88,-105r-80,0v-1,-59,61,-84,58,-120v0,-13,-6,-20,-16,-20v-12,0,-21,6,-23,27r-18,0v-1,-63,77,-59,78,-7v0,40,-41,65,-57,101r58,0r0,19","w":95},"\u00b3":{"d":"30,-229r-19,0v0,-20,11,-35,34,-35v37,0,54,64,15,75v43,12,27,86,-14,86v-25,0,-40,-17,-40,-40r20,0v1,12,5,21,20,21v11,0,19,-8,19,-27v0,-22,-12,-30,-35,-30r0,-18v22,0,32,-5,32,-28v0,-12,-4,-20,-16,-20v-12,0,-16,6,-16,16","w":95},"\u2044":{"d":"-38,4r-22,0r158,-268r22,0","w":60},"\u2215":{"d":"-38,4r-22,0r158,-268r22,0","w":60},"\u00bc":{"d":"188,-128v-12,23,-19,51,-30,75r30,0r0,-75xm181,-156r27,0r0,103r18,0r0,18r-18,0r0,35r-20,0r0,-35r-50,0r0,-16xm55,4r-22,0r158,-268r22,0xm25,-105r0,-17r17,0r0,-118r-18,1r0,-13v12,-1,21,-15,40,-12r0,142r19,0r0,17r-58,0","w":239},"\u00bd":{"d":"54,4r-23,0r158,-268r23,0xm25,-105r0,-17r17,0r0,-118r-18,1r0,-13v12,-1,21,-15,40,-12r0,142r19,0r0,17r-58,0xm230,0r-80,0v-1,-59,61,-84,58,-120v0,-13,-6,-20,-16,-20v-12,0,-20,6,-22,27r-18,0v-1,-62,77,-58,78,-7v0,40,-42,65,-58,101r58,0r0,19","w":239},"\u00be":{"d":"188,-128v-12,23,-19,51,-30,75r30,0r0,-75xm181,-156r27,0r0,103r18,0r0,18r-18,0r0,35r-20,0r0,-35r-50,0r0,-16xm54,4r-23,0r158,-268r23,0xm37,-229r-19,0v0,-20,11,-35,34,-35v37,0,54,63,16,75v42,12,25,86,-15,86v-25,0,-39,-17,-39,-40r19,0v1,12,5,21,20,21v11,0,19,-8,19,-27v0,-22,-12,-30,-35,-30r0,-18v22,0,32,-5,32,-28v0,-12,-4,-20,-16,-20v-12,0,-16,6,-16,16","w":239},"\u2030":{"d":"7,-207v0,-28,25,-53,53,-53v28,0,54,25,54,53v0,28,-26,54,-54,54v-28,0,-53,-26,-53,-54xm27,-207v0,17,14,33,33,33v19,0,34,-16,34,-33v0,-17,-15,-33,-34,-33v-19,0,-33,16,-33,33xm118,-53v0,-28,25,-54,53,-54v28,0,54,26,54,54v0,28,-26,53,-54,53v-28,0,-53,-25,-53,-53xm138,-53v0,17,14,33,33,33v19,0,33,-16,33,-33v0,-17,-14,-33,-33,-33v-19,0,-33,16,-33,33xm246,-53v0,-28,26,-54,54,-54v28,0,53,26,53,54v0,28,-25,53,-53,53v-28,0,-54,-25,-54,-53xm266,-53v0,17,15,33,34,33v19,0,33,-16,33,-33v0,-17,-14,-33,-33,-33v-19,0,-34,16,-34,33xm180,-264r21,0r-149,268r-21,0","w":360},"\u2212":{"d":"14,-82r0,-23r188,0r0,23r-188,0","w":216},"\u00b1":{"d":"96,-126r0,-61r24,0r0,61r82,0r0,24r-82,0r0,61r-24,0r0,-61r-82,0r0,-24r82,0xm14,0r0,-24r188,0r0,24r-188,0","w":216},"\u00d7":{"d":"202,-170r-77,76r77,77r-18,17r-76,-77r-76,77r-18,-17r77,-77r-77,-76r18,-17r76,76r76,-76","w":216},"\u00f7":{"d":"202,-82r-188,0r0,-23r188,0r0,23xm84,-167v0,-13,11,-24,24,-24v13,0,24,11,24,24v0,13,-11,24,-24,24v-13,0,-24,-11,-24,-24xm84,-20v0,-13,11,-24,24,-24v13,0,24,11,24,24v0,13,-11,24,-24,24v-13,0,-24,-11,-24,-24","w":216},"\u2260":{"d":"197,-45r-103,0r-27,51r-16,-9r24,-42r-57,0r0,-17r66,0r25,-49r-91,0r0,-17r101,0r28,-52r15,8r-24,44r59,0r0,17r-68,0r-26,49r94,0r0,17","w":216},"\u2248":{"d":"189,-140r13,0v-3,24,-16,46,-43,46v0,0,-116,-61,-131,3r-14,0v4,-24,15,-47,43,-47v45,-1,117,61,132,-2xm189,-82r13,0v-3,24,-16,46,-43,46v0,0,-116,-61,-131,3r-14,0v4,-24,15,-47,43,-47v45,-1,117,61,132,-2","w":216},"\u2264":{"d":"197,-24r-179,-70r0,-19r179,-70r0,20r-155,60r155,59r0,20xm197,9r-179,0r0,-17r179,0r0,17","w":216},"\u2265":{"d":"197,-94r-179,70r0,-20r155,-59r-155,-60r0,-20r179,70r0,19xm197,9r-179,0r0,-17r179,0r0,17","w":216},"\u00ac":{"d":"178,-43r0,-77r-164,0r0,-24r188,0r0,101r-24,0","w":216},"\u2206":{"d":"206,-19r-86,-219r-87,219r173,0xm235,0r-229,0r102,-256r23,0","w":240},"\u0394":{"d":"206,-19r-86,-219r-87,219r173,0xm235,0r-229,0r102,-256r23,0","w":240},"\u2126":{"d":"245,0r-88,0r0,-64v46,-8,68,-41,68,-86v0,-54,-41,-92,-94,-92v-52,0,-95,38,-95,91v0,43,24,81,69,87r0,64r-88,0r0,-17r72,0r0,-33v-46,-12,-72,-54,-72,-100v0,-63,52,-110,114,-110v61,0,114,46,114,109v0,47,-26,89,-72,101r0,33r72,0r0,17","w":266},"\u03a9":{"d":"245,0r-88,0r0,-64v46,-8,68,-41,68,-86v0,-54,-41,-92,-94,-92v-52,0,-95,38,-95,91v0,43,24,81,69,87r0,64r-88,0r0,-17r72,0r0,-33v-46,-12,-72,-54,-72,-100v0,-63,52,-110,114,-110v61,0,114,46,114,109v0,47,-26,89,-72,101r0,33r72,0r0,17","w":266},"\u00b5":{"d":"134,-187r0,187r-25,0r0,-21v-17,17,-34,31,-57,22r0,60r-26,0r0,-248r26,0r0,138v0,47,39,33,56,8r0,-146r26,0"},"\u03bc":{"d":"134,-187r0,187r-25,0r0,-21v-18,17,-34,31,-57,22r0,60r-26,0r0,-248r26,0r0,138v0,47,39,33,56,8r0,-146r26,0"},"\u03c0":{"d":"192,-19r0,15v-8,4,-13,6,-21,6v-27,0,-27,-20,-27,-41r0,-115r-99,0r0,154r-19,0r0,-154r-25,0r0,-17r189,0r0,17r-27,0r0,119v-4,18,15,25,29,16","w":200},"\u00b0":{"d":"107,-210v0,-20,-15,-37,-35,-37v-20,0,-35,17,-35,37v0,20,15,36,35,36v20,0,35,-16,35,-36xm19,-210v0,-29,23,-54,53,-54v30,0,53,25,53,54v0,29,-23,53,-53,53v-30,0,-53,-24,-53,-53","w":144},"\u2113":{"d":"138,-23v4,2,5,6,8,9v-27,30,-86,27,-86,-26r0,-46v-8,7,-13,17,-22,23r-7,-10r29,-30v0,-60,-10,-159,43,-157v21,0,35,17,35,45v0,35,-21,73,-60,115v-1,36,-6,91,29,91v10,0,21,-4,31,-14xm123,-213v0,-20,-10,-33,-21,-33v-34,0,-22,88,-24,129v28,-33,45,-67,45,-96","w":180},"\u212e":{"d":"202,-93r-145,0r0,65v37,35,97,26,121,-22r13,8v-42,87,-175,47,-175,-51v0,-56,36,-100,93,-100v55,0,93,42,93,100xm57,-106r104,0r0,-52v-28,-28,-77,-30,-104,0r0,52","w":216},"\u221e":{"d":"246,-90v0,29,-18,50,-48,50v-27,0,-49,-19,-68,-37v-20,17,-40,37,-68,37v-29,0,-48,-21,-48,-49v0,-27,20,-50,48,-50v28,0,49,23,68,40v20,-17,38,-41,67,-41v29,0,49,22,49,50xm228,-89v-3,-55,-67,-27,-86,0v19,25,82,54,86,0xm118,-89v-20,-25,-82,-55,-86,0v4,53,68,27,86,0","w":259},"\u2202":{"d":"73,-260v64,2,85,75,85,129v0,51,-10,135,-78,135v-44,0,-70,-39,-70,-80v0,-41,24,-76,68,-76v24,0,48,14,62,33v2,-55,-8,-123,-67,-123v-17,0,-26,6,-39,16r-11,-13v14,-13,31,-21,50,-21xm138,-99v-12,-18,-35,-36,-58,-36v-33,0,-52,29,-52,59v0,30,19,64,52,64v43,0,55,-54,58,-87","w":172},"\u222b":{"d":"120,-283v18,-5,33,27,10,27v-14,0,-11,-14,-17,-14v-18,0,-14,63,-14,73r0,180v0,30,2,94,-42,94v-18,4,-29,-26,-8,-28v11,-1,9,10,16,15v15,0,15,-64,15,-68r0,-178v0,-31,-9,-101,40,-101","w":193},"\u221a":{"d":"176,-283r-75,360r-20,0r-60,-125r-17,8r-7,-14r32,-15r60,124r70,-338r17,0","w":173},"\u2211":{"d":"204,77r-195,0r0,-17r121,-164r-116,-162r0,-17r186,0r0,19r-161,0r114,160r-121,163r172,0r0,18","w":213},"\u220f":{"d":"227,77r-19,0r0,-341r-162,0r0,341r-20,0r0,-360r201,0r0,360","w":253},"\u25ca":{"d":"177,-128r-61,141r-19,0r-60,-141r60,-141r19,0xm158,-128r-51,-121r-51,121r51,120","w":213},"\uf8ff":{"d":"100,-42r-20,0r0,-24r20,0r0,24xm138,-172v0,33,-49,43,-40,88v-7,-1,-19,3,-18,-6v-7,-41,40,-55,40,-81v0,-17,-13,-30,-28,-30v-15,0,-26,10,-29,34r-18,-3v0,-66,93,-63,93,-2xm18,-18r148,0r0,-222r-148,0r0,222xm0,-258r184,0r0,258r-184,0r0,-258","w":184}}});