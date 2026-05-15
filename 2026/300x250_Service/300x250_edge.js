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
                            rect: ['-400px', '-335px', '1100px', '920px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"kv.jpg",'0px','0px'],
                            transform: [[],[],[],['0.272','0.272']]
                        },
                        {
                            id: 'gradient',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gradient.png",'0px','0px']
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
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt1.png",'0px','0px']
                        },
                        {
                            id: 'txt2',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt2.png",'0px','0px']
                        },
                        {
                            id: 'txt3',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt3.png",'0px','0px']
                        },
                        {
                            id: 'txt4',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt4.png",'0px','0px']
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                        },
                        {
                            id: 'replay',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
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
                    duration: 13500,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
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
                            2000,
                            500,
                            "linear",
                            "${txt1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            6500,
                            500,
                            "linear",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            10000,
                            500,
                            "linear",
                            "${txt3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid170",
                            "top",
                            2000,
                            3000,
                            "swing",
                            "${kv}",
                            '-618px',
                            '-388px'
                        ],
                        [
                            "eid182",
                            "top",
                            6000,
                            3000,
                            "swing",
                            "${kv}",
                            '-388px',
                            '-375px'
                        ],
                        [
                            "eid189",
                            "top",
                            10000,
                            3000,
                            "swing",
                            "${kv}",
                            '-375px',
                            '-335px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            2500,
                            2500,
                            "swing",
                            "${gradient}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            6000,
                            2500,
                            "swing",
                            "${gradient}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            10500,
                            500,
                            "linear",
                            "${txt4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            13000,
                            500,
                            "linear",
                            "${replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "scaleY",
                            2000,
                            3000,
                            "swing",
                            "${kv}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            6000,
                            3000,
                            "swing",
                            "${kv}",
                            '0.59',
                            '0.4'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            10000,
                            3000,
                            "swing",
                            "${kv}",
                            '0.4',
                            '0.272'
                        ],
                        [
                            "eid97",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            6000,
                            500,
                            "linear",
                            "${txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid122",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${replay_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "opacity",
                            11000,
                            500,
                            "linear",
                            "${cta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "left",
                            2000,
                            3000,
                            "swing",
                            "${kv}",
                            '-761px',
                            '-500px'
                        ],
                        [
                            "eid181",
                            "left",
                            6000,
                            3000,
                            "swing",
                            "${kv}",
                            '-500px',
                            '-410px'
                        ],
                        [
                            "eid185",
                            "left",
                            10000,
                            3000,
                            "swing",
                            "${kv}",
                            '-410px',
                            '-400px'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            2000,
                            3000,
                            "swing",
                            "${kv}",
                            '1',
                            '0.59'
                        ],
                        [
                            "eid173",
                            "scaleX",
                            6000,
                            3000,
                            "swing",
                            "${kv}",
                            '0.59',
                            '0.4'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            10000,
                            3000,
                            "swing",
                            "${kv}",
                            '0.4',
                            '0.272'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x250_edgeActions.js");
})("EDGE-17044367");
