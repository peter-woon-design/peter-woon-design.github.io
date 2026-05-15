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
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                        },
                        {
                            id: 'spoon7',
                            type: 'image',
                            rect: ['0px', '230px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon7.png",'0px','0px']
                        },
                        {
                            id: 'spoon6',
                            type: 'image',
                            rect: ['0px', '230px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon6.png",'0px','0px']
                        },
                        {
                            id: 'spoon5',
                            type: 'image',
                            rect: ['0px', '230px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon5.png",'0px','0px']
                        },
                        {
                            id: 'spoon4',
                            type: 'image',
                            rect: ['0px', '230px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon4.png",'0px','0px']
                        },
                        {
                            id: 'spoon3',
                            type: 'image',
                            rect: ['0px', '230px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon3.png",'0px','0px']
                        },
                        {
                            id: 'spoon2',
                            type: 'image',
                            rect: ['0px', '150px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon2.png",'0px','0px']
                        },
                        {
                            id: 'spoon1',
                            type: 'image',
                            rect: ['0px', '150px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"spoon1.png",'0px','0px']
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
                    duration: 14000,
                    autoPlay: true,
                    data: [
                        [
                            "eid240",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spoon4}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid241",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spoon4}",
                            '230px',
                            '150px'
                        ],
                        [
                            "eid169",
                            "top",
                            4250,
                            750,
                            "linear",
                            "${spoon4}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${txt4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            13500,
                            500,
                            "linear",
                            "${replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            750,
                            "linear",
                            "${spoon1}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid177",
                            "top",
                            250,
                            750,
                            "linear",
                            "${spoon2}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid83",
                            "opacity",
                            8500,
                            500,
                            "linear",
                            "${txt3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            11750,
                            500,
                            "linear",
                            "${txt3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid221",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${replay_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            8000,
                            500,
                            "linear",
                            "${txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid234",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spoon7}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid235",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spoon7}",
                            '230px',
                            '150px'
                        ],
                        [
                            "eid171",
                            "top",
                            11750,
                            750,
                            "linear",
                            "${spoon7}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid236",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spoon6}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid237",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spoon6}",
                            '230px',
                            '150px'
                        ],
                        [
                            "eid172",
                            "top",
                            8250,
                            750,
                            "linear",
                            "${spoon6}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "opacity",
                            12750,
                            500,
                            "linear",
                            "${cta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${txt1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid232",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spoon5}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid233",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spoon5}",
                            '230px',
                            '150px'
                        ],
                        [
                            "eid170",
                            "top",
                            8000,
                            750,
                            "linear",
                            "${spoon5}",
                            '150px',
                            '0px'
                        ],
                        [
                            "eid242",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spoon3}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid243",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spoon3}",
                            '230px',
                            '150px'
                        ],
                        [
                            "eid173",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${spoon3}",
                            '150px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x250_edgeActions.js");
})("EDGE-17044367");
