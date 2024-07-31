! function() {
    "use strict";
    if (window.SR7 ? ? = {}, window._tpt ? ? = {}, SR7.F ? ? = {}, SR7.D ? ? = {}, SR7.E ? ? = {}, SR7.LIB ? ? = {}, void 0 !== SR7.migrate) return;
    SR7.migrate ? ? = {}, SR7.migrate.stgTrans = {
        random: "random",
        edge: "edges",
        edges: "edges",
        edgetomiddle: "edges",
        forward: "start",
        start: "start",
        end: "end",
        backward: "end",
        center: "center",
        middletoedge: "center"
    }, SR7.migrate.actrans = {
        action: "a",
        action_speed: "s",
        action_easing: "e",
        action_delay: "d",
        action_repeats: "rd",
        gotoframe: "sc",
        gotoframeM: "scm",
        gotoframeN: "scn",
        scrollto_id: "target_a",
        openmodal: "target_b",
        slide: "target_c",
        jump_to_slide: "target_c",
        layer_target: "target_e",
        link_open_in: "target_f",
        actioncallback: "target_g",
        menu_link: "link",
        image_link: "link",
        menu_anchor: "anchor",
        scrollunder_offset: "offset",
        modalslide: "msl",
        toggle_layer_type: "atst",
        link_follow: "flw",
        link_help_in: "http",
        link_type: "ltype",
        tooltip_event: "evt",
        updateChildren: "rec",
        toggle_class: "class",
        pinterest_link: "link",
        pinterest_image: "image",
        pinterest_link_description: "description",
        twitter_link: "link",
        twitter_text: "text",
        facebook_link: "link",
        linkedin_link: "link",
        linkedin_link_title: "title",
        linkedin_link_summary: "sum"
    }, SR7.migrate.actnames = {
        share_pinterest: "link",
        share_twitter: "link",
        share_facebook: "link",
        share_linkedin: "link",
        toggle_frames: "toggleScenes",
        toggle_layer: "toggleScenes",
        start_frame: "playScene",
        jumpto: "callSlide",
        toggle_class: "toggleClass",
        simulate_click: "simulate",
        start_in: "playScene",
        start_out: "playScene",
        toggle_slider: "togglePrg",
        scroll_under: "scrollbelow",
        scrollto: "scroll",
        lottie_play: "lottiePlay",
        lottie_pause: "lottiePause",
        lottie_resume: "lottieResume"
    }, SR7.migrate.actused = {
        default: ["a", "evt", "d", "rd"],
        lottie_play: ["target_e", "d"],
        lottie_pause: ["target_e", "d"],
        lottie_resume: ["target_e", "d"],
        share_pinterest: ["link", "image", "description"],
        share_twitter: ["link", "text"],
        share_facebook: ["link"],
        share_linked: ["link", "title", "sum"],
        menu_link: ["target_f", "link", "ltype", "flw", "anchor", "offset", "s", "e", "http"],
        menu: ["target_f", "link", "ltype", "flw", "anchor", "offset", "s", "e", "http"],
        mtrap_follow: ["target_e"],
        link: ["target_f", "link", "ltype", "flw", "http"],
        jumpto: ["target_c"],
        open_modal: ["target_b", "msl"],
        next: [],
        prev: [],
        pause: [],
        resume: [],
        callback: ["target_g"],
        scroll_under: ["offset", "s", "e"],
        scrollto: ["target_a", "offset", "s", "e"],
        start_in: ["target_e", "rec"],
        start_out: ["target_e", "rec"],
        next_frame: ["target_e", "rec"],
        prev_frame: ["target_e", "rec"],
        start_frame: ["target_e", "rec", "sc"],
        toggle_frames: ["target_e", "rec", "scn", "scm", "atst"],
        toggle_layer: ["target_e", "rec", "atst"],
        getAccelerationPermission: [],
        start_video: ["target_e"],
        stop_video: ["target_e"],
        mute_video: ["target_e"],
        unmute_video: ["target_e"],
        toggle_video: ["target_e"],
        toggle_mute_video: ["target_e"],
        simulate_click: ["target_e"],
        toggle_class: ["target_e", "class"]
    }, SR7.migrate.jsCODE = function(e) {
        let t = /\(function\(\)\s*{([\s\S]*?)\}\)\(\);/g;
        e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = SR7.migrate.replaceTextSR6Ids(e)).replaceAll("revolution.slide.onloaded", "sr.module.ready")).replaceAll("revolution.layeraction", "sr.layer.action")).replaceAll("revolution.slide.onbeforeswap", "sr.slide.beforeChange")).replaceAll("revolution.slide.onpause", "sr.slide.pause")).replaceAll("revolution.slide.onresume", "sr.slide.resume")).replaceAll("revolution.slide.onafterswap", "sr.slide.afterChange")).replaceAll("revolution.slide.onchange", "sr.slide.afterChange")).replaceAll("rs-sbg-wrap", "sr7-bg")).replaceAll(".rs-layer", ".sr7-layer")).replaceAll("jQuery.fn.revolution.document.on", "document.addEventListener")).replaceAll("jQuery('body').cryptoUpdateInside({container:data.nextslide});", "jQuery('body').cryptoUpdateInside({container:jQuery(e.current.slide)});")).replace(t, "(function() { try {$1} catch(e) {console.error('Error in function block:', e);} })();");
        return t = /jQuery\('body'\)\.on\('click',\s*'\.itm',\s*function\(\)\s*\{\s*window\.location\.hash\s*=\s*'\?' \+ this\.id;\s*return\s*false;\s*\}\);/g, (e = (e = (e = (e = e.replace(/revapi\d+\.bind\("sr\.slide\.beforeChange",/g, "document.addEventListener('sr.slide.beforeChange',")).replaceAll(t, "let itms = document.getElementsByClassName('itm');\nfor (let i = 0; i < itms.length; i++) {\n  itms[i].addEventListener('click', function(event) { window.location.hash = '?' + this.id;event.preventDefault(); \n});}\n")).replaceAll("sliderAnchors();", "document.addEventListener('sr.module.ready',function() {sliderAnchors();});")).replaceAll("var counter = {val:doctop};", "var counter = {val:(window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)};")).includes("jQuery") && (e = "try {//Deprecation Notice: jQuery functions are deprecated and no longer supported in Slider Revolution 6.5+.\n //Please refer to our documentation for alternatives and further guidance: https://www.sliderrevolution.com/manual/ \n" + e + "} catch(e) { console.error(e);}"), e
    }, SR7.migrate.cssCODE = function(e) {
        let t = function(e, t) {
            return `background: linear-gradient(${t}) !important;`
        };
        return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = SR7.migrate.replaceTextSR6Ids(e)).split("_forcefullwidth").join("")).split("linear-gradient(top,").join("linear-gradient(to bottom,")).split("linear-gradient(bottom,").join("linear-gradient(to top,")).split("linear-gradient(left,").join("linear-gradient(to right,")).split("linear-gradient(right,").join("linear-gradient(to left,")).replace(/background\s*:\s*linear-gradient\(([^;]+)\);/g, t)).replace(/background\s*:\s*-webkit-linear-gradient\(([^;]+)\);/g, t)).replace(/-webkit-background-clip\s*:\s*text;/g, (function(e, t) {
            return "background-clip: text !important;"
        }))).split("-webkit-background-clip").join("background-clip")
    }, SR7.migrate.replaceTextSR6Ids = function(e) {
        return e = (e = e.replace(/slider-(\d{1,6})-slide-(\d{1,6})-layer-(\d{1,6})/g, ((e, t, r, a) => `SR7_${t}_1-${SR7.E?.v6v7ids?.n?.[r]||r}-${a}`))).replace(/slider-(\d{1,6})-slide-(\d{1,6})-layer-(\d{1,6})/g, ((e, t, r, a) => `SR7_${t}_1-${SR7.E?.v6v7ids?.s?.[r]||r}-${a}`))
    }, SR7.migrate.navPH = (e, t, r) => e = e.replaceAll("tp-arrows", "sr7-arrows").replaceAll("tparrows", "sr7-arrows").replaceAll("tp-leftarrow", "sr7-leftarrow").replaceAll("tp-rightarrow", "sr7-rightarrow").replaceAll("tp-arrow", "sr7-arrow").replaceAll("rs-arrow", "sr7-arrow").replaceAll("tp-bullet-image", "sr7-bullimg").replaceAll("tp-bullets", "sr7-bullets").replaceAll("tp-bullet", "sr7-bullet").replaceAll("nav-dir-horizontal", "sr7-ndh").replaceAll("nav-dir-vertical", "sr7-ndv").replaceAll("nav-pos-hor-left", "sr7-nphl").replaceAll("nav-pos-hor-right", "sr7-nphr").replaceAll("nav-pos-hor-center", "sr7-nphc").replaceAll("nav-pos-ver-top", "sr7-npvt").replaceAll("nav-pos-ver-bottom", "sr7-npvb").replaceAll("nav-pos-ver-center", "sr7-npvc").replaceAll("rs-touchhover", "sr7-touchhover").replaceAll("tp-arr-imgholder", "sr7-nav-img").replaceAll("tp-arr-allwrapper", "sr7-arrwrap").replaceAll("tp-tab-image", "sr7-tab-img").replaceAll("tp-thumb-image", "sr7-thumb-img").replaceAll("rs-tabs", "sr7-tabs").replaceAll("rs-navmask", "sr7-tt-mask").replaceAll("tp-tab-mask", "sr7-tabs-mask").replaceAll("tp-tabs", "sr7-tabs").replaceAll("rs-tabs-wrap", "sr7-tabs-wrap").replaceAll("rs-thumbs", "sr7-thumbs").replaceAll("tp-thumbs", "sr7-thumbs").replaceAll("rs-thumb", "sr7-thumb").replaceAll("tp-thumb", "sr7-thumb").replaceAll("rs-tab", "sr7-tab").replaceAll("tp-tab", "sr7-tab").replaceAll("tp-tabs-inner-wrapper", "sr7-ntiw"), SR7.migrate.moduleObj = function(e) {
        void 0 !== e ? .size ? .custom && void 0 !== e ? .size ? .width && (e.size.custom.n || (e.size.width.n = Math.min(e.size.width.d, 1024), e.size.height.n = Math.round(e.size.height.d / e.size.width.d * e.size.width.n)), e.size.custom.t || (e.size.width.t = Math.min(e.size.width.n, 778), e.size.height.t = Math.round(e.size.height.n / e.size.width.n * e.size.width.t)), e.size.custom.m || (e.size.width.m = Math.min(e.size.width.t, 480), e.size.height.m = Math.round(e.size.height.t / e.size.width.t * e.size.width.m))), e.size ? ? = {};
        let t = !1 !== (e.general ? .firstSlide ? .set ? ? !1) ? _tpt.findNested(SR7.E.transtable ? ? {}, e ? .general ? .firstSlide ? .type ? ? "fade", "title") : void 0;
        t && (t.ms = e.general ? .firstSlide ? .duration ? ? "1000ms");
        let r = {
            migrated: "sr6",
            uSize: _tpt.DNTMtoArr(e ? .size ? .custom, !1, !1, !0),
            title: e.title ? ? "",
            alias: e.alias ? ? "",
            dbid: e.dbid ? ? "",
            id: e.id ? ? "",
            type: e.type ? ? "slider",
            prem: e.pakps,
            class: e.class ? ? "",
            wClass: e.wrapperclass ? ? "",
            mobileURLJumpFix: e.size ? .ignoreHeightChanges ? ? !0,
            fixed: e.layout ? .position ? .fixedOnTop ? ? !1,
            wpml: e.general ? .useWPML ? ? !1,
            lazyLoad: e.general ? .lazyLoad ? ? "none",
            uS: e.general ? .layerSelection ? ? !1,
            fs: {
                as: e.general ? .firstSlide ? .set ? ? !1,
                a: !1 !== (e.general ? .firstSlide ? .set ? ? !1) ? SR7.D.getBGAnim(t) : void 0
            },
            source: {
                type: e.sourcetype ? ? "gallery",
                flickr: "flickr" == e.sourcetype ? e.source ? .flickr ? ? void 0 : void 0,
                facebook: "facebook" == e.sourcetype ? e.source ? .facebook ? ? void 0 : void 0,
                instagram: "instagram" == e.sourcetype ? e.source ? .instagram ? ? void 0 : void 0,
                twitter: "twitter" == e.sourcetype ? e.source ? .twitter ? ? void 0 : void 0,
                vimeo: "vimeo" == e.sourcetype ? e.source ? .vimeo ? ? void 0 : void 0,
                youtube: "youtube" == e.sourcetype ? e.source ? .youtube ? ? void 0 : void 0,
                woo: "woo" == e.sourcetype ? e.source ? .woo ? ? void 0 : void 0,
                post: "post" == e.sourcetype ? e.source ? .post ? ? void 0 : void 0
            },
            size: {
                fullWidth: "fullwidth" == e.layouttype || "fullscreen" == e.layouttype,
                fullHeight: "fullscreen" === e.layouttype,
                contentFH: e.size.useFullScreenHeight ? ? !1,
                fullHeightOffset: (e.size ? .fullScreenOffsetContainer ? ? "") + "," + (e.size ? .fullScreenOffset ? ? ""),
                height: _tpt.fillArray(_tpt.DNTMtoArr(e.size ? .height), 5),
                width: _tpt.fillArray(_tpt.DNTMtoArr(e.size ? .width), 5),
                cachedHeight: _tpt.fillArray(_tpt.DNTMtoArr(e.size ? .editorCache, 0), 5),
                upscaling: e.size ? .enableUpscaling ? ? !1,
                respectRatio: e.size ? .respectAspectRatio ? ? !1,
                keepBPHeight: !("fullscreen" === e.layouttype || "carousel" != e.type || !e.carousel ? .justify) || (e.size ? .keepBPHeight ? ? !1),
                minHeight: "fullwidth" !== e.layouttype && "fullscreen" !== e.layouttype && void 0 !== e.size && void 0 !== e.size.minHeight ? _tpt.fillArray(_tpt.DNTMtoArr(e.size.minHeight), 5) : void 0,
                maxHeight: void 0 !== e.size && void 0 !== e.size.maxHeight ? _tpt.fillArray(_tpt.DNTMtoArr(e.size.maxHeight), 5) : void 0,
                maxWidth: e.size ? .maxWidth ? ? !1,
                overflow: void 0 !== e.size ? "" + e.size.forceOverflow == "true" ? "forceTrue" : "" + e.size.oveflowHidden == "true" ? "forceFalse" : "" + e.size.overflow == "false" ? "false" : "true" : "false"
            },
            vPort: e.general ? .slideshow ? .viewPort ? _tpt.fillArray(_tpt.DNTMtoArr(e.general ? .slideshow ? .viewPortArea ? ? "100px"), 5) : e.general ? .slideshow ? .globalViewPort ? _tpt.fillArray(_tpt.DNTMtoArr(e.general ? .slideshow ? .globalViewDist ? ? "100px"), 5) : ["100px", "100px", "100px", "100px", "100px"],
            snap: {
                adjust: e.snap ? .adjust ? ? "none",
                snap: e.snap ? .snap ? ? !1,
                helpLines: e.snap ? .helpLines ? ? !1,
                gap: e.snap ? .gap ? ? 20
            },
            default: {
                linearStyle: e.def ? .autoResponsive ? ? !0,
                linearPosition: e.def ? .autoResponsive ? ? !0,
                linearSpace: e.def ? .responsiveOffset ? ? !0,
                linearAlien: e.def ? .responsiveChilds ? ? !0,
                len: e.def ? .delay ? ? 9e3
            },
            codes: {
                css: SR7.migrate.cssCODE(e.codes ? .css ? ? ""),
                js: SR7.migrate.jsCODE(e.codes ? .javascript7 ? ? "")
            },
            carousel: SR7.D.carouselSettings(e.carousel, !0),
            pLoader: {
                color: e.layout ? .spinner ? .color ? ? "#ffffff",
                type: (e.layout ? .spinner ? .type ? ? "off").replace("spinner", "prlt")
            },
            slideshow: {
                auto: e.general ? .slideshow ? .slideShow ? ? !0,
                sOH: e.general ? .slideshow ? .stopOnHover ? ? !1,
                loop: (e.general ? .slideshow ? .stopAfterLoops ? ? 0) < 1 ? -1 : e.general ? .slideshow ? .stopAfterLoops ? ? -1,
                stopAt: e.general ? .slideshow ? .stopSlider ? (e.general ? .slideshow ? .stopAtSlide ? ? 0) < 1 ? -1 : e.general ? .slideshow ? .stopAtSlide ? ? -1 : -1,
                shuffle: e.general ? .slideshow ? .shuffle ? ? !1,
                initDelay: e.general ? .slideshow ? .initDelay ? ? 0,
                waitApi: e.general ? .slideshow ? .waitForInit ? ? !1,
                firstSlide: void 0 !== e.general && void 0 !== e.general.firstslide && e.general.firstslide.alternativeFirstSlideSet ? e.general ? .firstslide ? .alternativeFirstSlide ? ? "auto" : "auto"
            },
            general: {
                icache: e.general ? .icache ? ? "default",
                dpr: e.general ? .dpr ? ? "dpr",
                observeWrap: e.general ? .observeWrap ? ? !1,
                layerSelection: e.general ? .layerSelection ? ? !1,
                disableOnMobile: e.general ? .disableOnMobile ? ? !1,
                autoPlayVideoOnMobile: e.general ? .autoPlayVideoOnMobile ? ? !0,
                disablePanZoomMobile: e.general ? .disablePanZoomMobile ? ? !1,
                perspective: e.general ? .perspective ? ? 600,
                perspectiveType: e.general ? .perspectiveType ? ? "local",
                outputFilter: e.troubleshooting ? .outPutFilter ? ? "none",
                fallbackURL: e.troubleshooting ? .alternateURL ? ? ""
            },
            browser: {
                nextOnFocus: e.general ? .nextSlideOnFocus ? ? !1,
                noFocusListener: e.general ? .disableFocusListener ? ? !1,
                freezeOnBlur: e.general ? .freezeOnBlur ? ? !1,
                useURLDeeplink: e.general ? .enableurlhash ? ? !1
            },
            modal: {
                bC: e.modal ? .bodyClass ? ? "",
                h: e.modal ? .horizontal ? ? "center",
                v: e.modal ? .vertical ? ? "middle",
                cover: e.modal ? .cover ? ? !0,
                pS: e.modal ? .allowPageScroll ? ? !1,
                bg: e.modal ? .coverColor ? ? "rgba(0,0,0,0.5)",
                sp: e.modal ? .coverSpeed ? ? 1e3
            },
            shdw: e.layout ? .bg ? .shadow ? ? !1,
            bg: {
                color: _tpt.gradient.convert(e.layout ? .bg ? .color ? ? "transparent"),
                image: "false" !== String(e.layout ? .bg ? .useImage ? ? !1) ? SR7.D.contentOBJ("image", {
                    src: e.layout.bg.image,
                    lib_size: e.layout.bg.imageSourceType,
                    pos: SR7.D.convertBGPosObj(e.layout.bg.position),
                    repeat: e.layout.bg.repeat,
                    size: e.layout.bg.fit
                }) : void 0
            },
            sbt: {
                use: e.scrolltimeline ? .set ? ? !1,
                f: e.scrolltimeline ? .fixed ? ? !1,
                fStart: e.scrolltimeline ? .fixedStart ? ? 2e3,
                fEnd: e.scrolltimeline ? .fixedEnd ? ? 4e3,
                layers: e.scrolltimeline ? .layers ? ? !1,
                e: e.scrolltimeline ? .ease ? ? "none",
                s: parseInt(e.scrolltimeline ? .speed ? ? 500) / 1e3,
                pull: e.scrolltimeline ? .pullcontent ? ? !1,
                nL: !0
            },
            mod: {
                use: e ? .parallax ? .set ? ? !1,
                dOM: e ? .parallax ? .disableOnMobile ? ? !1,
                d3: e ? .parallax ? .setDDD ? ? !1,
                d3z: parseInt(e ? .parallax ? .ddd ? .zCorrection ? ? "65"),
                d3d: parseInt(e ? .parallax ? .levels ? .[15] ? ? 30) / 2,
                d3s: 3,
                d3e: "power3.out",
                t: e ? .parallax ? .mouse ? .type,
                om: parseFloat(e ? .parallax ? .mouse ? .omulti),
                sm: parseFloat(e ? .parallax ? .mouse ? .smulti),
                dir: e ? .parallax ? .mouse ? .dir
            },
            rOFV: !0,
            nav: {
                m: {
                    use: e.nav ? .mouse ? .set ? ? "off",
                    r: e.nav ? .mouse ? .reverse ? ? "default",
                    t: e.nav ? .mouse ? .target ? ? "html",
                    st: e.nav ? .mouse ? .treshold ? ? 50,
                    v: e.nav ? .mouse ? .viewport ? ? 50,
                    cd: e.nav ? .mouse ? .calldelay ? ? 1500
                },
                s: {
                    use: e.nav ? .swipe ? .set ? ? !1,
                    desk: e.nav ? .swipe ? .setOnDesktop ? ? !1,
                    mobC: e.nav ? .swipe ? .setMobileCarousel ? ? !0,
                    deskC: e.nav ? .swipe ? .setDesktopCarousel ? ? !0,
                    bV: e.nav ? .swipe ? .blockDragVertical ? ? !1,
                    d: e.nav ? .swipe ? .direction ? ? "horizontal"
                },
                k: {
                    use: e.nav ? .keyboard ? .set ? e.nav.keyboard.direction : "off"
                },
                p: {
                    w: e.nav ? .preview ? .width ? ? 300,
                    h: e.nav ? .preview ? .height ? ? 200
                }
            }
        };
        if (e.nav ? .arrows ? .set) {
            let t = SR7.NAV ? .arrows ? .[e.nav.arrows ? .style ? ? 1006],
                a = parseInt(e.nav.arrows ? .hideDelay ? ? 200),
                i = e.nav.arrows ? .hideOver ? parseInt(e.nav.arrows ? .hideOverLimit ? ? 0) + 1 : -1,
                o = e.nav.arrows ? .hideUnder ? parseInt(e.nav.arrows ? .hideUnderLimit ? ? 0) : -1;
            void 0 !== t && (r.nav.arrows = {
                set: !0,
                key: t.handle,
                def: t.placeholders,
                cst: e.nav.arrows ? .presets ? ? {},
                ps: e.nav.arrows ? .preset ? ? "default",
                t: e.nav.arrows ? .style ? ? 1006,
                css: SR7.migrate.navPH(t.css ? ? ""),
                html: SR7.migrate.navPH(t.markup ? ? ""),
                on: e.nav.arrows ? .alwaysOn ? ? !0,
                s: parseInt(e.nav.arrows ? .animSpeed ? ? 1e3),
                dIn: ["#a", parseInt(e.nav.arrows ? .animDelay ? ? 1e3), "#a", "#a", "#a"],
                dOut: ["#a", a, "#a", "#a", e.nav.arrows ? .hideDelayMobile ? ? 1200],
                show: [-1 == i || SR7.G.breakPoints[0] < i || -1 !== o, (-1 == i || SR7.G.breakPoints[0] <= i) && (-1 == o || SR7.G.breakPoints[0] > o), (-1 == i || SR7.G.breakPoints[1] <= i) && (-1 == o || SR7.G.breakPoints[1] > o), (-1 == i || SR7.G.breakPoints[2] <= i) && (-1 == o || SR7.G.breakPoints[2] > o), (-1 == i || SR7.G.breakPoints[3] <= i) && (-1 == o || SR7.G.breakPoints[3] > o)],
                l: {
                    a: e.nav.arrows ? .left ? .align ? ? "slider",
                    anim: e.nav.arrows ? .left ? .anim ? ? "fade",
                    x: ["#a", e.nav.arrows ? .left ? .offsetX ? ? 0, "#a", "#a", "#a"],
                    y: ["#a", e.nav.arrows ? .left ? .offsetY ? ? 0, "#a", "#a", "#a"],
                    v: ["#a", e.nav.arrows ? .left ? .vertical ? ? "center", "#a", "#a", "#a"],
                    h: ["#a", e.nav.arrows ? .left ? .horizontal ? ? "left", "#a", "#a", "#a"]
                },
                r: {
                    a: e.nav.arrows ? .right ? .align ? ? "slider",
                    anim: e.nav.arrows ? .right ? .anim ? ? "fade",
                    x: ["#a", e.nav.arrows ? .right ? .offsetX ? ? 0, "#a", "#a", "#a"],
                    y: ["#a", e.nav.arrows ? .right ? .offsetY ? ? 0, "#a", "#a", "#a"],
                    v: ["#a", e.nav.arrows ? .right ? .vertical ? ? "center", "#a", "#a", "#a"],
                    h: ["#a", e.nav.arrows ? .right ? .horizontal ? ? "right", "#a", "#a", "#a"]
                }
            })
        }
        if (e.nav ? .bullets ? .set) {
            let t = SR7.NAV ? .bullets ? .[e.nav.bullets ? .style ? ? 3e3],
                a = parseInt(e.nav.bullets ? .hideDelay ? ? 200),
                i = e.nav.bullets ? .hideOver ? parseInt(e.nav.bullets ? .hideOverLimit ? ? 0) + 1 : -1,
                o = e.nav.bullets ? .hideUnder ? parseInt(e.nav.bullets ? .hideUnderLimit ? ? 0) : -1;
            void 0 !== t && (r.nav.bullets = {
                set: !0,
                def: t.placeholders,
                cst: e.nav.bullets ? .presets ? ? {},
                ps: e.nav.bullets ? .preset ? ? "default",
                key: t.handle,
                t: e.nav.bullets ? .style ? ? 1006,
                css: SR7.migrate.navPH(t.css ? ? ""),
                html: SR7.migrate.navPH(t.markup ? ? ""),
                on: e.nav.bullets ? .alwaysOn ? ? !0,
                s: parseInt(e.nav.bullets ? .animSpeed ? ? 1e3),
                d: ["#a", e.nav.bullets ? .direction ? ? "horizontal", "#a", "#a", "#a"],
                dIn: ["#a", parseInt(e.nav.bullets ? .animDelay ? ? 1e3), "#a", "#a", "#a"],
                dOut: ["#a", a, "#a", "#a", e.nav.bullets ? .hideDelayMobile ? ? 1200],
                show: [-1 == i || SR7.G.breakPoints[0] < i || -1 !== o, (-1 == i || SR7.G.breakPoints[0] <= i) && (-1 == o || SR7.G.breakPoints[0] > o), (-1 == i || SR7.G.breakPoints[1] <= i) && (-1 == o || SR7.G.breakPoints[1] > o), (-1 == i || SR7.G.breakPoints[2] <= i) && (-1 == o || SR7.G.breakPoints[2] > o), (-1 == i || SR7.G.breakPoints[3] <= i) && (-1 == o || SR7.G.breakPoints[3] > o)],
                g: parseInt(e.nav.bullets ? .space ? ? 5),
                a: e.nav.bullets ? .align ? ? "slider",
                anim: e.nav.bullets ? .anim ? ? "fade",
                x: ["#a", e.nav.bullets ? .offsetX ? ? 0, "#a", "#a", "#a"],
                y: ["#a", e.nav.bullets ? .offsetY ? ? 0, "#a", "#a", "#a"],
                v: ["#a", e.nav.bullets ? .vertical ? ? "bottom", "#a", "#a", "#a"],
                h: ["#a", e.nav.bullets ? .horizontal ? ? "center", "#a", "#a", "#a"]
            })
        }
        for (let t of ["tabs", "thumbs"])
            if (e.nav ? .[t] ? .set) {
                let a = SR7.NAV ? .[t] ? .[e.nav[t] ? .style ? ? 3e3],
                    i = parseInt(e.nav[t] ? .hideDelay ? ? 200),
                    o = e.nav[t] ? .hideOver ? parseInt(e.nav[t] ? .hideOverLimit ? ? 0) + 1 : -1,
                    l = e.nav[t] ? .hideUnder ? parseInt(e.nav[t] ? .hideUnderLimit ? ? 0) : -1,
                    s = e.nav[t] ? .innerOuter ? ? "inner",
                    n = "inner" == s ? e.nav[t] ? .direction ? ? "horizontal" : "outer-vertical" == s ? "vertical" : "horizontal";
                s = "inner" == s ? "i" : "o";
                let d = e.nav[t] ? .padding ? ? 5,
                    p = parseInt(e.nav[t] ? .width ? ? 100),
                    m = parseInt(e.nav[t] ? .height ? ? 100),
                    c = Math.min(p, parseInt(e.nav[t] ? .widthMin ? ? p)),
                    f = p - c,
                    u = [p, p, Math.round(p - (f - f / 760 * 544)), Math.round(p - (f - f / 760 * 298)), parseInt(e.nav[t] ? .widthMin ? ? 50)],
                    g = [m, m, Math.round(u[2] / u[0] * m), Math.round(u[3] / u[0] * m), Math.round(u[4] / u[0] * m)];
                void 0 !== a && (r.nav[t] = {
                    set: !0,
                    def: a.placeholders,
                    key: a.handle,
                    t: e.nav[t] ? .style ? ? 1006,
                    cst: e.nav[t] ? .presets ? ? {},
                    ps: e.nav[t] ? .preset ? ? "default",
                    css: SR7.migrate.navPH(a.css ? ? ""),
                    html: SR7.migrate.navPH(a.markup ? ? ""),
                    on: e.nav[t] ? .alwaysOn ? ? !0,
                    s: parseInt(e.nav[t] ? .animSpeed ? ? 1e3),
                    d: ["#a", n, "#a", "#a", "#a"],
                    dIn: ["#a", parseInt(e.nav[t] ? .animDelay ? ? 1e3), "#a", "#a", "#a"],
                    dOut: ["#a", i, "#a", "#a", e.nav[t] ? .hideDelayMobile ? ? 1200],
                    io: s,
                    show: [-1 == o || SR7.G.breakPoints[0] < o || -1 !== l, (-1 == o || SR7.G.breakPoints[0] <= o) && (-1 == l || SR7.G.breakPoints[0] > l), (-1 == o || SR7.G.breakPoints[1] <= o) && (-1 == l || SR7.G.breakPoints[1] > l), (-1 == o || SR7.G.breakPoints[2] <= o) && (-1 == l || SR7.G.breakPoints[2] > l), (-1 == o || SR7.G.breakPoints[3] <= o) && (-1 == l || SR7.G.breakPoints[3] > l)],
                    g: parseInt(e.nav[t] ? .space ? ? 5),
                    a: e.nav[t] ? .align ? ? "slider",
                    anim: e.nav[t] ? .anim ? ? "fade",
                    x: ["#a", e.nav[t] ? .offsetX ? ? 0, "#a", "#a", "#a"],
                    y: ["#a", e.nav[t] ? .offsetY ? ? 0, "#a", "#a", "#a"],
                    v: ["#a", e.nav[t] ? .vertical ? ? "bottom", "#a", "#a", "#a"],
                    h: ["#a", e.nav[t] ? .horizontal ? ? "center", "#a", "#a", "#a"],
                    m: ["#a", parseInt(e.nav[t] ? .amount ? ? 5), "#a", "#a", "#a"],
                    size: {
                        t: 0,
                        nw: p,
                        nh: m,
                        mw: c,
                        w: u,
                        h: g
                    },
                    wr: {
                        c: e.nav[t] ? .wrapperColor ? ? "transparent",
                        p: ["#a", d, "#a", "#a", "#a"],
                        s: e.nav[t] ? .spanWrapper ? ? !1,
                        mx: ["#a", e.nav[t] ? .mhoffset ? ? 0, "#a", "#a", "#a"],
                        my: ["#a", e.nav[t] ? .mvoffset ? ? 0, "#a", "#a", "#a"]
                    }
                })
            }
        if (e.nav ? .scrubber ? .set) {
            let t = SR7.NAV ? .scrubber ? .[e.nav.scrubber ? .style ? ? 5e3],
                a = parseInt(e.nav.scrubber ? .hideDelay ? ? 200),
                i = e.nav.scrubber ? .hideOver ? parseInt(e.nav.scrubber ? .hideOverLimit ? ? 0) : -1,
                o = e.nav.scrubber ? .hideUnder ? parseInt(e.nav.scrubber ? .hideUnderLimit ? ? 0) : -1,
                l = e.nav.scrubber ? .innerOuter ? ? "inner",
                s = "inner" == l ? e.nav.scrubber ? .direction ? ? "horizontal" : "outer-vertical" == l ? "vertical" : "horizontal";
            l = "inner" == l ? "i" : "o";
            let n = e.nav.scrubber ? .padding ? ? 5,
                d = parseInt(e.nav.scrubber ? .width ? ? 100) - parseInt(e.nav.scrubber ? .widthMin ? ? 100);
            void 0 !== t && (r.nav.scrubber = {
                set: !0,
                def: t.placeholders,
                cst: e.nav.scrubber ? .presets ? ? {},
                key: t.handle,
                t: e.nav.scrubber ? .style ? ? 5e3,
                pss: e.nav.scrubber ? .presets ? ? {},
                ps: e.nav.scrubber ? .preset ? ? "default",
                css: SR7.migrate.navPH(t.css ? ? "", e.nav.scrubber.presets, t.placeholders),
                html: SR7.migrate.navPH(t.markup ? ? "", e.nav.scrubber.presets, t.placeholders),
                on: e.nav.scrubber ? .alwaysOn ? ? !0,
                s: parseInt(e.nav.scrubber ? .animSpeed ? ? 1e3),
                d: ["#a", s, "#a", "#a", "#a"],
                dIn: ["#a", parseInt(e.nav.scrubber ? .animDelay ? ? 1e3), "#a", "#a", "#a"],
                dOut: ["#a", a, "#a", "#a", e.nav.scrubber ? .hideDelayMobile ? ? 1200],
                io: l,
                show: [-1 == i || SR7.G.breakPoints[0] < i || -1 !== o, (-1 == i || r.size.width[1] <= i) && (-1 == o || r.size.width[1] >= o), (-1 == i || r.size.width[2] <= i) && (-1 == o || r.size.width[2] >= o), (-1 == i || r.size.width[3] <= i) && (-1 == o || r.size.width[3] >= o), (-1 == i || r.size.width[4] <= i) && (-1 == o || r.size.width[4] >= o)],
                g: parseInt(e.nav.scrubber ? .space ? ? 5),
                a: e.nav.scrubber ? .align ? ? "slider",
                anim: e.nav.scrubber ? .anim ? ? "fade",
                x: ["#a", e.nav.scrubber ? .offsetX ? ? 0, "#a", "#a", "#a"],
                y: ["#a", e.nav.scrubber ? .offsetY ? ? 0, "#a", "#a", "#a"],
                v: ["#a", e.nav.scrubber ? .vertical ? ? "bottom", "#a", "#a", "#a"],
                h: ["#a", e.nav.scrubber ? .horizontal ? ? "center", "#a", "#a", "#a"],
                m: ["#a", parseInt(e.nav.scrubber ? .amount ? ? 5), "#a", "#a", "#a"],
                size: {
                    w: [parseInt(e.nav.scrubber ? .width ? ? 100), parseInt(e.nav.scrubber ? .width ? ? 100), Math.round(parseInt(e.nav.scrubber ? .width ? ? 100) - (d - d / 760 * 544)), Math.round(parseInt(e.nav.scrubber ? .width ? ? 100) - (d - d / 760 * 298)), parseInt(e.nav.scrubber ? .widthMin ? ? 100)],
                    h: ["#a", e.nav.scrubber ? .height ? ? 50, "#a", "#a", "#a"]
                },
                wr: {
                    c: e.nav.scrubber ? .wrapperColor ? ? "transparent",
                    p: ["#a", n, "#a", "#a", "#a"],
                    s: e.nav.scrubber ? .spanWrapper ? ? !1,
                    mx: ["#a", e.nav.scrubber ? .mhoffset ? ? 0, "#a", "#a", "#a"],
                    my: ["#a", e.nav.scrubber ? .mvoffset ? ? 0, "#a", "#a", "#a"]
                },
                ts: e.nav.scrubber ? .thumbScale ? ? 100,
                hs: e.nav.scrubber ? .handleScale ? ? 100,
                ho: e.nav.scrubber ? .hoverScale ? ? !1,
                tn: e.nav.scrubber ? .thumbnail ? ? !1,
                hp: e.nav.scrubber ? .handleProgress ? ? !1,
                pa: e.nav.scrubber ? .progressAlign ? ? "left",
                sc: e.nav.scrubber ? .scale ? ? 100,
                f: e.nav.scrubber ? .fade ? ? !0,
                asc: e.nav.scrubber ? .animScale ? ? !1,
                tr: e.nav.scrubber ? .translate ? ? 0,
                sp: e.nav.scrubber ? .spin ? ? !1,
                ha: e.nav.scrubber ? .handleArrows ? ? !0,
                tp: e.nav.scrubber ? .trackPattern ? ? "dots",
                ms: e.nav.scrubber ? .minSize ? ? 60,
                to: e.nav.scrubber ? .thumbOffset ? ? 0,
                sk: e.nav.scrubber ? .skew ? ? 0,
                cor: e.nav.scrubber ? .changeOnRelease ? ? !1
            })
        }
        const a = ["marginTop", "marginBottom", "marginLeft", "marginRight"];
        let i;
        if (e.general ? .progressbar ? .set) {
            let t = e.general ? .progressbar ? .position ? ? void 0;
            r.pbar = {
                set: !0,
                a: e.general ? .progressbar ? .alignby ? ? "slider",
                t: e.general ? .progressbar ? .style ? ? "horizontal",
                s: e.general ? .progressbar ? .size ? ? e.general ? .progressbar ? .height ? ? "5px",
                r: e.general ? .progressbar ? .radius ? ? 10,
                v: "top" == t ? "top" : "bottom" == t ? "bottom" : e.general ? .progressbar ? .vertical ? ? "bottom",
                h: e.general ? .progressbar ? .horizontal ? ? "left",
                x: e.general ? .progressbar ? .x ? ? 0,
                y: e.general ? .progressbar ? .y ? ? 0,
                c: e.general ? .progressbar ? .color ? ? "rgba(255,255,255,0.5)",
                bg: e.general ? .progressbar ? .bgcolor ? ? "transparent",
                base: e.general ? .progressbar ? .basedon ? ? "slide",
                gs: e.general ? .progressbar ? .gapsize ? ? 0,
                g: e.general ? .progressbar ? .gap ? ? !1,
                gc: e.general ? .progressbar ? .gapcolor ? ? "rgba(255,255,255,0.5)",
                rev: e.general ? .progressbar ? .reset ? ? "reset",
                vis: _tpt.DNTMtoArr(e.general ? .progressbar.visibility ? ? !0, !0)
            }
        }
        for (var o = 0; o < 5; o++) {
            i = 0;
            for (const t of ["t", "b", "l", "r"])(SR7.E.backend || e.layout ? .position ? .[a[i]]) && (r.size.m ? ? = {}) && (r.size.m[t] ? ? = Array(5)) && (r.size.m[t][o] = e.layout ? .position ? .[a[i]] || 0), (SR7.E.backend || e.layout ? .bg ? .padding) && (r.size.p ? ? = {}) && (r.size.p[t] ? ? = Array(5)) && (r.size.p[t][o] = e.layout ? .bg ? .padding || 0), i++
        }(SR7.E.backend || "none" !== (e.layout ? .bg ? .dottedOverlay ? ? "none")) && (r.bg.overlay = {
            type: e.layout.bg.dottedOverlay,
            size: e.layout.bg.dottedOverlaySize,
            cA: e.layout.bg.dottedColorA ? ? "transparent",
            cB: e.layout.bg.dottedColorB ? ? "#000000"
        }), (SR7.E.backend || void 0 !== e.addOns) && (r.addOns = {});
        for (let t in e.addOns) {
            let a = t.replace("revslider-", "").replace("-addon", ""),
                i = SR7.migrate.Addon("module", e.addOns[t], a);
            void 0 !== i && (r.addOns[a] = i.val ? ? i, void 0 !== i.update && (r = _tpt.extend(r, i.update)))
        }
        return void 0 !== e.general && void 0 !== e.general.slideshow && 1 == e.slidelength && (r.slideshow.loop = e.general.slideshow.loopSingle ? -1 : 0), r
    };
    const e = (e = "") => e && e.endsWith("#") && e.length > 3 && "/" == e[e.length - 2] ? "" : e;

    function t(e) {
        for (let r in e) "string" == typeof e[r] ? e[r] = e[r].replaceAll("|", ",") : "object" == typeof e[r] && null !== e[r] && t(e[r])
    }
    SR7.migrate.slideObj = function(t) {
        var i = t.params ? ? {};
        i.global = i.static;
        var o = t.global ? {
            global: !0,
            respVP: !0,
            id: SR7.D.fixSR6IDs(t.id ? ? i.id, !0),
            title: t.title ? ? i.title ? ? "",
            parentID: SR7.D.fixSR6IDs(i.child ? .parentId ? ? null, !0),
            language: i.child ? .language ? ? "default",
            oflow: i.global ? .overflow ? ? !1,
            pos: i.global ? .position ? ? "front",
            fullHeight: !0
        } : {
            id: SR7.D.fixSR6IDs(t.id ? ? i.id),
            order: t.order ? ? void 0,
            title: t.title ? ? i.title ? ? "",
            parentID: SR7.D.fixSR6IDs(i.child ? .parentId ? ? null),
            language: i.child ? .language ? ? "default",
            thumb: {
                src: e(i.thumb ? .customThumbSrc ? ? ""),
                srcId: i.thumb ? .customThumbSrcId ? ? "",
                admin: e(i.thumb ? .customAdminThumbSrc ? ? ""),
                adminId: i.thumb ? .customAdminThumbSrcId ? ? "",
                dimension: i.thumb ? .dimension ? ? "slider",
                default: a(i.bg, i.media, "gallery", !0)
            },
            params: i.info ? .params ? ? void 0,
            description: i.info ? .description ? ? "",
            attr: {
                class: i.attributes ? .class ? ? "",
                data: i.attributes ? .data ? ? "",
                id: i.attributes ? .id ? ? "",
                a: i.attributes ? .alt ? ? "",
                aO: r(i.attributes ? .altOption ? ? "media_library"),
                deepLink: i.attributes ? .deeplink ? ? "",
                attr: i.attributes ? .attr ? ? ""
            },
            publish: {
                from: i.publish ? .from ? ? "",
                to: i.publish ? .to ? ? "",
                state: i.publish ? .state ? ? ""
            },
            slideshow: {
                stop: _tpt.tf(i.timeline ? .stopOnPurpose ? ? !1),
                len: "" == (i.timeline ? .delay ? ? "default") ? "default" : i.timeline ? .delay ? ? "default",
                hal: i.visibility ? .hideAfterLoop ? ? 0,
                hom: _tpt.tf(i.visibility ? .hideOnMobile ? ? !1),
                hfn: _tpt.tf(i.visibility ? .hideFromNavigation ? ? !1)
            }
        };
        if (void 0 !== i.nav || void 0 !== o.nav)
            for (let e of ["tabs", "thumbs", "arrows", "bullets"])
                if (i.nav ? .[e] ? .presets)
                    for (let t in i.nav[e].presets) _tpt.hop(i.nav[e].presets, t) && !t.includes("-def") && i.nav[e].presets[t + "-def"] && (o.nav ? ? = {}, o.nav[e] ? ? = {}, o.nav[e][t] = i.nav[e].presets[t]);
        (SR7.E.backend || i ? .timeline ? .loop ? .set) && (o.loop = {
            u: i.timeline ? .loop ? .set ? ? !1,
            r: i.timeline ? .loop ? .repeat ? ? -1,
            s: i.timeline ? .loop ? .start ? ? 0,
            e: i.timeline ? .loop ? .end ? ? 4500
        }), (SR7.E.backend || void 0 !== i.addOns) && (o.addOns = {});
        for (let e in i.addOns) {
            if (!_tpt.hop(i.addOns, e)) continue;
            let t = e.replace("revslider-", "").replace("-addon", ""),
                r = SR7.migrate.Addon("slide", i.addOns[e], t);
            void 0 !== r && (o.addOns[t] = r)
        }
        return o
    };
    const r = e => "media_library" == e ? "ml" : "file_name" == e ? "fn" : "c",
        a = (e, t, r, a) => {
            let i;
            return null == e ? {
                color: "transparent"
            } : ("image" == e.type || "external" == e.type ? i = {
                image: SR7.D.contentOBJ("image", {
                    src: "external" == e.type ? e.externalSrc : e.image ? ? "",
                    lib: "external" == e.type ? "" : e.imageLib ? ? "",
                    ratio: e.imageRatio ? ? 1,
                    lib_id: e.imageId ? ? "",
                    lib_size: e.imageSourceType ? ? "",
                    fromStream: null == e.imageFromStream && "" == ("external" == e.type ? e.externalSrc : e.image ? ? "") && "gallery" !== r || (e.imageFromStream ? ? !1),
                    streamType: r,
                    pos: SR7.D.convertBGPosObj(e.position ? ? "50% 50%", e.positionX ? ? 0, e.positionY ? ? 0),
                    repeat: e.repeat ? ? "",
                    size: e.fit ? ? "cover",
                    sizeVal: "percentage" == e.fit ? parseInt(e.fitX ? ? 100) + "%" : "100%"
                })
            } : "color" == e.type || "solid" == e.type || "gradient" == e.type ? i = {
                color: _tpt.gradient.convert(e.color ? ? "#ffffff")
            } : "transparent" == e.type ? i = {
                color: "transparent"
            } : "youtube" != e.type && "vimeo" != e.type && "html5" != e.type || (i = {
                video: SR7.D.contentOBJ("video", {
                    type: e.type,
                    src: ("html5" == e.type ? e.mpeg : "vimeo" == e.type ? e.vimeo : "youtube" == e.type ? e.youtube : "") ? ? "",
                    controls: "none",
                    autoPlay: !0,
                    pauseTimer: e.video ? .pausetimer ? ? !1,
                    start: e.video ? .startAt ? ? "",
                    end: e.video ? .endAt ? ? "",
                    nextSlide: e.video ? .nextSlideAtEnd ? ? !1,
                    stopAllMedia: !1,
                    loop: e.video ? .loop ? ? !0,
                    rewind: e.video ? .forceRewind ? ? !0,
                    crossOrigin: e.crossOriginVideo ? ? !1,
                    volume: 0,
                    poster: {
                        src: e.image ? ? t ? .posterUrl ? ? t ? .thumb ? .veryBig ? .url ? ? "",
                        lib: e.imageLib ? ? "",
                        lib_id: e.imageId ? ? "",
                        fromStream: e.imageFromStream ? ? !1,
                        showOnPause: !1,
                        insteadVideo: !1,
                        noOnMobile: !1
                    },
                    fromStream: e.videoFromStream ? ? !1,
                    streamType: !1 !== (e.videoFromStream ? ? !1) ? r : "gallery",
                    noInteract: !0,
                    cover: e.video ? .fitCover ? ? !0,
                    aFullScreen: !1,
                    mute: !0,
                    ratio: e.video ? .ratio ? ? "16:9",
                    speed: e.video ? .speed ? ? 1,
                    pauseOnSwap: e.pauseOnSlideChange ? ? !1,
                    afterTransition: e.video ? .startAfterTransition ? ? !1
                })
            }), a && (i = null == i ? void 0 : "image" == e.type || "external" == e.type ? {
                image: {
                    src: i.image.src,
                    repeat: i.image.repeat,
                    size: i.image.size,
                    pos: i.image.pos
                }
            } : "color" == e.type || "solid" == e.type || "gradient" == e.type ? {
                color: i.color ? .string ? ? i.color
            } : i ? .video ? .poster ? {
                image: {
                    src: i.video.poster.src
                }
            } : void 0), i)
        };
    SR7.migrate.SlideBG = function(e, i, o, l, s = "Slide BG Layer", n = "shape", d = "slidebg") {
        e ? ? = {}, "fade" == (e.slideChange ? .preset ? ? "none") && (e.slideChange.in.o = 0);
        let p = null == e.slideChange || null == e.slideChange.e && null == e.slideChange.eng && null == e.slideChange.in ? _tpt.findNested(SR7.E ? .transtable ? ? {}, e ? .timeline ? .transition ? ? "fade", "title") : e.slideChange;
        t(p);
        var m = {
            alias: s,
            id: i,
            rTo: "slide",
            type: n,
            subtype: d,
            size: {
                cMode: e.size ? .covermode ? ? "cover"
            },
            pos: {
                h: _tpt.fillArray(_tpt.DNTMtoArr("center"), 5),
                v: _tpt.fillArray(_tpt.DNTMtoArr("center"), 5),
                pos: e.position ? .position ? ? "absolute"
            },
            display: ["block", "block", "block", "block", "block"],
            mF: e.bg ? .mediaFilter ? ? "none",
            pid: -1,
            zIndex: 0,
            order: 0,
            bg: {},
            tl: { in: {
                    bg: SR7.D.getBGAnim(p)
                }
            },
            px: {
                use: e.effects ? .parallax ? ? !1,
                time: e.timeline ? .scrollBased ? ? !1,
                eff: e.effects ? .effect ? ? !1,
                effb: e.effects ? .blur ? ? "default",
                efff: e.effects ? .fade ? ? "default",
                effg: e.effects ? .grayscale ? ? "default",
                m: e.effects ? .pxmask ? ? !1
            }
        };
        if (e.attributes && (m.attr = {
                a: e.attributes ? .alt ? ? "",
                aO: r(e.attributes ? .altOption ? ? "media_library"),
                t: e.attributes ? .title ? ? "",
                tO: r(e.attributes ? .titleOption ? ? "media_library")
            }), e.seo ? .set && "front" !== (e.seo ? .z ? ? "front") && (e.actions = SR7.migrate.getSEOSlideAction(e.seo), m = SR7.migrate.action(e, m, l, i), "jquery" != e.actions.action[0].link_type && "regular" === e.actions.action[0].type || (m.cursor = "pointer")), null == e.slideChange && !m.tl ? .in ? .bg ? .rnd) {
            let t = void 0 !== (e.timeline ? .duration ? ? void 0) ? Array.isArray(e.timeline.duration) ? e.timeline.duration[0] : e.timeline.duration : void 0,
                r = void 0 !== (e.timeline ? .easeIn ? ? void 0) ? Array.isArray(e.timeline.easeIn) ? e.timeline.easeIn[0] : e.timeline.easeIn : void 0,
                a = void 0 !== (e.timeline ? .easeOut ? ? void 0) ? Array.isArray(e.timeline.easeOut) ? e.timeline.easeOut[0] : e.timeline.easeOut : void 0;
            m.tl.in.bg.ms = "default" == t ? m.tl.in.bg.ms : t, m.tl.in.bg.in.e = "default" == r ? m.tl.in.bg.in.e : r, m.tl.in.bg.out.e = "default" == a ? m.tl.in.bg.out.e : a
        }
        return void 0 !== e.bg && (m.bg = a(e.bg, e.media, o), "none" !== (e.bg ? .video ? .dotted ? ? e.bg ? .video ? .dottedOverlay ? ? "none") && (m.overlay = {
            type: e.bg ? .video ? .dottedOverlay ? ? "none",
            size: e.bg ? .video ? .dottedSize ? ? e.bg ? .video ? .dottedOverlaySize ? ? 1,
            colorA: e.bg ? .video ? .dottedColorA ? ? "transparent",
            colorB: e.bg ? .video ? .dottedColorB ? ? "#000000"
        })), e.panzoom ? .set && "image" == e.bg.type && (m.tl ? ? = {}, m.tl.in ? ? = {}, m.tl.in.pan = {
            all: [{
                sX: e.panzoom.fitStart ? ? "100%",
                rZ: e.panzoom.rotateStart ? ? 0,
                x: e.panzoom.xStart ? ? 0,
                y: e.panzoom.yStart ? ? 0,
                e: e.panzoom.ease ? ? "none",
                d: 0,
                f: 0
            }, {
                sX: e.panzoom.fitEnd ? ? "100%",
                rZ: e.panzoom.rotateEnd ? ? 0,
                x: e.panzoom.xEnd ? ? 0,
                y: e.panzoom.yEnd ? ? 0,
                e: e.panzoom.ease ? ? "none",
                d: parseInt(e.panzoom.duration ? ? 1e4),
                f: parseInt(e.panzoom.duration ? ? 1e4)
            }]
        }, (e.panzoom.blurStart || e.panzoom.blurEnd) && (m.tl.in.filter = {
            all: [{
                fu: !0,
                b: parseInt(e.panzoom.blurStart ? ? 0),
                e: e.panzoom.ease ? ? "none",
                d: 0,
                f: 0
            }, {
                fu: !0,
                b: parseInt(e.panzoom.blurEnd ? ? 0),
                e: e.panzoom.ease ? ? "none",
                d: parseInt(e.panzoom.duration ? ? 1e4),
                f: parseInt(e.panzoom.duration ? ? 1e4)
            }]
        })), m
    };
    SR7.migrate.translateEase = e => {
        switch (e) {
            case "ease-out":
                return "Power1.easeOut";
            case "ease-in":
                return "Power1.easeIn";
            case "ease-in-out":
            default:
                return "Power1.easeInOut";
            case "ease":
                return "Power2.easeOut";
            case "linear":
                return "Linear.easeNone"
        }
    }, SR7.migrate.Addon = (e, t, r, a, o, l) => {
        if (SR7.A ? .[r])
            if ("layer" == e) switch (r) {
                case "mousetrap":
                    return "disabled" != (t ? .follow ? .mode ? ? "disabled") && SR7.A[r] ? .getLayerBasics ? SR7.A[r].getLayerBasics(t, "migrate") : void 0;
                case "beforeafter":
                    return {
                        p: t.position ? ? "before"
                    };
                default:
                    return SR7.A[r] ? .getLayerBasics ? SR7.A[r].getLayerBasics(t, "migrate") : void 0
            } else if ("slidebg" == e) switch (r) {
                case "beforeafter":
                    return t.addOns ? ? = {}, t.addOns.beforeafter ? ? = {}, t.addOns.beforeafter.p = "before", t;
                case "videoscroll":
                case "panorama":
                case "filmstrip":
                case "slicey":
                case "duotonefilters":
                case "liquideffect":
                case "paintbrush":
                case "particles":
                    return SR7.A[r] ? .getLayerBasics ? SR7.A[r].getLayerBasics(t, "migrate") : void 0;
                default:
                    return t
            } else {
                if ("slide" == e) return t.enable ? SR7.A[r] ? .getSlideBasics ? SR7.A[r].getSlideBasics(t, "migrate") : {
                    u: !0
                } : void 0;
                if ("slide_new_layers" == e) {
                    let e;
                    switch (r) {
                        case "beforeafter":
                            if (!t ? .enable) return;
                            return e = SR7.migrate.SlideBG(t, a, "gallery", o, "BeforeAfter After BG", "shape", ""), e.addOns = {
                                beforeafter: {
                                    p: "after"
                                }
                            }, e;
                        case "snow":
                            if (!t ? .enable) return;
                            let r = i(a);
                            return r.addOns ? ? = {}, r.addOns["revslider-snow-addon"] = t, r.hover = {
                                pointerEvents: "none"
                            }, r.position ? ? = {}, r.position.zIndex = 300, l && (r.timeline.static ? ? = {}, r.timeline.static.start = 1, r.timeline.static.end = "last", r.position.staticZ = "front"), e = SR7.migrate.LayerObj({
                                o: r,
                                newIDs: a,
                                sid: o
                            }), e;
                        default:
                            return
                    }
                } else if ("module" == e) {
                    let e = {
                        val: t.enable ? SR7.A[r] ? .getModuleBasics ? SR7.A[r].getModuleBasics(t, "migrate") : {
                            u: !0
                        } : void 0,
                        update: t.enable && SR7.A[r] ? .migrateModuleObj ? SR7.A[r].migrateModuleObj(t) : void 0
                    };
                    if (null == e.val) return;
                    return e
                }
            }
    }, SR7.migrate.LayerObj = function(e) {
        let {
            dLEN: t,
            o: a = {},
            newIDs: i,
            sid: o,
            msource: l,
            global: s
        } = e;
        var n = a.group ? .puid ? ? ("row" == a.type ? "top" : -1);
        a.uid;
        a.uid = i[a.uid] || a.uid, n = i[n] || n;
        let d = a.type;
        a.type = a.linebreak ? "linebreak" : "row" == a.type || "group" == a.type || "column" == a.type || "zone" == a.type ? "container" : "button" == a.type || "text" == a.type ? "text" : a.type ? ? "text", a.runtime ? .internalClass && (a.runtime.internalClass = a.runtime.internalClass.replaceAll("rev-b-span", "sr7").replaceAll("rev-burger", "sr7-brg").replaceAll("rev-button", "sr7-btn").replaceAll("rev-", "sr7-").replaceAll("revb-", "sr7-")), a = ((e, t) => {
            try {
                if (void 0 !== e.customCSS && e.customCSS.length > 0) {
                    e.customCSS = e.customCSS.replace(/\s\s+/g, " ");
                    let t = e.customCSS.split(";"),
                        a = "";
                    for (let i in t) {
                        if (!t.hasOwnProperty(i)) continue;
                        let o = t[i].split(":"),
                            l = o[0].replace(/\s/g, "");
                        if ("" !== (null != (r = l) && "string" == typeof r ? r.trim() : r)) switch (l) {
                            case "letter-spacing":
                                e.idle.letterSpacing = o[1];
                                break;
                            case "text-align":
                                e.idle.textAlign = o[1];
                                break;
                            case "text-shadow":
                                -1 === o[1].indexOf("none") && (a += t[i]);
                                break;
                            case "font-size":
                                e.idle.fontSize = o[1];
                                break;
                            case "font-weight":
                                e.idle.fontWeight = o[1];
                                break;
                            case "line-height":
                                e.idle.lineHeight = o[1];
                                break;
                            case "z-index":
                                e.position.zIndex = o[1];
                                break;
                            case "background":
                                o[1].indexOf("gradient") >= 0 || o[1].indexOf("rgb") >= 0 || o[1].indexOf("#") ? e.idle.backgroundColor = o[1].replaceAll("-webkit-", "").trim() : a += t[i] + ";";
                                break;
                            case "-webkit-background-clip":
                                e.idle.backgroundClip = o[1].replaceAll("-webkit-", "").trim();
                                break;
                            case "background-clip":
                                e.idle.backgroundClip = o[1];
                                break;
                            case "-webkit-text-fill-color":
                                e.idle.textFillColor = o[1].replaceAll("-webkit-", "").trim();
                                break;
                            case "text-fill-color":
                                e.idle.textFillColor = o[1];
                                break;
                            default:
                                a += t[i] + ";"
                        }
                    }
                    e.customCSS = a
                }
            } catch (e) {}
            var r;
            return e
        })(a);
        let p = "zone" == d ? a.position ? .zIndex ? ? a.group ? .groupOrder ? ? -1 : a.position ? .zIndex ? ? void 0;
        p = "zone" == d ? p < 1 ? -1 : p + 1 : p;
        var m = {
            rTo: a.behavior ? .baseAlign ? ? ("zone" == d ? "slide" : ""),
            fluid: {
                tx: a.behavior ? .autoResponsive ? ? !0,
                tr: a.behavior ? .autoResponsive ? ? !0,
                sp: "row" != d && "column" != d && (a.behavior ? .responsiveOffset ? ? !0)
            },
            id: a.uid ? ? "",
            alias: a.alias ? ? "",
            type: a.type,
            subtype: "row" == d || "column" == d || "group" == d | "zone" == d ? d : "button" == d ? "button" : a.subtype ? ? "",
            content: "text" == a.type || "button" == a.type ? SR7.D.contentOBJ("text", {
                text: a.text ? ? "",
                ph: a.placeholder ? ? "",
                deco: a.idle ? .textDecoration ? ? "none",
                trans: a.idle ? .textTransform ? ? "none"
            }) : "image" == a.type ? SR7.D.contentOBJ("image", {
                src: a.media ? .imageUrl,
                lib: a.media ? .imageLib ? ? "",
                lib_id: a.media ? .imageId,
                fromStream: a.media ? .imageFromStream,
                streamType: l ? ? "gallery",
                size: "cover-proportional" == a.size ? .covermode || "cover" == a.size ? .covermode || a.size.originalWidth && a.size.originalHeight && 1e3 * Math.round(a.size.originalWidth / a.size.originalHeight) / 1e3 != Math.round(parseInt(a.size ? .width ? .d ? .v ? ? 1) / parseInt(a.size ? .height ? .d ? .v ? ? 1) * 1e3) / 1e3 ? "cover" : "contain"
            }) : "svg" == a.type ? SR7.D.contentOBJ(a.type, {
                full: a.svg,
                src: a.svg ? .source,
                oC: a.idle ? .svg ? .originalColor ? ? !1,
                color: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .svg ? .color ? ? "#ffffff", "#ffffff"), 5),
                all: a.idle ? .svg ? .styleAll ? ? !1,
                stroke: {
                    c: a.idle ? .svg ? .strokeColor ? ? "transparent",
                    d: a.idle ? .svg ? .strokeDashArray ? ? 0,
                    o: a.idle ? .svg ? .strokeDashOffset ? ? 0,
                    w: a.idle ? .svg ? .strokeWidth ? ? 0
                }
            }) : "video" == a.type || "audio" == a.type ? SR7.D.contentOBJ(a.type, {
                type: (a.media ? .mediaType ? ? "html5").replace("stream", ""),
                src: "audio" == a.type ? a.media ? .audioUrl ? ? "" : "html5" == (a.media ? .mediaType ? ? "html5").toLowerCase() ? a.media ? .mp4Url ? ? "" : a.media ? .id ? ? "A",
                controls: 1 == (a.media ? .controls ? ? !1) ? 1 == (a.media ? .largeControls ? ? !0) ? "s+xl" : "s" : 0 == (a.media ? .largeControls ? ? !0) ? "none" : "xl",
                autoPlay: a.media ? .autoPlay ? ? !0,
                pauseTimer: a.media ? .pausetimer ? ? !1,
                start: a.media ? .startAt ? ? "",
                end: a.media ? .endAt ? ? "",
                nextSlide: a.media ? .nextSlideAtEnd ? ? !0,
                stopAllMedia: a.media ? .stopAllVideo ? ? !0,
                loop: a.media ? .loop ? ? !0,
                preload: a.media ? .preload ? ? "auto",
                preloadWait: a.media ? .preloadWait ? ? "0",
                rewind: a.media ? .forceRewind ? ? !0,
                volume: a.media ? .volume ? ? "100",
                poster: {
                    src: a.media ? .posterUrl ? ? a.media ? .thumbs ? .veryBig ? .url ? ? "",
                    lib: a.media ? .imageLib ? ? "",
                    lib_id: a.media ? .posterId ? ? "",
                    lib_size: a.behavior ? .imageSourceType ? ? "full",
                    fromStream: (a.media ? .poster ? .posterFromStream ? ? !1) || (a.media.posterFromStream ? ? !1),
                    showOnPause: a.media ? .posterOnPause ? ? "" !== (a.media ? .posterUrl ? ? a.media ? .thumbs ? .veryBig ? .url ? ? ""),
                    insteadVideo: a.media ? .posterOnMobile ? ? !1,
                    noOnMobile: a.media ? .disableOnMobile ? ? !1
                },
                fromStream: !(null != (a.media ? .videoFromStream ? ? void 0) || !(a.media ? .mediaType ? ? "").includes("stream")) || (a.media ? .videoFromStream ? ? !1),
                streamType: l.type ? ? "gallery",
                noInteract: a.media ? .nointeraction ? ? !1,
                cover: !!(a.media ? .fitCover ? ? "html5" == (a.media ? .mediaType ? ? "html5").toLowerCase()) || ("cover-proportional" == a.size ? .covermode || "cover" == a.size ? .covermode),
                aFullScreen: a.media ? .allowFullscreen ? ? !0,
                args: a.media ? .args ? ? "",
                fullWidth: a.media ? .fullWidth ? ? !1,
                mute: a.media ? .mute ? ? "true" === String(a.media ? .autoPlay),
                ratio: a.media ? .ratio ? ? "16:9",
                inline: a.media ? .playInline ? ? !0,
                speed: a.media ? .speed ? ? 1,
                pauseOnSwap: a.media ? .pauseOnSlideChange ? ? !1
            }) : {},
            tag: a.htmltag ? ? "sr7-layer",
            blend: a.idle ? .filter ? .blendMode ? ? "normal",
            codes: {
                css: a.customCSS ? ? "",
                hovercss: a.customHoverCSS ? ? ""
            },
            libSrc: a.layerLibSrc ? ? "",
            size: {
                w: "column" == d || "row" == d ? new Array(5).fill("auto") : _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .width ? ? "auto", "fullwidth" == (a.size ? .covermode ? ? "") ? "100%" : "auto", "#a"), 5),
                h: "column" == d || "row" == d ? new Array(5).fill("auto") : _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .height ? ? "auto", "fullheight" == (a.size ? .covermode ? ? "") ? "100%" : "auto", "#a"), 5),
                maxW: _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .maxWidth ? ? "none", "none"), 5),
                maxH: _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .maxHeight ? ? "none", "none"), 5),
                minW: _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .minWidth ? ? "none", "none"), 5),
                minH: _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .minHeight ? ? "none", "none"), 5),
                oW: a.size ? .originalWidth ? ? void 0,
                oH: a.size ? .originalHeight ? ? void 0,
                aRatio: _tpt.fillArray(_tpt.DNTMtoArr(a.size ? .aspectRatio ? ? "auto", "auto"), 5),
                cMode: a.size ? .covermode ? ? "custom",
                sProp: a.size ? .scaleProportional ? ? ("image" == a.type || "svg" == a.type || "video" == a.type)
            },
            pos: {
                x: _tpt.fillArray(_tpt.DNTMtoArr(a.position ? .x ? ? 0), 5),
                y: _tpt.fillArray(_tpt.DNTMtoArr(a.position ? .y ? ? 0), 5),
                h: _tpt.fillArray(_tpt.DNTMtoArr(a.position ? .horizontal ? ? "left", "left"), 5),
                v: _tpt.fillArray(_tpt.DNTMtoArr("zone" == d ? a.alias.toLowerCase().replace(" rows", "") : a.position ? .vertical ? ? "top", "zone" == d ? a.alias.toLowerCase().replace(" rows", "") : "top"), 5),
                pos: a.position ? .position ? ? void 0,
                float: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .float ? ? "none", "none"), 5),
                clear: _tpt.DNTMtoArr(a.idle ? .clear ? ? "none", "none")
            },
            pid: n,
            zIndex: p,
            order: "zone" == d ? 0 : a.group ? .groupOrder ? ? void 0,
            attr: {
                a: a.attributes ? .alt ? ? "",
                aO: r(a.attributes ? .altOption ? ? "media_library"),
                id: a.attributes ? .id ? ? void 0,
                iClass: a.runtime ? .internalClass ? ? "",
                class: a.attributes ? .classes ? ? "",
                rel: a.attributes ? .rel ? ? "",
                tabIndex: a.attributes ? .tabIndex ? ? 0,
                t: a.attributes ? .title ? ? "",
                tO: r(a.attributes ? .titleOption ? ? "media_library"),
                wrapClass: a.attributes ? .wrapperClasses ? ? "",
                wrapId: a.attributes ? .wrapperId ? ? ""
            },
            style: a.idle ? .style ? ? "",
            display: "absolute" == a.position ? .position && "shape" == a.type && -1 == n ? ["block", "block", "block", "block", "block"] : a.idle ? .display ? ? ["block", "block", "block", "block", "block"],
            tA: _tpt.DNTMtoArr(a.idle ? .textAlign ? ? "left", "left"),
            vA: a.idle ? .verticalAlign ? ? "top",
            oflow: a.idle ? .overflow ? ? "visible",
            cursor: a.idle ? .cursor ? ? "cursor",
            pE: a ? .hover ? .pointerEvents ? ? "auto",
            uS: "default",
            bg: {
                color: _tpt.gradient.convert(a.idle ? .backgroundColor ? ? "transparent"),
                image: SR7.D.contentOBJ("image", {
                    src: a.idle ? .backgroundImage ? ? "",
                    lib: a.idle ? .imageLib ? ? "",
                    lib_id: a.idle ? .backgroundImageId ? ? "",
                    fromStream: a.idle ? .bgFromStream ? ? !1,
                    pos: SR7.D.convertBGPosObj(a.idle ? .backgroundPosition ? ? "50% 50%"),
                    repeat: a.idle ? .backgroundRepeat ? ? "no-repeat",
                    size: a.idle ? .backgroundSize ? ? "cover",
                    sizeVal: a.idle && "percentage" == a.idle.backgroundSize ? parseInt(a.idle ? .backgroundSizePerc ? ? 100) + "%" : a.idle && "pixel" == a.idle.backgroundSize ? parseInt(a.idle ? .backgroundSizePix ? ? a.idle ? .backgroundSizePerc ? ? 100) + "px" : 0
                }),
                bClip: a.idle ? .backgroundClip ? ? "none",
                tFCol: a.idle ? .textFillColor ? ? "none"
            },
            px: {
                use: a.effects ? .parallax ? ? !1,
                time: a.timeline ? .scrollBased ? ? "default",
                so: a.timeline ? .scrollBasedOffset ? ? "0ms",
                eff: a.effects ? .effect ? ? "default",
                aBG: "false" == String(a.effects ? .parallax ? ? !1) && (a.effects ? .attachToBg ? ? !1),
                m: a.effects ? .pxmask ? ? !1
            }
        };
        (SR7.E.backend || void 0 !== a.visibility) && (m.vis = _tpt.DNTMtoArr(a.visibility ? ? !0, !0)), (SR7.E.backend || void 0 !== a.visibility) && (m.viSH = a.visibility.onlyOnSlideHover ? ? !1), (SR7.E.backend || void 0 !== a.visibility) && (m.viOC = a.visibility.alwaysOnCarousel ? ? !1), (SR7.E.backend || void 0 !== a.addOns) && (m.addOns = {});
        for (let e in a.addOns) {
            if (!_tpt.hop(a.addOns, e)) continue;
            let t = e.replace("revslider-", "").replace("-addon", ""),
                r = SR7.migrate.Addon("layer", a.addOns[e], t);
            void 0 !== r && (m.addOns[t] = r)
        }
        "row" == d && (m.break = SR7.D.olevels[a.group.columnbreakat ? ? "tablet"]), "column" == d && (m.size.col = a.group ? .columnSize ? ? "1/3");
        var c, f = ["d", "d", "n", "t", "m"];
        if ((SR7.E.backend || a.idle ? .rotationX && 0 !== a.idle.rotationX) && (m.tr = m.tr || {}) && (m.tr.rX = a.idle ? .rotationX || 0), (SR7.E.backend || a.idle ? .rotationY && 0 !== a.idle.rotationY) && (m.tr = m.tr || {}) && (m.tr.rY = a.idle ? .rotationY || 0), (SR7.E.backend || a.idle ? .rotationZ && 0 !== a.idle.rotationZ) && (m.tr = m.tr || {}) && (m.tr.rZ = a.idle ? .rotationZ || 0), (SR7.E.backend || a.idle ? .opacity && 0 !== a.idle.opacity) && (m.tr = m.tr || {}) && (m.tr.o = a.idle ? .opacity || 0), (SR7.E.backend || m.tr) && (m.tr.fix = a.idle ? .filtersIOSFix || "d"), "none" !== (a.media ? .dotted ? ? "none") && (m.overlay = {
                type: a.media.dotted ? ? "none",
                size: a.media.dottedSize ? ? 1,
                colorA: a.media.dottedColorA ? ? "transparent",
                colorB: a.media.dottedColorB ? ? "#000000"
            }), (s || void 0 !== (a.timeline ? .static ? .start ? ? void 0)) && (m.sStart = a.timeline ? .static ? .start ? ? 1), (s || void 0 !== (a.timeline ? .static ? .end ? ? void 0)) && (m.sEnd = a.timeline ? .static ? .end ? ? "last"), (s || void 0 !== (a.position ? .staticZ ? ? void 0)) && (m.sZ = a.position.staticZ), void 0 !== a.idle) {
            if (void 0 !== a.idle.borderStyle) {
                var u = !1;
                for (c = 1; c < 5; c++) u = u || "none" !== a.idle.borderStyle[f[c]] ? .v && void 0 !== a.idle.borderStyle[f[c]] ? .v;
                if (u)
                    for (m.border = {
                            s: Array(5),
                            c: a.idle.borderColor,
                            w: {
                                t: _tpt.DNTMtoArr(a.idle.borderWidth ? .[0] ? ? 0, 0, "#a"),
                                r: _tpt.DNTMtoArr(a.idle.borderWidth ? .[1] ? ? 0, 0, "#a"),
                                b: _tpt.DNTMtoArr(a.idle.borderWidth ? .[2] ? ? 0, 0, "#a"),
                                l: _tpt.DNTMtoArr(a.idle.borderWidth ? .[3] ? ? 0, 0, "#a")
                            }
                        }, c = 0; c < 5; c++) m.border.s[c] = a.idle.borderStyle[f[c]] ? .v
            }
            if (void 0 !== a.idle.borderRadius) {
                for (u = !1, c = 0; c < 4; c++) u = u || 0 !== a.idle.borderRadius[c] ? .v;
                u && (m.radius = {
                    t: a.idle.borderRadius.v ? .[0] ? ? 0,
                    r: a.idle.borderRadius.v ? .[1] ? ? 0,
                    b: a.idle.borderRadius.v ? .[2] ? ? 0,
                    l: a.idle.borderRadius.v ? .[3] ? ? 0
                })
            }
        }
        if ("text" == m.type || "row" == m.subType || "column" == m.subType)
            for (m.ws = Array(5), c = 0; c < 5; c++) m.ws[c] = a.idle.whiteSpace ? .[f[c]] ? .v ? ? ("text" == m.type ? "nowrap" : "normal");
        for (c = 0; c < 5; c++) {
            var g = 0;
            for (var v of (m.m ? ? = {}, m.p ? ? = {}, ["t", "r", "b", "l"])) m.m[v] ? ? = Array(5), m.p[v] ? ? = Array(5), m.m[v][c] = a.idle ? .margin ? .[f[c]] ? .v ? .[g] || 0, m.p[v][c] = a.idle ? .padding ? .[f[c]] ? .v ? .[g] || 0, g++
        }
        return (SR7.E.backend || a.idle ? .boxShadow ? .inuse) && (m.bShdw = {
            use: a.idle ? .boxShadow ? .inuse ? ? !1,
            on: a.idle ? .boxShadow ? .container ? ? "content",
            h: _tpt.DNTMtoArr(a.idle ? .boxShadow ? .hoffset ? ? 0, 0, "#a"),
            v: _tpt.DNTMtoArr(a.idle ? .boxShadow ? .voffset ? ? 0, 0, "#a"),
            blur: _tpt.DNTMtoArr(a.idle ? .boxShadow ? .blur ? ? 0, 0, "#a"),
            spread: _tpt.DNTMtoArr(a.idle ? .boxShadow ? .spread ? ? 0, 0, "#a"),
            color: a.idle ? .boxShadow ? .color ? ? "rgba(0,0,0,0.25)"
        }), (SR7.E.backend || "" + (a.hover ? .usehover ? ? !1) != "false") && (m.hov = {
            u: a.hover.usehover ? ? !1,
            m: a.hover.usehovermask ? ? !1,
            zIndex: a.hover.zIndex ? ? "auto",
            deco: a.hover.textDecoration ? ? "none",
            color: {
                c: a.hover.color ? ? "#ffffff",
                bg: _tpt.gradient.convert(a.hover.backgroundColor ? ? "transparent"),
                gAnim: a.hover.gradientStyle ? ? "fading"
            },
            border: {
                c: a.hover.borderColor ? ? "transparent",
                s: a.hover.borderStyle ? ? "none",
                w: {
                    t: _tpt.DNTMtoArr(a.hover.borderWidth ? .[0] ? ? 0, 0, "#a"),
                    r: _tpt.DNTMtoArr(a.hover.borderWidth ? .[1] ? ? 0, 0, "#a"),
                    b: _tpt.DNTMtoArr(a.hover.borderWidth ? .[2] ? ? 0, 0, "#a"),
                    l: _tpt.DNTMtoArr(a.hover.borderWidth ? .[3] ? ? 0, 0, "#a")
                }
            },
            radius: {
                t: a.hover.borderRadius ? .v ? .[0] ? ? 0,
                r: a.hover.borderRadius ? .v ? .[1] ? ? 0,
                b: a.hover.borderRadius ? .v ? .[2] ? ? 0,
                l: a.hover.borderRadius ? .v ? .[3] ? ? 0
            },
            frame: {
                o: a.hover.opacity ? ? 1,
                oX: a.hover.originX ? ? "50%",
                oY: a.hover.originY ? ? "50%",
                oZ: a.hover.originZ ? ? "50%",
                x: a.hover.x ? ? "inherit",
                y: a.hover.y ? ? "inherit",
                z: a.hover.z ? ? "inherit",
                rZ: 0 == (a.hover.rotationZ ? ? 0) ? "inherit" : a.hover.rotationZ ? ? 0,
                rX: 0 == (a.hover.rotationX ? ? 0) ? "inherit" : a.hover.rotationX ? ? 0,
                rY: 0 == (a.hover.rotationY ? ? 0) ? "inherit" : a.hover.rotationY ? ? 0,
                sX: 1 == (a.hover.scaleX ? ? 1) ? "inherit" : a.hover.scaleX ? ? 1,
                sY: 1 == (a.hover.scaleY ? ? 1) ? "inherit" : a.hover.scaleY ? ? 1,
                skX: a.hover.skewX ? ? 0,
                skY: a.hover.skewY ? ? 0,
                d: a.hover.speed ? ? 300,
                e: "default" == a.hover.ease ? "power1.out" : a.hover.ease ? ? "power1.out"
            },
            filter: {
                g: a.hover.filter ? .grayscale ? ? 0,
                r: a.hover.filter ? .brightness ? ? 100,
                b: a.hover.filter ? .blur ? ? 0
            },
            svg: {
                c: a.hover.svg ? .color ? ? "#ffffff",
                stroke: {
                    c: a.hover.svg ? .strokeColor ? ? "transparent",
                    d: a.hover.svg ? .strokeDashArray ? ? 0,
                    o: a.hover.svg ? .strokeDashOffset ? ? 0,
                    w: a.hover.svg ? .strokeWidth ? ? 0
                }
            }
        }), "text" == m.type && ((SR7.E.backend || a.idle ? .textShadow ? .inuse) && (m.tShdw = {
            use: a.idle ? .textShadow ? .inuse ? ? !1,
            h: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .textShadow ? .hoffset ? ? 0), 5),
            v: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .textShadow ? .voffset ? ? 0), 5),
            blur: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .textShadow ? .blur ? ? 0), 5),
            color: a.idle ? .textShadow ? .color ? ? "rgba(0,0,0,0.25)"
        }), (SR7.E.backend || a.idle ? .textStroke ? .inuse) && (m.tStroke = {
            use: a.idle ? .textStroke ? .inuse ? ? !1,
            w: _tpt.fillArray(_tpt.DNTMtoArr(a.idle ? .textStroke ? .width ? ? 1, "#a"), 5),
            c: a.idle ? .textStroke ? .color ? ? "rgba(0,0,0,0.25)"
        }), (SR7.E.backend || a.toggle ? .set) && (m.tog = {
            t: a ? .toggle ? .text ? ? "",
            u: a ? .toggle ? .set ? ? !1,
            h: a ? .toggle ? .useHover ? ? !1,
            i: a ? .toggle ? .inverse ? ? !1
        }), m.color = _tpt.DNTMtoArr(a.idle ? .color ? ? "#ffffff", "#ffffff"), m.font = {
            family: a.idle ? .fontFamily ? ? "Roboto",
            style: a.idle ? .fontStyle ? ? !1,
            size: _tpt.DNTMtoArr(a.idle ? .fontSize ? ? 20, 20, "#a"),
            weight: _tpt.DNTMtoArr(a.idle ? .fontWeight ? ? 400, 400),
            ls: _tpt.DNTMtoArr(a.idle ? .letterSpacing ? ? 0, 0)
        }), (SR7.E.backend || a.idle ? .spikeUse) && (m.spike = {
            use: a.idle ? .spikeUse ? ? !1,
            l: a.idle ? .spikeLeft ? ? "none",
            r: a.idle ? .spikeRight ? ? "none",
            lw: a.idle ? .spikeLeftWidth ? ? 10,
            rw: a.idle ? .spikeRightWidth ? ? 10
        }), (a.timeline ? .frames ? .frame_1 ? .explodinglayers ? .use || a.timeline ? .frames ? .frame_999 ? .explodinglayers ? .use) && (m.addOns ? ? = {}, m.addOns.explodinglayers ? ? = SR7.migrate.Addon("layer", {
            enabled: !0
        }, "explodinglayers")), "container" != m.type && "text" != m.type || (m.lh = _tpt.DNTMtoArr(a.idle ? .lineHeight ? ? 25, 25, "#a")), m.tl = SR7.migrate.timelines({
            dLEN: t,
            o: a,
            type: m.type,
            subtype: m.subtype,
            ouid: a.uid,
            sid: o,
            dtext: m.content ? .text ? ? "",
            global: !!s && {
                s: m.sStart,
                e: m.sEnd
            }
        }), m = SR7.migrate.action(a, m, o)
    }, SR7.migrate.action = (e, t, r, a) => {
        if (e.actions ? .action) {
            SR7.migrate.actions ? ? = [];
            for (let i in e.actions.action) {
                let o = e.actions.action[i].action,
                    l = {
                        a: SR7.migrate.actnames[o] || o
                    };
                o.includes("share_") && (l.shr = o.replace("share_", ""), l.shrlink = e.actions.action[i][l.shr + "_link"], l.ltype = "a", l.target = "_blank");
                for (let t in e.actions.action[i]) {
                    if (!_tpt.hop(e.actions.action[i], t)) continue;
                    if ("action" == t) continue;
                    let r = SR7.migrate.actrans[t] ? ? t;
                    r.includes("target_") && (r = "target"), null == l.shr && "link" == r && "menu_link" !== t && "menu" !== t && "image_link" !== t || !(null == SR7.migrate.actused[o] || SR7.migrate.actused.default.indexOf(SR7.migrate.actrans[t]) >= 0 || SR7.migrate.actused[o].indexOf(SR7.migrate.actrans[t]) >= 0) || (l[r] = e.actions.action[i][t]), "toggle_layer" == o && (l.scn = "in", l.scm = "out"), "layer_target" != t || Array.isArray(l.target) || (l.target = [l.target]), "simulate_click" == o && (l.typ = "click"), "start_in" == o && (l.sc = "in"), "start_out" == o && (l.sc = "out")
                }
                l.msl && String(l.msl).replace("rs-", "") !== SR7.D.fixSR6IDs(String(l.msl).replace("rs-", "")) && (l.msl = "#" + SR7.D.fixSR6IDs(String(l.msl).replace("rs-", ""))), l.src = [a ? ? e.uid], t.listen ? ? = [], -1 == t.listen.indexOf(l.evt) && t.listen.push(l.evt), SR7.migrate.actioncache ? ? = {}, SR7.migrate.actioncache[r] = _tpt.extndArrWithObj(SR7.migrate.actioncache[r], l, "src", "target")
            }
        }
        return t
    };
    let i = e => ({
        type: "shape",
        uid: e,
        behavior: {
            baseAlign: "slide"
        },
        size: {
            covermode: "cover",
            width: {
                d: {
                    v: "100%"
                },
                m: {
                    v: "100%"
                },
                t: {
                    v: "100%"
                },
                n: {
                    v: "100%"
                }
            },
            height: {
                d: {
                    v: "100%"
                },
                m: {
                    v: "100%"
                },
                t: {
                    v: "100%"
                },
                n: {
                    v: "100%"
                }
            }
        },
        idle: {
            backgroundColor: "transparent"
        },
        timeline: {
            frameOrder: [{
                id: "frame_0",
                start: -1
            }, {
                id: "frame_1",
                start: 0
            }, {
                id: "frame_999",
                start: 9e3
            }],
            frames: {
                frame_0: {
                    transform: {
                        opacity: 0
                    },
                    timeline: {
                        speed: 300,
                        start: 0,
                        startRelative: 0
                    }
                },
                frame_1: {
                    transform: {
                        opacity: 1
                    },
                    timeline: {
                        speed: 300,
                        start: 0,
                        startRelative: 0,
                        frameLength: 300
                    }
                },
                frame_999: {
                    transform: {
                        opacity: 0
                    },
                    timeline: {
                        speed: 300,
                        start: 9e3,
                        startRelative: 0,
                        endWithSlide: !0,
                        frameLength: 300
                    }
                }
            }
        }
    });

    function o(e, t, r, a) {
        let i = t ? Array.isArray(t) ? t[a] : t : void 0;
        if (!i) return;
        let [o, l] = String(i).includes(":") ? i.split(":") : [r, i];
        return "frame_1" === e || "frame_0" === e ? "in" : "frame_999" === e ? "out" : SR7.migrate.framesToScene[o] && SR7.migrate.framesToScene[o][l] ? SR7.migrate.framesToScene[o][l][e] : e
    }
    SR7.migrate.layerListUpdate = e => {
        let {
            layers: t,
            isStatic: r,
            params: a,
            newIDs: o,
            msource: l,
            sid: s,
            snow: n
        } = e;
        if (null == t) return;
        const d = {};
        let p, m, c = {};
        for (m in t) _tpt.hop(t, m) && ("top" !== t[m].uid && "bottom" !== t[m].uid && "middle" !== t[m].uid && void 0 !== t[m].group && (o.m = Math.max(o.m, t[m].uid), -1 !== (p = t[m].group.puid || ("row" == t[m].type ? "top" : -1)) && (c[p] = !0)), void 0 !== t[m].group && (t[m].group.ptype = "" + (t[m] ? .group ? .puid ? ? -1) == "-1" ? -1 : "row" == t[m].type ? "zone" : "column" == t[m].type ? "row" : t[t[m].group.puid].type));
        for (let e of ["top", "middle", "bottom"])
            if (c[e]) {
                if (o[e] = ++o.m, null == t[e]) {
                    let t = {
                        uid: o[e],
                        group: {
                            puid: -1,
                            groupOrder: 0
                        },
                        type: "zone",
                        alias: e + " rows"
                    };
                    d[o[e]] = SR7.D.layerObject({
                        id: !1,
                        obj: SR7.migrate.LayerObj({
                            o: t,
                            newIDs: o[e],
                            msource: l,
                            sid: s
                        })
                    })
                }
            } else delete t[e];
        for (let e in a.addOns) {
            if (!_tpt.hop(a.addOns, e)) continue;
            let t = e.replace("revslider-", "").replace("-addon", ""),
                r = _tpt.extend({}, a.addOns[e]),
                i = SR7.migrate.Addon("slide_new_layers", r, t, o.m + 1, s);
            void 0 !== i && (d[++o.m] = SR7.D.layerObject({
                id: !1,
                obj: i
            }))
        }
        if (n) {
            let e = "snow",
                t = _tpt.extend({}, n),
                a = SR7.migrate.Addon("slide_new_layers", t, e, o.m + 1, s, r);
            void 0 !== a && (d[++o.m] = SR7.D.layerObject({
                id: !1,
                obj: a
            }))
        }
        if (!0 !== r) {
            let e = {
                seo: _tpt.extend({}, a.seo)
            };
            if (e ? .seo ? .set && "front" === (e ? .seo ? .z ? ? "front")) {
                let t = i(o.m + 1);
                t.actions = SR7.migrate.getSEOSlideAction(e.seo), d[++o.m] = SR7.D.layerObject({
                    id: !1,
                    obj: SR7.migrate.LayerObj({
                        o: t,
                        newIDs: o.m,
                        msource: l,
                        sid: s
                    })
                }), d[o.m].zIndex = 150, d[o.m] = SR7.migrate.action(t, d[o.m], s, o.m), "jquery" != t.actions.action[0].link_type && "regular" === t.actions.action[0].type || (d[o.m].cursor = "pointer"), d[o.m].pE = "auto"
            }
            d[++o.m] = SR7.D.layerObject({
                id: !1,
                obj: SR7.migrate.SlideBG(a, o.m, l, s)
            });
            for (let e in a.addOns) {
                if (!_tpt.hop(a.addOns, e)) continue;
                let t = e.replace("revslider-", "").replace("-addon", ""),
                    r = SR7.migrate.Addon("slidebg", a.addOns[e], t);
                void 0 !== r && (d[o.m].addOns ? ? = {}, d[o.m].addOns[t] = r)
            }
        }
        return d
    }, SR7.migrate.getSEOSlideAction = e => ({
        action: "regular" == (e ? .type ? ? "regular") ? [{
            action: "link",
            tooltip_event: "click",
            link_help_in: e.linkHelp ? ? "auto",
            link_open_in: Array.isArray(e.target) ? e.target[0] : e.target ? ? "_self",
            link_follow: "follow",
            link_type: "l" == e.tag ? "jquery" : e.tag ? ? "jquery",
            image_link: SR7.D.fixSR6IDs(e ? .link ? ? "")
        }] : [{
            action: "jumpto",
            tooltip_event: "click",
            jump_to_slide: SR7.D.fixSR6IDs(e.slideLink),
            link_type: "l" == e.tag ? "jquery" : e.tag ? ? "jquery"
        }]
    }), SR7.migrate.transform = e => {
        let {
            trans: t,
            duration: r,
            time: a,
            addOns: i,
            loopfilter: o,
            ease: l,
            NRI: s,
            target: n,
            dynamic: d,
            ptype: p,
            bgcolor: m,
            color: c,
            repeat: f,
            reset: u,
            ignorexy: g,
            frame: v,
            framegroup: b,
            fx: y,
            tl: h,
            tlname: S
        } = e;
        t ? ? = {};
        var _ = {
            d: r,
            f: r,
            e: l,
            t: a
        };
        let R = SR7.D.splits.indexOf(n) >= 0;
        if ("clip" == n) return _.c = t.clip ? ? [100, 100, "inherit"][s], _.cb = t.clipB ? ? void 0, _;
        if ("mask" == n && 1 == t.use && !0 !== g ? (_.x = _tpt.fillArray(_tpt.DNTMtoArr(t.x ? ? [0, 0, "inherit"][s]), 5), _.y = _tpt.fillArray(_tpt.DNTMtoArr(t.y ? ? [0, 0, "inherit"][s]), 5), _.oflow = u ? "visible" : "hidden") : "mask" == n && (String(S).includes("scene") || "frame_0" !== v && "frame_1" !== v) && (_.oflow = "visible"), void 0 !== f && (_.rep = {
                s: f.s,
                r: f.r ? ? -1,
                sh: f.sh ? ? !0,
                y: f.y ? ? !1,
                c: f.c ? ? !1
            }), o && (t = o, n = "filter"), "content" == n && void 0 !== i && (_.addOns = _tpt.extend({}, i)), "filter" == n ? (_.fu = t.use ? ? !1, _.b = t.blur ? ? 0, _.g = t.grayscale ? ? 0, _.r = t.brightness ? ? 100, _.bu = t.bu ? ? !1, _.bb = t.bb ? ? 0, _.bg = t.bg ? ? 0, _.br = t.br ? ? 100, _.bs = t.bs ? ? 0, _.bi = t.bi ? ? 0) : "loop" == n && void 0 !== t.anchors && void 0 !== t.curv ? (_.anchors = t.anchors, _.curv = t.curv) : ("content" == n && "frame_999" == v && (_.pE = "n"), !0 !== g && "mask" !== n && (_.x = "loop" !== n || "loop" == n && void 0 !== t.x ? u ? [0, 0, 0, 0, 0] : _tpt.fillArray(_tpt.DNTMtoArr(t.x ? ? [0, 0, "inherit"][s], [0, 0, "inherit"][s]), 5) : void 0, _.y = "loop" !== n || "loop" == n && void 0 !== t.y ? u ? [0, 0, 0, 0, 0] : _tpt.fillArray(_tpt.DNTMtoArr(t.y ? ? [0, 0, "inherit"][s], [0, 0, "inherit"][s]), 5) : void 0, _.z = "loop" !== n || "loop" == n && void 0 !== t.z ? u ? 0 : t.z ? ? [0, 0, "inherit"][s] : void 0), "motionpath" !== b && (_ = _tpt.extend(_, {
                sX: "loop" !== n || "loop" == n && void 0 !== t.scaleX ? u ? 1 : t.scaleX ? ? [1, 1, "inherit"][s] : void 0,
                sY: "loop" !== n || "loop" == n && void 0 !== t.scaleY ? u ? 1 : t.scaleY ? ? [1, 1, "inherit"][s] : void 0,
                o: "loop" !== n || "loop" == n && void 0 !== t.opacity ? u ? R && "frame_1" == v ? 1 : 0 : t.opacity ? ? (R ? ["inherit", 1, "inherit"][s] : [0, 1, "inherit"][s]) : void 0,
                rX: "loop" !== n || "loop" == n && void 0 !== t.rotationX ? u ? 0 : t.rotationX ? ? [0, 0, "inherit"][s] : void 0,
                rY: "loop" !== n || "loop" == n && void 0 !== t.rotationY ? u ? 0 : t.rotationY ? ? [0, 0, "inherit"][s] : void 0,
                rZ: "loop" !== n || "loop" == n && void 0 !== t.rotationZ ? u ? 0 : t.rotationZ ? ? [0, 0, "inherit"][s] : void 0,
                skX: "loop" !== n || "loop" == n && void 0 !== t.skewX ? t.skewX ? ? [0, 0, "inherit"][s] : void 0,
                skY: "loop" !== n || "loop" == n && void 0 !== t.skewY ? t.skewY ? ? [0, 0, "inherit"][s] : void 0
            }), void 0 !== y && void 0 !== y.effect && (_.fx = (y.effect ? ? "blocktoright").replaceAll("blockto", "c"), _.fxc = y.color ? ? "#ffffff", _.fxe = l, _.fxs = r), void 0 !== m && (_.bgcol = _tpt.gradient.convert(m)), void 0 !== c && (_.col = c), "inherit" == _.o && h.length > 0 && (_.o = h[h.length - 1].o))), "filter" !== n && "loop" !== n) {
            _.xRe = [0, 0, 0, 0, 0], _.yRe = [0, 0, 0, 0, 0], _.off = 0, R && (t.fuse && (_.fu = !0, _.b = t.blur ? ? "0px", _.g = t.grayscale ? ? "0%", _.r = t.brightness ? ? "100%"), _.delay = t.delay ? ? 5, _.dir = SR7.migrate.stgTrans[t.direction ? ? "start"] ? ? t.direction ? ? "start"), _.off = "group" == p || "column" == p ? 1 : 0;
            for (let e = 0; e < 5; e++) R ? _.xRe[e] = _.yRe[e] = 1 : "zone" == p ? (_.xRe[e] = ("" + (_ ? .x ? .[e] ? ? "")).includes("%") ? 0 : 2, _.yRe[e] = ("" + (_ ? .y ? .[e] ? ? "")).includes("%") ? 0 : 2) : "row" == p ? (_.xRe[e] = ("" + (_ ? .x ? .[e] ? ? "")).includes("%") ? 0 : 1, _.yRe[e] = ("" + (_ ? .y ? .[e] ? ? "")).includes("%") ? 0 : 1) : (["left", "right"].indexOf(_.x ? .[e] ? ? "") >= 0 && (_.xRe[e] = "group" == p ? 1 : "column" == p ? 4 : 2), ["bottom", "top"].indexOf(_.y ? .[e] ? ? "") >= 0 && (_.yRe[e] = 1))
        }
        if (d)
            for (var w in d) {
                if (!_tpt.hop(d, w) && !d[w]) continue;
                let e;
                if ("content" !== n ? w.includes(n) && (e = w.replace(n, "").toLocaleLowerCase()) : e = w.replace("rotation", "r").replace("skew", "sk"), void 0 !== e && "object" == typeof _[e])
                    for (let t = 0; t < 5; t++) "undefined" !== _[e][t] ? _[e][t] = "(" + _[e][t] + ")" : void 0 !== _[e] && (_[e] = "(" + _[e] + ")")
            }
        return _
    }, SR7.migrate.timelines = e => {
        let r, a, {
                dLEN: i,
                o: o,
                type: l,
                subtype: s,
                ouid: n,
                sid: d,
                dtext: p,
                global: m
            } = e,
            c = {},
            f = {
                converted: {},
                tIndex: 0,
                timelines: Array(20),
                ptype: o ? .group ? .ptype ? ? -1,
                dif: {},
                zone: "container" == l && "group" !== s && "column" !== s && "row" !== s
            };
        if (f.timelines[f.tIndex] = {
                id: "in",
                name: "in",
                counter: {}
            }, void 0 !== o.timeline && void 0 !== o.timeline.frameOrder && "frame_0" !== o.timeline ? .frameOrder[0] ? .id && o.timeline.frameOrder.unshift({
                id: "frame_0"
            }), void 0 !== o.timeline && void 0 !== o.timeline.frameOrder) {
            let e = {};
            for (let t in o.timeline.frameOrder) {
                let a = o.timeline.frameOrder[t].id,
                    i = o.timeline.frames[a];
                for (r of SR7.D.TLTargets) "filter" == r ? (e.filter = e.filter || void 0 !== i.filter && 1 == i.filter.use, (e.filter || i.bfilter && i.bfilter.use) && (i.filter ? ? = {}, void 0 !== i.bfilter && (i.filter.bu = i.bfilter.use ? ? !1, i.filter.bb = i.bfilter.blur, i.filter.bg = i.bfilter.grayscale, i.filter.br = i.bfilter.brightness, i.filter.bs = i.bfilter.sepia, i.filter.bi = i.bfilter.invert), e.filter = !0)) : "clip" == r && 1 == (o.timeline.clipPath ? .use ? ? !1) ? e.clip = !0 : i[r] ? .use && (e[r] = !0)
            }
            if (f = _tpt.extend(f, SR7.migrate.getTimeline({
                    dLEN: i,
                    source: o.timeline,
                    tUsed: e,
                    C: f,
                    dtext: p,
                    ouid: n,
                    framegroup: "all",
                    sid: d,
                    global: m
                })), t(f), f.oIndex = f.tIndex, o.timeline.loop) {
                f.tIndex = 0;
                let {
                    loop_group_a: e,
                    loop_group_b: t,
                    loop_group_c: r,
                    loop_group_o: a,
                    diff_yoyo: i,
                    motionpath: l
                } = SR7.migrate.convertLoop(o.timeline.loop);
                if (void 0 !== e || l) {
                    let o;
                    if (f = _tpt.extend(f, SR7.migrate.getTimeline({
                            source: e,
                            dtext: p,
                            onlyTarget: "loop",
                            C: f,
                            framegroup: "all"
                        })), void 0 !== r && (f = _tpt.extend(f, SR7.migrate.getTimeline({
                            source: r,
                            dtext: p,
                            onlyTarget: "loop",
                            C: f,
                            framegroup: "motionpath"
                        }))), void 0 !== t)
                        if ("yoyo_rotate" == i || "yoyo_move" == i)
                            for (let e of "yoyo_rotate" == i ? ["rotationX", "rotationY", "rotationZ"] : ["x", "y", "z"]) !1 !== (o = SR7.migrate.oneAttrLoop(t, e, 0)) && (f = _tpt.extend(f, SR7.migrate.getTimeline({
                                source: o,
                                dtext: p,
                                onlyTarget: "loop",
                                C: f,
                                framegroup: e,
                                ignorexy: "x" !== e && "y" !== e && "z" !== e
                            })));
                        else if ("yoyo_scale" == i)
                        for (let e of ["scaleX", "scaleY", "skewX", "skewY"]) !1 !== (o = SR7.migrate.oneAttrLoop(t, e, "scaleX" == e || "scaleY" == e ? 1 : 0)) && (f = _tpt.extend(f, SR7.migrate.getTimeline({
                            source: o,
                            dtext: p,
                            onlyTarget: "loop",
                            C: f,
                            framegroup: e,
                            ignorexy: !0
                        })));
                    a && !1 !== (o = SR7.migrate.oneAttrLoop(a, "opacity", 0)) && (f = _tpt.extend(f, SR7.migrate.getTimeline({
                        source: a,
                        dtext: p,
                        onlyTarget: "loop",
                        C: f,
                        framegroup: "opacity"
                    }))), f = _tpt.extend(f, SR7.migrate.getTimeline({
                        source: void 0 !== a ? a : e,
                        dtext: p,
                        onlyTarget: "loop",
                        C: f,
                        framegroup: "filter"
                    }))
                }
                f.tIndex = f.oIndex
            }
        }
        for (var u = 0; u <= f.tIndex; u++)
            for (r of SR7.D.TLTargets)
                if (void 0 !== f.converted[f.timelines[u].id] ? .[r]) {
                    for (let e in f.converted[f.timelines[u].id][r]) {
                        if ("pers" == e || "orig" == e) continue;
                        let t = f.converted[f.timelines[u].id][r][e];
                        a = t.length;
                        for (let e of ["rX", "rY", "rZ", "skX", "skY", "z", "fb", "sX", "sY"])
                            for (let i = 0; i < a; i++) null !== t[i] && void 0 !== t[i] && (void 0 !== f.dif[r] && 0 == f.dif[r][e] || "inherit" == t[i][e]) && delete t[i][e]
                    }
                    c[f.timelines[u].id] ? ? = {}, c[f.timelines[u].id][r] = SR7.D.layerTLObject(f.converted[f.timelines[u].id][r], r)
                }
        if (c ? .in ? .loop ? .all) {
            let e = c.in.loop.all[2],
                t = c.in.loop.all[3];
            if (e && t) {
                let r = 0;
                for (let a of ["x", "y", "rX", "rY", "rZ", "skX", "skY", "z", "fb", "sX", "sY"]) {
                    let i = "sX" == a || "sY" == a ? 1 : 0;
                    if ("x" == a || "y" == a) {
                        for (let o in e[a])
                            if ((void 0 !== e[a][o] && void 0 !== t[a][o] && e[a][o] !== t[a][o] || e[a][o] !== i) && (r = 1), 0 !== r) break
                    } else void 0 !== e[a] && void 0 !== t[a] && e[a] !== t[a] && (r = 1), void 0 !== e[a] && e[a] !== i && (r = 1);
                    if (0 !== r) break
                }
                0 == r && delete c.in.loop.all
            }
        }
        if (c ? .in ? .loop ? .filter) {
            let e = c.in.loop.filter ? .[2],
                t = c.in.loop.filter ? .[3];
            if (e && t) {
                let r = 0;
                for (let a of ["bb", "bg", "bi", "br", "bs", "bu", "fu"]) {
                    let i = "br" == a ? 100 : 0;
                    if ("bu" == a || "fu" == a ? (void 0 !== e[a] && void 0 !== t[a] && e[a] !== t[a] || !1 !== e[a] && void 0 !== e[a]) && (r = 1) : (void 0 !== e[a] && void 0 !== t[a] && e[a] !== t[a] && (r = 1), void 0 !== e[a] && e[a] !== i && (r = 1)), 0 !== r) break
                }
                0 == r && delete c.in.loop.filter
            }
        }
        return c
    }, SR7.migrate.getTimeline = (e = {}) => {
        let {
            dLEN: t = 9e3,
            source: r,
            tUsed: a,
            C: i,
            framegroup: o,
            onlyTarget: l,
            ignorexy: s,
            ouid: n,
            sid: d,
            dtext: p,
            global: m
        } = e;
        t = parseInt(t);
        let c, f, u, g, v, b = r ? .frames ? .frame_1 ? .timeline ? .actionTriggered ? ? !1,
            y = 0;
        SR7.migrate.framesToScene ? ? = {}, SR7.migrate.framesToScene[d] ? ? = {};
        let h, S = !(void 0 === r || void 0 === r.tloop || !r.tloop.use) && {
            f: r.tloop.from,
            t: r.tloop.to,
            r: r.tloop.repeat ? ? -1,
            sh: r.tloop.keep ? ? !1,
            y: r.tloop.yoyo ? ? !1,
            c: r.tloop.children ? ? !0
        };
        for (let e in r.frameOrder)
            for (u of (c = r.frameOrder[e].id, f = r.frames[c], m && m.e !== m.s && "frame_999" == c && (f.timeline.endWithSlide = !0), !m && "frame_999" == c && "" + (f ? .timeline ? .endWithSlide ? ? void 0) == "true" && parseInt(f.timeline ? .start ? ? t) < t && (f.timeline.endWithSlide = !1), "frame_0" !== c && "frame_1" !== c && "frame_999" !== c && 1 == (f.timeline ? .actionTriggered ? ? !1) ? (v = i.tIndex, i.timelines[++i.tIndex] = {
                    id: "scene_" + i.tIndex,
                    name: "Scene-" + i.tIndex,
                    counter: {}
                }, y = f ? .timeline ? .start ? ? 0) : "frame_999" == c && (v = i.tIndex, i.timelines[++i.tIndex] = {
                    id: "out",
                    name: "out",
                    counter: {}
                }, g = y, y = 0), 0 !== i.tIndex && "out" !== i.timelines[i.tIndex].name && (SR7.migrate.framesToScene[d][n] ? ? = {}, SR7.migrate.framesToScene[d][n][c] = i.timelines[i.tIndex].id), SR7.D.TLTargets)) {
                if (f.content = f.transform, "chars" == u || "words" == u || "lines" == u) {
                    if ("frame_999" !== c && "frame_0" !== c && "frame_1" !== c && void 0 !== f ? .[u] && !S && "false" == String(f[u].use)) continue;
                    if ("frame_0" == c && ("false" == ("" + r.frames.frame_1 ? .[u] ? .use ? ? !0) || null == (r.frames.frame_1 ? .[u] ? ? void 0))) continue;
                    0 == f[u] ? .use && (f[u].delay = 0), S && f[u] && "frame_999" !== c && null == f[u].delay && (f[u].delay = "frame_1" == c ? r.frames ? .frame_0 ? .[u] ? .delay ? ? 5 : "frame_0" == c ? 5 : 0)
                }
                if (void 0 !== l) {
                    if (u !== l) continue
                } else if ("content" !== u && !0 !== a[u]) continue;
                let e = "content" != u && "mask" != u || "frame_0" != c && "frame_1" != c ? "chars" == u || "words" == u || "lines" == u ? f ? .[u] ? .ease ? ? f ? .timeline ? .ease ? ? f ? .ease ? ? "power3.inOut" : f ? .timeline ? .ease ? ? f ? .ease ? ? ("frame_0" == c ? r ? .frames ? .frame_1 ? .timeline ? .ease ? ? "power3.inOut" : "power3.inOut") : r ? .frames ? .frame_1 ? .timeline ? .ease ? ? "power3.inOut";
                i.converted[i.timelines[i.tIndex].id] ? ? = {}, i.converted[i.timelines[i.tIndex].id][u] ? ? = "filter" == u ? {
                    all: []
                } : "clip" == u ? {
                    all: [],
                    orig: r.clipPath.origin ? ? "l",
                    type: "rectangle" == (r.clipPath.type ? ? "rectangle") ? "r" : "c"
                } : {
                    pers: r ? .frames ? .frame_0 ? .transform ? .transformPerspective ? ? "600px",
                    orig: {
                        x: r ? .frames ? .frame_0 ? .["loop" == u ? "loop" : "transform"] ? .originX ? ? "50%",
                        y: r ? .frames ? .frame_0 ? .["loop" == u ? "loop" : "transform"] ? .originY ? ? "50%",
                        z: r ? .frames ? .frame_0 ? .["loop" == u ? "loop" : "transform"] ? .originZ ? ? "0"
                    },
                    all: []
                }, "filter" !== u && (void 0 === f[u] || void 0 !== f[u] && null == f[u].opacity) && ("frame_0" == c && i.zone || "frame_999" == c) && (f[u] ? ? = {}, f[u].opacity = "content" == u && "all" == o && "frame_999" == c ? 0 : 1), i.converted[i.timelines[i.tIndex].id][u][o] ? ? = [];
                let t = i.converted[i.timelines[i.tIndex].id][u][o],
                    n = f ? .timeline ? .speed ? ? 300;
                if ("frame_0" !== c && void 0 !== f.words && "words" == u && "" !== p) {
                    SR7.migrate.tempEl ? ? = document.createElement("div"), SR7.migrate.tempEl.innerHTML = p, SR7.migrate.tempSplit = _tpt && _tpt.SplitText ? new _tpt.SplitText(SR7.migrate.tempEl, {
                        type: "words,chars,lines"
                    }) : new tpGS.SplitText(SR7.migrate.tempEl, {
                        type: "words,chars,lines"
                    });
                    let e = (f ? .timeline ? .frameLength ? ? 300) - 10 * (f[u].delay ? ? 5) * (SR7.migrate.tempSplit[u].length - 1);
                    n = Math.max(n, e)
                }
                let d, m = "content";
                f ? .color ? .use && (f ? .chars ? .use || f ? .words ? .use || f ? .lines ? .use) && (m = f ? .chars ? .use ? "chars" : f ? .words ? .use ? "words" : "lines");
                window.RVS && SR7.E.resources.explodinglayers;
                (f.explodinglayers && "content" == u && "frame_1" == c || "frame_999" == c && SR7.A ? .explodinglayers ? .getFrameBasics) && (d ? ? = {}, SR7.A ? .explodinglayers && (d.explodinglayers = SR7.A.explodinglayers ? .getFrameBasics(f.explodinglayers, "migrate"))), f.timeline ? .auto && r.frames ? .frame_0 ? .content && (r.frames.frame_0.content.opacity ? ? = 0), "frame_0" !== c && "frame_1" !== c && f.bgcolor ? .use && null == f.bgcolor ? .backgroundColor && void 0 !== h && 1 == h.use && (f.bgcolor.backgroundColor = "transparent"), h = f.bgcolor;
                const _ = SR7.migrate.transform({
                    trans: f.timeline ? .auto && "frame_999" == c ? "clip" == u ? r.frames.frame_0.content : r.frames.frame_0[u] : "clip" == u ? f.content : f[u],
                    loopfilter: "filter" == o && "loop" == u ? f.filter : void 0,
                    duration: f.timeline ? .auto && !f.timeline ? .actionTriggered && "frame_999" == c ? f.timeline ? .speed ? ? 300 : "frame_0" == c ? 0 : "content" == u || "mask" == u ? f ? .timeline ? .frameLength ? ? f ? .timeline ? .speed ? ? 300 : n,
                    time: "frame_0" == c && b ? "w" + (f ? .timeline ? .start ? ? 0) : "frame_999" == c && f.timeline.endWithSlide ? 0 : (f ? .timeline ? .start ? ? 0) - y,
                    ease: e,
                    fx: "in" != i.timelines[i.tIndex].id && "out" != i.timelines[i.tIndex].id || "content" != u ? void 0 : "frame_1" == c || "frame_999" == c ? f.sfx : void 0,
                    addOns: d,
                    NRI: "frame_0" === c ? 0 : "frame_1" === c ? 1 : 2,
                    target: u,
                    dynamic: f.reverseDirection,
                    autoOut: f.timeline ? .auto ? ? !1,
                    ptype: i.ptype,
                    bgcolor: "content" == u && void 0 !== f.bgcolor && 1 == f.bgcolor.use ? f.bgcolor.backgroundColor : void 0,
                    color: "content" != u && u != m || void 0 === f.color || 1 != f.color.use ? void 0 : f.color.color ? ? "#ffffff",
                    reset: "content" !== u && (null == f[u] || 0 == f[u].use),
                    ignorexy: s,
                    repeat: S.f == c && S.t == c ? {
                        s: "se",
                        y: S.y,
                        r: S.r,
                        sh: S.sh,
                        c: S.c
                    } : S.f == c ? {
                        s: "s",
                        r: S.r,
                        c: S.c
                    } : S.t == c ? {
                        s: "e",
                        y: S.y,
                        r: S.r,
                        sh: S.sh,
                        c: S.c
                    } : void 0,
                    frame: c,
                    framegroup: o,
                    tlname: i.timelines[i.tIndex].id,
                    tl: t.length > 0 ? t : null == v ? [] : i.converted[i.timelines ? .[v] ? .id ? ? void 0] ? .[u] ? .[o] ? ? []
                });
                if (t.push(_), "frame_999" == c && !f.timeline.endWithSlide && !0 !== f.timeline.actionTriggered) {
                    _.time = (f ? .timeline ? .start ? ? 0) - g;
                    let e = i.converted.in[u][o];
                    e.push(_);
                    for (let t of ["rX", "rY", "rZ", "skX", "skY", "z", "fb", "sX", "sY"]) void 0 !== e[e.length - 1] && void 0 !== e[e.length - 1][t] && e[e.length - 1][t] !== ("sX" == t || "sY" == t ? 1 : 0) && "inherit" !== e[e.length - 1][t] && i.dif[u][t]++
                }
                i.dif[u] ? ? = {
                    rX: 0,
                    rY: 0,
                    rZ: 0,
                    skX: 0,
                    skY: 0,
                    z: 0,
                    fb: 0,
                    sX: 0,
                    sY: 0
                };
                for (let e of ["rX", "rY", "rZ", "skX", "skY", "z", "fb", "sX", "sY"]) void 0 !== t[t.length - 1] && void 0 !== t[t.length - 1][e] && t[t.length - 1][e] !== ("sX" == e || "sY" == e ? 1 : 0) && "inherit" !== t[t.length - 1][e] && i.dif[u][e]++
            }
    }, SR7.migrate.convertLoop = e => {
        if (!0 !== e.use) return {};
        let t, r, a, i = SR7.migrate.simplifyLoop(e),
            o = SR7.migrate.getLoopTimeline(i);
        return i.motionpath && (o.frames = SR7.migrate.cleanDiffLoops(o.frames, "yoyo_move", !0), r = SR7.migrate.getLoopTimeline(i, !0, i.yoyo_move), r.frames = SR7.migrate.cleanDiffLoops(r.frames, "yoyo_move", !1), "yoyo_move" == i.diff && delete i.diff), i.diff && (o.frames = SR7.migrate.cleanDiffLoops(o.frames, i.diff, !0), i.yoyo = !i.yoyo, t = SR7.migrate.getLoopTimeline(i), t.frames = SR7.migrate.cleanDiffLoops(t.frames, i.diff, !1)), i.yoyo_filter && (o.frames = SR7.migrate.cleanDiffLoops(o.frames, "yoyo_filter", !0), i.yoyo = i.yoyo_filter, a = SR7.migrate.getLoopTimeline(i), a.frames = SR7.migrate.cleanDiffLoops(a.frames, "yoyo_filter", !1)), {
            loop_group_a: o,
            loop_group_b: t,
            loop_group_c: r,
            loop_group_o: a,
            diff_yoyo: i.diff,
            motionpath: i.motionpath
        }
    }, SR7.migrate.lpframe = (e = {}, t, r, a = "none") => {
        let i = {
            timeline: {
                start: r,
                speed: t,
                frameLength: t,
                ease: a
            },
            loop: {
                x: e.x ? ? 0,
                y: e.y ? ? 0,
                z: e.z ? ? 0,
                opacity: e.opacity ? ? 1,
                rotationX: e.rotationX ? ? 0,
                rotationY: e.rotationY ? ? 0,
                rotationZ: e.rotationZ ? ? 0,
                scaleX: e.scaleX ? ? 1,
                scaleY: e.scaleY ? ? 1,
                skewX: e.skewX ? ? 0,
                skewY: e.skewY ? ? 0
            },
            filter: {
                grayscale: e.grayscale ? ? 0,
                brightness: e.brightness ? ? 100,
                blur: e.blur ? ? 0
            }
        };
        return i.filter.use = 100 !== i.filter.brightness || 0 !== i.filter.blur || 0 !== i.filter.grayscale, i
    }, SR7.migrate.getLoopTimeline = (e, t, r) => {
        let a = parseInt(e.speed ? ? 1e3) / (e.yoyo || r ? 2 : 1),
            i = {
                frameOrder: [{
                    id: "frame_0"
                }, {
                    id: "frame_1"
                }, {
                    id: "frame_2"
                }, {
                    id: "frame_3"
                }],
                frames: {
                    frame_0: {
                        loop: {
                            opacity: 1,
                            originX: e.originX ? ? "50%",
                            originY: e.originY ? ? "50%",
                            originZ: e.originZ ? ? 0
                        }
                    },
                    frame_1: SR7.migrate.lpframe(e.frame_0, 200, parseInt(e.start ? ? 300), "none"),
                    frame_2: !0 !== e.yoyo && !0 !== r ? SR7.migrate.lpframe(e.frame_0, 0, 200 + parseInt(e.start ? ? 300), "none") : SR7.migrate.lpframe(e.frame_999, r ? 10 : a, 200 + parseInt(e.start ? ? 300), e.ease),
                    frame_3: !0 !== e.yoyo && !0 !== r ? SR7.migrate.lpframe(e.frame_999, a, 200 + parseInt(e.start ? ? 300), e.ease) : SR7.migrate.lpframe(e.frame_0, a, 200 + (r ? 10 : a) + parseInt(e.start ? ? 300), e.ease)
                },
                tloop: {
                    use: !0,
                    from: "frame_2",
                    to: "frame_3",
                    children: !1,
                    repeat: -1,
                    yoyo: e.yoyo || r,
                    rfsh: !1
                }
            };
        return e.curved && t && (i.frames.frame_1.loop.x = i.frames.frame_2.loop.x = 0, i.frames.frame_1.loop.y = i.frames.frame_2.loop.y = 0 - parseInt(e.frame_999.yr ? ? 0) + parseInt(e.frame_999.y ? ? 0), i.frames.frame_3.loop = {
            anchors: [{
                x: 0,
                y: 0 - parseInt(e.frame_999.yr ? ? 0) + parseInt(e.frame_999.y ? ? 0)
            }, {
                x: 0 - parseInt(e.frame_0.xr ? ? 0) + parseInt(e.frame_0.x ? ? 0),
                y: 0
            }, {
                x: 0,
                y: parseInt(e.frame_0.yr ? ? 0) + parseInt(e.frame_0.y ? ? 0)
            }, {
                x: parseInt(e.frame_999.xr ? ? 0) + parseInt(e.frame_999.x ? ? 0),
                y: 0
            }, {
                x: 0,
                y: 0 - parseInt(e.frame_999.yr ? ? 0) + parseInt(e.frame_999.y ? ? 0)
            }],
            curv: e.curviness || 2
        }, i.tloop.motionpath = !0), (i.frames.frame_1.filter.use || i.frames.frame_2.filter.use || i.frames.frame_3.filter.use) && (i.frames.frame_1.filter.use = i.frames.frame_2.filter.use = i.frames.frame_3.filter.use = !0), i
    }, SR7.migrate.cleanDiffLoops = (e, t, r) => {
        if (null == t) return e;
        for (let a in e) _tpt.hop(e, a) && null != e[a].loop && (r == ("yoyo_move" == t) && (delete e[a].loop.x, delete e[a].loop.y, delete e[a].loop.z), r == ("yoyo_scale" == t) && (delete e[a].loop.scaleX, delete e[a].loop.scaleY, delete e[a].loop.skewX, delete e[a].loop.skewY), r == ("yoyo_rotate" == t) && (delete e[a].loop.rotationX, delete e[a].loop.rotationY, delete e[a].loop.rotationZ), r == ("yoyo_filter" == t) && (delete e[a].loop.opacity, delete e[a].filter));
        return e
    }, SR7.migrate.oneAttrLoop = (e, t, r) => {
        if (null == t) return i;
        let a = !0,
            i = _tpt.extend({}, e);
        for (let e in i.frames)
            if (_tpt.hop(i.frames, e))
                for (let o in i.frames[e].loop) _tpt.hop(i.frames[e].loop, o) && (o !== t ? delete i.frames[e][o] : i.frames[e].loop[o] !== r && (a = !1));
        return !a && i
    }, SR7.migrate.simplifyLoop = e => {
        e.frame_0 ? ? = {}, e.frame_999 ? ? = {}, e.motionpath = e.curved;
        for (let t of ["x", "y", "z", "rotationX", "rotationY", "rotationZ", "scaleX", "scaleY", "opacity", "skewX", "skewY", "blur"]) e.frame_0[t] != e.frame_999[t] || null != e.frame_0[t] && parseInt(e.frame_0[t]) != ("opacity" == t || "scaleX" == t || "scaleY" == t ? 1 : 0) || null != e.frame_999[t] && parseInt(e.frame_999[t]) != ("opacity" == t || "scaleX" == t || "scaleY" == t ? 1 : 0) || (delete e.frame_0[t], delete e.frame_999[t]);
        return e.frame_0.rotationX || e.frame_0.rotationY || e.frame_0.rotationZ || e.frame_999.rotationX || e.frame_999.rotationY || e.frame_999.rotationZ || (e.yoyo_rotate = !1), e.frame_0.x || e.frame_0.y || e.frame_0.z || e.frame_0.xr || e.frame_0.yr || e.frame_0.zr || e.frame_999.x || e.frame_999.y || e.frame_999.z || e.frame_999.xr || e.frame_999.yr || e.frame_999.zr || (e.yoyo_move = !1), e.frame_0.scaleX || e.frame_0.scaleY || !e.frame_999.scaleX || e.frame_999.scaleY || (e.yoyo_scale = !1), e.yoyo_move ? ? = !1, e.yoyo_scale ? ? = !1, e.yoyo_rotate ? ? = !1, e.yoyo = e.yoyo_scale == e.yoyo_rotate || e.yoyo_scale == e.yoyo_move ? e.yoyo_scale : e.yoyo_move == e.yoyo_rotate ? e.yoyo_move : e.yoyo_rotate, e.diff = e.yoyo_scale !== e.yoyo_move && e.yoyo_scale !== e.yoyo_rotate ? "yoyo_scale" : e.yoyo_move !== e.yoyo_scale ? "yoyo_move" : "yoyo_rotate", e.yoyo == e[e.diff] && delete e.diff, e
    }, SR7.migrate.fixPos = e => {
        for (let t in e) _tpt.hop(e, t) && null == e[t].pos.pos && ("" + e[t].pid == "-1" ? e[t].pos.pos = "absolute" : e[t].pos.pos = "column" == e[e[t].pid].subtype || "row" == e[e[t].pid].subtype ? "relative" : "absolute");
        return e
    }, SR7.migrate.fixActions = (e, t, r) => {
        if (null == SR7.migrate.actioncache || null == SR7.migrate.framesToScene) return [];
        const a = SR7.migrate.actioncache[t],
            i = ["toggleScenes", "playScene", "toggleClass", "mtrap_follow", "mtrap_unfollow", "start_video", "play_video", "stop_video", "toggle_video"];
        for (let e in a) {
            if (i.includes(a[e].a) && Array.isArray(a[e].target))
                for (let t in a[e].target) {
                    let i = ("" + a[e].target[t]).replace("sta_", r + ":").replace("static-", r + ":");
                    i = String(i).includes(":") ? SR7.D.fixSR6IDs(i.split(":")[0]) + ":" + i.split(":")[1] : i, a[e].target[t] = i
                }
            if (a[e].target)
                if (Array.isArray(a[e].target))
                    for (let t in a[e].target)("" + a[e].target[t]).includes("sta") ? a[e].target[t] = r : a[e].target[t] = "callSlide" == a[e].a || "open_modal" == a[e].a ? SR7.D.fixSR6IDs(a[e].target[t]) : a[e].target[t];
                else("" + a[e].target).includes("sta") && "open_modal" !== a[e].a && "close_modal" !== a[e].a ? a[e].target = r : a[e].target = "callSlide" == a[e].a || "open_modal" == a[e].a ? SR7.D.fixSR6IDs(a[e].target) : a[e].target;
            for (let e = 0; e < a.length; e++)
                for (let r of ["sc", "scm", "scn"]) {
                    let i = a[e][r];
                    if ("string" == typeof i && i.includes("frame_")) {
                        let l, s = 0,
                            n = Array.isArray(a[e].target) ? a[e].target.length : 1;
                        do {
                            l = o(i, a[e].target, t, s), s++
                        } while ((void 0 === l || l === i) && s < n);
                        void 0 !== l && l !== i && (a[e][r] = l)
                    }
                }
        }
        return SR7.migrate.actioncache[t]
    }, SR7.migrate.orderGroups = function(e) {
        for (let t in e.slides) {
            if (!_tpt.hop(e.slides, t)) continue;
            let r = e.slides[t].layers,
                a = {};
            for (let e in r) _tpt.hop(r, e) && -1 !== r[e].pid && "group" == (r[r[e].pid] ? .subtype ? ? "") && (a[r[e].pid] ? ? = [], a[r[e].pid].push({
                order: r[e].order,
                id: e
            }));
            for (let e in a) {
                if (!_tpt.hop(a, e)) continue;
                a[e].sort(((e, t) => t.order - e.order));
                let t = a[e].length - 1;
                for (let i in a[e]) r[a[e][i].id].order = a[e][t - i].order
            }
        }
    }, SR7.migrate.saveIntoSr7 = function(e) {
        return new Promise(((t, r) => {
            delete SR7.migrate.actions, delete SR7.migrate.actioncache;
            let a = RVS.F.getAllSliderDatas(!0);
            try {
                a = JSON.parse(JSON.stringify(a))
            } catch (e) {
                console.log("Original Object used for Migration")
            }
            let i = {};
            i.id = e, i.alias = a.slider.alias, i.title = a.slider.title, i.slider_settings = {
                version: a.slider.version
            }, i.slides = [];
            let o = a.slider.addOns,
                l = ["page"];
            if (_tpt.regResource({
                    id: "page",
                    url: SR7.E.plugin_url + "public/js/page.js"
                }), void 0 !== o)
                for (let e in o) _tpt.hop(o, e) && 0 != o[e] && "false" != ("" + o[e] ? .enable ? ? !1) && (e = e.replace("revslider-", "").replace("-addon", ""), void 0 !== SR7.E.resources[e] && l.push(e), void 0 !== SR7.E.resources["css" + e] && l.push("css" + e), _tpt.regResource({
                    id: e,
                    url: SR7.E.resources[e]
                }));
            _tpt.checkResources(l).then((() => {
                for (var r in a) _tpt.hop(a, r) && (r.includes("static") ? i.static_slide = {
                    id: r.replace("static_", ""),
                    params: a[r].params,
                    layers: a[r].layers
                } : "slide_order" == r ? i[r] = a[r] : "slider" == r ? i.slider_params = a[r] : (a[r].params.order = a.slide_order.indexOf("" + r), a[r].params.uid = parseInt(r), -1 == a[r].params.order && (a[r].params.order = a.slide_order.indexOf(r)), a[r].params.order = parseInt(a[r].params.order) + 1, i.slides.push({
                    id: r,
                    params: a[r].params,
                    layers: a[r].layers,
                    order: a[r].params.order
                })));
                document.dispatchEvent(new CustomEvent("updateSR6toSR7", {
                    detail: {
                        json: i,
                        id: e,
                        alias: a.slider.alias,
                        noinfo: !0,
                        asobj: !0,
                        fromSR6: !0
                    }
                })), t()
            }))
        }))
    }, SR7.migrate.snowConvert = e => (!e.codes ? .javascript.includes("var snowsettings") || e.addOns ? .["revslider-snow-addon"] ? .enable || (e.addOns ? ? = {}, e.addOns["revslider-snow-addon"] = {
        enable: !0,
        startSlide: 1,
        endSlide: "last",
        max: {
            number: 400,
            opacity: 1,
            sinus: 100,
            size: 6,
            speed: 100
        },
        min: {
            opacity: .3,
            sinus: 1,
            size: .2,
            speed: 30
        }
    }), e), document.addEventListener("updateSR6toSR7", (function(e) {
        if (null != e && "object" == typeof e && null != e.detail) {
            !SR7.G ? .breakPoints && window.RVS ? .ENV ? .glb_slizes && (SR7.G ? ? = {}, SR7.G.breakPoints ? ? = [parseInt(RVS.ENV.glb_slizes.d), parseInt(RVS.ENV.glb_slizes.n), parseInt(RVS.ENV.glb_slizes.t), parseInt(RVS.ENV.glb_slizes.m)]);
            try {
                let r = "migrate";
                SR7.M ? ? = {}, SR7 ? ? = {}, SR7.M = {}, SR7.M.migrate = {}, SR7.migrate.actioncache = {}, SR7.migrate.framesToScene = {}, SR7.M[r] = {};
                let a, i = SR7.M[r];
                e.detail.noinfo;
                SR7.E.backend = !1, i.migrate = !0;
                let o = e.detail.asobj ? e.detail.json : JSON.parse(e.detail.json);
                SR7.E.transtable ? ? = window ? .RVS ? .LIB ? .SLTR ? ? {
                    basic: {
                        fade: { in: {
                                o: 0
                            },
                            out: {
                                a: !1
                            },
                            title: "opacity Fade In"
                        }
                    }
                }, o.trans && (SR7.E.transtable = _tpt.extend(SR7.E.transtable, o.trans)), !window.SR7 ? .NAV && window.RVS ? .nav && (SR7.NAV = window.RVS.nav), o.navs && (SR7.NAV = _tpt.extend(SR7.NAV, o.navs)), o.v6v7ids && (SR7.E.v6v7ids = _tpt.extend(SR7.E.v6v7ids, o.v6v7ids)), o.slider_params.title = o.title, o.slider_params.alias = o.alias, o.slider_params = SR7.migrate.snowConvert(o.slider_params), i.settings = _tpt.extend({}, SR7.D.moduleObj(r, o.slider_params));
                let l = o.slides,
                    s = null != o.static_slide && void 0 !== o.static_slide.id;
                for (let e in l) {
                    a = SR7.D.fixSR6IDs(l[e].id), i.slides ? ? = {}, i.slides[a] = _tpt.extend({}, SR7.D.slideObj(r, l[e]));
                    let t = "default" == (i.slides[a] ? .slide ? .slideshow ? .len ? ? "default") ? i.settings ? .default ? .len ? ? 9e3 : i.slides[a] ? .slide ? .slideshow ? .len ? ? 9e3;
                    i.slides[a].layers = _tpt.extend({}, SR7.D.layerObjects({
                        dLEN: t,
                        id: r,
                        slide: l[e],
                        sid: a,
                        snow: s ? void 0 : o.slider_params ? .addOns ? .["revslider-snow-addon"],
                        msource: i.settings.source ? .type ? ? "gallery"
                    })), i.slides[a].layers = SR7.migrate.fixParallax(i.slides[a].layers, o.slider_params)
                }
                s && (a = SR7.D.fixSR6IDs(o.static_slide.id, !0), o.static_slide.global = !0, i.slides[a] = _tpt.extend(i.slides[a], SR7.D.slideObj(r, o.static_slide)), i.slides[a].layers = _tpt.extend(i.slides[a].layers, SR7.D.layerObjects({
                    id: r,
                    slide: o.static_slide,
                    sid: a,
                    snow: o.slider_params ? .addOns ? .["revslider-snow-addon"],
                    msource: i.settings.source ? .type ? ? "gallery"
                })), i.slides[a].layers = SR7.migrate.fixParallax(i.slides[a].layers, o.slider_params));
                for (let e in l) i.slides[SR7.D.fixSR6IDs(l[e].id)].slide.actions = SR7.migrate.fixActions(r, SR7.D.fixSR6IDs(l[e].id), SR7.D.fixSR6IDs(o ? .static_slide ? .id ? ? "", !0));
                null != o.static_slide && void 0 !== o.static_slide.id && (i.slides[SR7.D.fixSR6IDs(o.static_slide.id, !0)].slide.actions = SR7.migrate.fixActions(r, SR7.D.fixSR6IDs(o.static_slide.id, !0), SR7.D.fixSR6IDs(o.static_slide.id, !0))), SR7.migrate.orderGroups(i);
                var t = SR7.F.saveAll("migrate");
                t.id = e.detail.id, SR7.E.backend = !0, SR7.F.saveSliderDatas(t, (() => {
                    e.detail.info && void 0 !== window.RVS && void 0 !== RVS.S.migrationCounter && (RVS.S.migrationCounter++, RVS.S.migrationCounter_c.innerHTML = RVS.S.migrationCounter, RVS.S.migrationList[e.detail.ind].el.remove(), RVS.LIB.SLIDERS[e.detail.m].v7 = !0, RVS.F.migrateOneByOne(e.detail.ind + 1))
                }), e.detail.fromSR6)
            } catch (t) {
                e.detail.info && void 0 !== window.RVS && (void 0 !== RVS.S.migrationError && (RVS.S.migrationError++, e.detail.info.innerHTML = "Migration Error", RVS.F.ajaxRequest("set_v7_migration_failed", {
                    id: e.detail.id,
                    text: t.toString().slice(0, 300)
                }), RVS ? .F.migrateOneByOne && RVS.F.migrateOneByOne(e.detail.ind + 1)), console.groupCollapsed("Migration Issues"), console.log(t), console.log(obj.alias), console.groupEnd())
            }
        }
    })), SR7.migrate.fixParallax = (e, t) => {
        const r = t ? .parallax ? ? {},
            a = t ? .scrolleffects ? ? {},
            i = t ? .scrolltimeline ? ? {};
        for (let t in e) {
            if (!_tpt.hop(e, t)) continue;
            const o = e[t];
            "slidebg" == o.subtype && r.setDDD && !r.ddd.BGFreeze && (o.px = {
                use: r.levels ? .[15] ? ? 55
            }), r.set && o.px ? .use && (o.mod ? ? = {}, r.setDDD && void 0 !== r.mouse && (r.mouse.type = "mouse"), ((r.mouse ? .type ? ? "").includes("scroll") || "slidebg" == o.subtype && "mouse" == (r.mouse ? .type ? ? "")) && (o.mod.s = {
                u: !0,
                x: 0,
                y: r.levels ? .[parseInt(o.px.use) - 1] ? ? r.levels ? .[0],
                s: parseFloat("slidebg" == o.subtype ? r.mouse ? .bgSpeed ? ? 15 : r.mouse ? .layersSpeed ? ? 400) / 1e3,
                e: "power3.out",
                ut: !1,
                rX: 0,
                rY: 0,
                rZ: 0,
                sc: 1
            }, NaN == o.mod.s.s && (o.mod.s.s = "slidebg" != o.subtype || r.setDDD ? .4 : .015)), ("slidebg" !== o.subtype || r.setDDD) && (r.mouse ? .type ? ? "").includes("mouse") && (o.mod.m = {
                u: (r.setDDD ? ? !1) && ("slidebg" !== o.subtype || !r.ddd.BGFreeze) || (!r.setDDD ? ? !1),
                x: r.levels ? .[parseInt(o.px.use) - 1] ? ? r.levels ? .[0],
                y: o.mod ? .s ? 0 : r.levels ? .[parseInt(o.px.use) - 1] ? ? r.levels ? .[0],
                s: parseInt(r.mouse ? .speed ? ? 0) / 1e3 || 3,
                e: "power3.out",
                o: "enterpoint" == (r.mouse ? .origo ? ? "enterpoint") ? "e" : "c"
            }), void 0 === o.mod.s && void 0 === o.mod.m || (o.mod.mask = o.px.m)), i.set && !1 !== (o.px.time ? ? !1) && "false" !== (o.px.time ? ? !1) && (o.mod ? ? = {}, o.mod.s ? ? = {}, o.mod.s.ut = 1 == i.layer && "default" == o.px.time || (1 == o.px.time || "true" == o.px.time), o.mod.s.so = .001 * parseInt(o.px.so)), o.px ? .aBG && "true" !== String(o.px ? .use) && (o.mod ? ? = {}, o.mod.m ? ? = {}, o.mod.m.aBG = !0), a.set && o.px && ("slidebg" != o.subtype || "true" != String(o.px.efff) && "default" != o.px.efff && "true" != String(o.px.effb) && "default" != o.px.effb && "true" != String(o.px.effg) && "default" != o.px.effg ? ("true" === String(o.px.eff) || "true" == String(a.layers) && "default" == o.px.eff) && (o.mod ? ? = {}, o.mod.s ? ? = {}, o.mod.s.uf = !0, o.mod.s.b = a.setBlur ? a.maxBlur ? ? 10 : 0, o.mod.s.g = a.setGrayScale ? 100 * parseFloat(a.multiplicatorLayers ? ? 1.3) : 0, o.mod.s.f = a.setFade ? 100 * parseFloat(a.multiplicatorLayers ? ? 1.3) : "off", o.mod.s.d = "both" == a.direction ? "a" : a.direction[0] ? ? "a", o.mod.s.t = parseInt(a.tilt ? ? 30) / 100) : (o.mod ? ? = {}, o.mod.s ? ? = {}, o.mod.s.uf = !0, o.mod.s.b = a.setBlur && ("true" == String(o.px.effb) || a.bg && "default" == o.px.effb) ? a.maxBlur ? ? 10 : 0, o.mod.s.g = a.setGrayScale && ("true" == String(o.px.effg) || a.bg && "default" == o.px.effg) ? 100 * parseFloat(a.multiplicator ? ? 1.3) : 0, o.mod.s.f = a.setFade && ("true" == String(o.px.efff) || a.bg && "default" == o.px.efff) ? 100 * parseFloat(a.multiplicator ? ? 1.3) : "off", o.mod.s.d = "both" == a.direction ? "a" : a.direction[0] ? ? "a", o.mod.s.t = parseInt(a.tilt ? ? 30) / 100)), delete o.px, "false" != o ? .mod ? .s ? .u && "off" != o ? .mod ? .s ? .u || (o.mod.s.u = !1), "false" != o ? .mod ? .m ? .u && "off" != o ? .mod ? .m ? .u || (o.mod.m.u = !1)
        }
        return e
    }, SR7.migrate.SR6Backend = () => {
        _tpt.regResource({
            id: "DOM"
        });
        for (let e in SR7.E.resources) _tpt.hop(SR7.E.resources, e) && _tpt.regResource({
            id: e,
            url: SR7.E.resources[e]
        });
        _tpt.checkResources(["DOM", "module", "tpgsap", "page", "canvas", "draw", "save"]).then((() => {
            SR7.E && SR7.E.backend && SR7.migrate.buildRS6List()
        }))
    }, SR7.migrate.collectTransition = e => {
        null != e && (SR7.E ? ? = {}, SR7.E.transtable ? ? = _tpt.extend(SR7.E.transtable, e))
    }, SR7.migrate.collectNav = e => {
        if (null != e) {
            SR7.NAV ? ? = {};
            for (let t in e) !Array.isArray(e[t]) && _tpt.hop(e, t) && (SR7.NAV[t] = _tpt.extend(SR7.NAV[t], e[t]))
        }
    }, _tpt.fillArray ? ? = function(e, t) {
        let r, a;
        e = Array.isArray(e) ? e : [e];
        let i = Array(t),
            o = e.length;
        for (a = 0; a < e.length; a++) i[a + (t - o)] = e[a], null == r && "#" !== e[a] && (r = e[a]);
        for (let e = 0; e < t; e++) void 0 !== i[e] && "#" != i[e] || (i[e] = r), r = i[e];
        return i
    }, _tpt.R ? ? = {}, _tpt.R.migration = _tpt.extend ? _tpt.extend(_tpt.R.migration, {
        status: 2,
        version: "1.0"
    }) : {
        status: 2,
        version: "1.0"
    }
}();