// Kombinierte Version der horizontalen Dropdown-Menüs
// Enthält Definitionen für:
// - menu-horizontal-dropdown
// - menu-horizontal-dropdown-1

// Standard-Menü (z.B. für TOP, MUSIC, EVENTS, LINKS)
var horizontalDropdownMenu = {
    "items": {
        "content": {
            "hover_in": {
                "animate": true,
                "duration": 200,
                "child:0": {
                    "properties": {
                        "background-color": "rgba(0,0,0,0.776)"
                    }
                },
                "child:1": {
                    "tag": "span",
                    "properties": {
                        "color": "rgb(255,255,255)"
                    }
                }
            },
            "hover_out": {
                "animate": true,
                "duration": 200,
                "child:0": {
                    "properties": {
                        "background-color": "rgba(0,0,0,0.000)"
                    }
                },
                "child:1": {
                    "tag": "span",
                    "properties": {
                        "color": "rgb(0,0,0)"
                    }
                }
            }
        },
        "hover_in": {
            "content": { "event": "hover_in" },
            "submenu": { "event": "show", "delay": 0 }
        },
        "hover_out": {
            "content": { "event": "hover_out", "delay": 0 },
            "submenu": { "event": "hide" }
        }
    }
};
registerMenuClass('menu-horizontal-dropdown', horizontalDropdownMenu);


// Variante 1 (z.B. für HOME)
var horizontalDropdownMenuAlt = {
    "items": {
        "content": {
            "hover_in": {
                "animate": true,
                "duration": 200,
                "child:0": {
                    "properties": {
                        "background-color": "rgba(0,0,0,0.776)"
                    }
                },
                "child:1": {
                    "tag": "span",
                    "properties": {
                        "color": "rgb(255,255,255)"
                    }
                }
            },
            "hover_out": {
                "animate": true,
                "duration": 200,
                "child:0": {
                    "properties": {
                        "background-color": "rgba(0,0,0,0.000)"
                    }
                },
                "child:1": {
                    "tag": "span",
                    "properties": {
                        "color": "transparent"
                    }
                }
            }
        },
        "hover_in": {
            "content": { "event": "hover_in" },
            "submenu": { "event": "show", "delay": 0 }
        },
        "hover_out": {
            "content": { "event": "hover_out", "delay": 0 },
            "submenu": { "event": "hide" }
        }
    }
};
registerMenuClass('menu-horizontal-dropdown-1', horizontalDropdownMenuAlt);
