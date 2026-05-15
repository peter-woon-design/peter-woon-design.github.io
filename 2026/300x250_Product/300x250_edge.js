/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'kv',
                            type: 'image',
                            rect: ['-96px', '-62px', '476px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"kv.jpg",'0px','0px'],
                            transform: [[],[],[],['0.7','0.7']]
                        },
                        {
                            id: 'sky',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky.jpg",'0px','0px']
                        },
                        {
                            id: 'lockup',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"lockup.png",'0px','0px']
                        },
                        {
                            id: 'txt1',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt1.png",'0px','0px']
                        },
                        {
                            id: 'txt2',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt2.png",'0px','0px']
                        },
                        {
                            id: 'txt3',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt3.png",'0px','0px']
                        },
                        {
                            id: 'txt4',
                            type: 'image',
                            rect: ['0px', '10px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt4.png",'0px','0px']
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['0px', '10px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                        },
                        {
                            id: 'replay',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay.png",'0px','0px']
                        },
                        {
                            id: 'border_clickTag',
                            type: 'rect',
                            rect: ['0px', '0px', '99.3%', '99.2%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'replay_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['260px', '0px', '40px', '20px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid229",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${txt1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            9500,
                            500,
                            "linear",
                            "${txt4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid302",
                            "scaleY",
                            0,
                            9500,
                            "linear",
                            "${kv}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            11500,
                            500,
                            "linear",
                            "${replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid301",
                            "scaleX",
                            0,
                            9500,
                            "linear",
                            "${kv}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid150",
                            "top",
                            9500,
                            0,
                            "linear",
                            "${txt4}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid152",
                            "top",
                            10500,
                            500,
                            "linear",
                            "${txt4}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "opacity",
                            10500,
                            500,
                            "linear",
                            "${cta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${replay_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid63",
                            "opacity",
                            9000,
                            500,
                            "linear",
                            "${sky}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "top",
                            10500,
                            500,
                            "linear",
                            "${cta}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid278",
                            "left",
                            0,
                            9500,
                            "linear",
                            "${kv}",
                            '-96px',
                            '-55px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            8500,
                            500,
                            "linear",
                            "${txt3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid293",
                            "top",
                            0,
                            9500,
                            "linear",
                            "${kv}",
                            '-62px',
                            '-10px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x250_edgeActions.js");
})("EDGE-17044367");
