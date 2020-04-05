/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

 import {
     OwwSettings
 } from '../overwatch-script'

 import {
     heroKw
 } from './heroes'

export const customGameSettingsSchema: OwwSettings = 
{
    main: {
        "values": {
            "description": {
                "guid": "00000001007F",
                "values": "_string",
                "maxBytes": 512,
                "enUS": "Description",
            }
        },
        "guid": "00000001006E",
        "enUS": "main",
    },
    "lobby": {
        "values": {
            "mapRotation": {
                "values": {
                    "afterMirrorMatch": {
                        "guid": "000000004123",
                        "default": true,
                        "enUS": "After A Mirror Match",
                    },
                    "afterGame": {
                        "guid": "000000004124",
                        "enUS": "After A Game",
                    },
                    "paused": {
                        "guid": "000000004125",
                        "enUS": "Paused",
                    }
                },
                "guid": "000000004122",
                "enUS": "Map Rotation",
            },
            "returnToLobby": {
                "values": {
                    "never": {
                        "guid": "000000002C5A",
                        "default": true,
                        "enUS": "Never",
                    },
                    "afterGame": {
                        "guid": "000000002C5B",
                        "enUS": "After A Game",
                    },
                    "afterMirrorMatch": {
                        "guid": "000000002C5C",
                        "enUS": "After A Mirror Match",
                    }
                },
                "guid": "000000002C4C",
                "enUS": "Return To Lobby",
            },
            "teamBalancing": {
                "values": {
                    "off": {
                        "guid": "000000002C52",
                        "default": true,
                        "enUS": "Off",
                    },
                    "afterMirrorMatch": {
                        "guid": "000000002C54",
                        "enUS": "After A Mirror Match",
                    },
                    "afterGame": {
                        "guid": "000000002C55",
                        "enUS": "After A Game",
                    }
                },
                "guid": "000000002C45",
                "enUS": "Team Balancing",
            },
            "swapTeamsAfterMatch": {
                "guid": "00000000705F",
                "values": "_boolYesNo",
                "default": "yes",
                "enUS": "Swap Teams After Match",
            },
            team1Slots: {
                "guid": "000000005A91",
                "values": "_int",
                "min": 0,
                "max": 6,
                "default": 6,
                "enUS": "Max %1$s Players",
            },
            team2Slots: {
                "guid": "000000005A91",
                "values": "_int",
                "min": 0,
                "max": 6,
                "default": 6,
                "enUS": "Max %1$s Players",
            },
            ffaSlots: {
                "guid": "000000006ABB",
                "values": "_int",
                "min": 0,
                "max": 12,
                "default": 12,
                "enUS": "Max FFA Players",
            },
            spectatorSlots: {
                "values": "_int",
                "min": 0,
                "max": 12,
                "default": 2,
                "guid": "000000005A92",
                "enUS": "Max Spectators",
            },
            "allowPlayersInQueue": {
                "values": "_boolYesNo",
                "default": "no",
                "guid": "00000000F25B",
                "enUS": "Allow Players Who Are In Queue",
            },
            "useExperimentalUpdate": {
                "values": "_boolYesNo",
                "default": "no",
                "guid": "0000000102F5",
                "enUS": "Use Experimental Update If Available",
            },
            "enableMatchVoiceChat": {
                "values": "_boolEnabled",
                "default": "disabled",
                "guid": "000000006A04",
                "enUS": "Match Voice Chat",
            },
            "pauseGameOnDisconnect": {
                "values": "_boolYesNo",
                "default": "no",
                "guid": "000000007110",
                "enUS": "Pause Game On Player Disconnect",
            },
            "dataCenterPreference": {
                "values": {
                    "bestAvailable": {
                        "default": true,
                        "guid": "00000000AA5A",
                        "enUS": "Best Available",
                    },
                    "USCentral": {
                        "guid": "00000000AA75",
                        "enUS": "USA - Central",
                    },
                    "France": {
                        "guid": "00000000AA5E",
                        "enUS": "France",
                    },
                    "SouthKorea": {
                        "guid": "00000000AA61",
                        "enUS": "South Korea",
                    },
                    "Bahrain": {
                        "guid": "00000000FB64",
                        "enUS": "Bahrain",
                    },
                    "Netherlands": {
                        "guid": "00000000AA5D",
                        "enUS": "Netherlands",
                    },
                    "USWest": {
                        "guid": "00000000AA63",
                        "enUS": "USA - West",
                    },
                    "Australia3": {
                        "guid": "00000000AA65",
                        "enUS": "Australia 3",
                    }
                },
                "guid": "00000000AADE",
                "enUS": "Data Center Preference",
            }
        },
        "guid": "000000010031",
        "enUS": "lobby",
    },
    "gamemodes": {
        "values": {
            "general": {
                "guid": "0000000058DA",
                "values": {
                    "enableEnemyHealthBars": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "000000005888",
                        "enUS": "Enemy Health Bars",
                    },
                    "gamemodeStartTrigger": {
                        "values": {
                            "allSlotsFilled": {
                                "default": true,
                                "guid": "000000005A11",
                                "enUS": "All Slots Filled",
                            },
                            "immediately": {
                                "guid": "000000005A12",
                                "enUS": "Immediately",
                            },
                            "manual": {
                                "guid": "000000005A13",
                                "enUS": "Manual",
                            }
                        },
                        "guid": "000000005A10",
                        "enUS": "Game Mode Start",
                    },
                    "healthPackRespawnTime%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "000000005889",
                        "enUS": "Health Pack Respawn Time Scalar",
                    },
                    "enableKillCam": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "00000000596B",
                        "enUS": "Kill Cam",
                    },
                    "enableKillFeed": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "00000000588B",
                        "enUS": "Kill Feed",
                    },
                    "enableSkins": {
                        "guid": "00000000588C",
                        "values": "_boolOnOff",
                        "default": "on",
                        "enUS": "Skins",
                    },
                    "spawnHealthPacks": {
                        "values": {
                            "modeDependent": {
                                "default": true,
                                "guid": "0000000059FC",
                                "enUS": "Determined By Mode",
                            },
                            "enabled": {
                                "guid": "0000000058B2",
                                "enUS": "Enabled",
                            },
                            "disabled": {
                                "guid": "0000000058B3",
                                "enUS": "Disabled",
                            }
                        },
                        "guid": "00000000588A",
                        "enUS": "Spawn Health Packs",
                    },
                    "enableHeroSwitching": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "00000000588D",
                        "enUS": "Allow Hero Switching",
                    },
                    "heroLimit": {
                        "values": {
                            "off": {
                                "guid": "000000005891",
                                "enUS": "Off",
                            },
                            "1PerTeam": {
                                "default": true,
                                "guid": "000000005892",
                                "enUS": "1 Per Team",
                            },
                            "2PerTeam": {
                                "guid": "000000005894",
                                "enUS": "2 Per Team",
                            },
                            "1PerGame": {
                                "guid": "000000005893",
                                "enUS": "1 Per Game",
                            },
                            "2PerGame": {
                                "guid": "000000005895",
                                "enUS": "2 Per Game",
                            }
                        },
                        "guid": "000000005890",
                        "enUS": "Hero Limit",
                    },
                    "roleLimit": {
                        "values": {
                            "off": {
                                "guid": "000000002C52",
                                "default": true,
                                "enUS": "Off",
                            },
                            "2OfEachRolePerTeam": {
                                "guid": "000000002C63",
                                "enUS": "2 Of Each Role Per Team",
                            }
                        },
                        "guid": "00000000596D",
                        "enUS": "Limit Roles",
                    },
                    "enableRandomHeroes": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "00000000588F",
                        "enUS": "Respawn As Random Hero",
                    },
                    "respawnTime%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 100,
                        "guid": "0000000058A8",
                        "enUS": "Respawn Time Scalar",
                    },
                    "disabledMaps": {
                        "guid": "000000010041",
                        "enUS": "disabled maps",
                    },
                    "enabledMaps": {
                        "guid": "000000010045",
                        "enUS": "enabled maps",
                    }
                },
                "enUS": "General",
            },
            "assault": {
                "values": {
                    "captureSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "000000005898",
                        "enUS": "Capture Speed Modifier",
                    },
                    "enableCompetitiveRules": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005897",
                        "enUS": "Competitive Rules",
                    }
                }
            },
            "control": {
                "values": {
                    "captureSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "000000005898",
                        "enUS": "Capture Speed Modifier",
                    },
                    "enableCompetitiveRules": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005897",
                        "enUS": "Competitive Rules",
                    },
                    "setValidControlPoints": {
                        "values": {
                            "all": {
                                "guid": "0000000058EE",
                                "default": true,
                                "enUS": "All",
                            },
                            "first": {
                                "guid": "0000000058EF",
                                "enUS": "First",
                            },
                            "second": {
                                "guid": "0000000058F0",
                                "enUS": "Second",
                            },
                            "third": {
                                "guid": "0000000058F1",
                                "enUS": "Third",
                            }
                        },
                        "guid": "0000000058ED",
                        "enUS": "Limit Valid Control Points",
                    },
                    "scoreToWin": {
                        "guid": "00000000589A",
                        "values": "_int",
                        "min": 1,
                        "max": 3,
                        "default": 2,
                        "enUS": "Score To Win",
                    },
                    "scoringSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "000000005899",
                        "enUS": "Scoring Speed Modifier",
                    }
                }
            },
            "escort": {
                "values": {
                    "enableCompetitiveRules": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005897",
                        "enUS": "Competitive Rules",
                    },
                    "payloadSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000589F",
                        "enUS": "Payload Speed Modifier",
                    }
                }
            },
            "hybrid": {
                "values": {
                    "captureSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "000000005898",
                        "enUS": "Capture Speed Modifier",
                    },
                    "enableCompetitiveRules": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005897",
                        "enUS": "Competitive Rules",
                    },
                    "payloadSpeed%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000589F",
                        "enUS": "Payload Speed Modifier",
                    }
                }
            },
            "ctf": {
                "values": {
                    "enableBlitzFlagLocations": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "00000000F405",
                        "enUS": "Blitz Flag Locations",
                    },
                    "enableDropFlagOnDmg": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "0000000059B9",
                        "enUS": "Damage Interrupts Flag Interaction",
                    },
                    "flagCarrierAbilities": {
                        "values": {
                            "all": {
                                "guid": "0000000059C1",
                                "enUS": "All",
                            },
                            "none": {
                                "guid": "0000000058BC",
                                "enUS": "None",
                            },
                            "restricted": {
                                "default": true,
                                "guid": "0000000059C0",
                                "enUS": "Restricted",
                            }
                        },
                        "guid": "0000000059BF",
                        "enUS": "Flag Carrier Abilities",
                    },
                    "flagDroppedLockTime": {
                        "values": "_float",
                        "min": 0,
                        "max": 10,
                        "default": 5,
                        "guid": "000000008017",
                        "enUS": "Flag Dropped Lock Time",
                    },
                    "flagPickupTime": {
                        "values": "_float",
                        "min": 0,
                        "max": 5,
                        "default": 0,
                        "guid": "0000000059AD",
                        "enUS": "Flag Pickup Time",
                    },
                    "flagReturnTime": {
                        "values": "_float",
                        "min": 0,
                        "max": 5,
                        "default": 4,
                        "guid": "0000000059AA",
                        "enUS": "Flag Return Time",
                    },
                    "flagScoreRespawnTime": {
                        "values": "_float",
                        "min": 0,
                        "max": 20,
                        "default": 15,
                        "guid": "000000008015",
                        "enUS": "Flag Score Respawn Time",
                    },
                    "gameLengthInMn": {
                        "guid": "0000000059D9",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 8,
                        "enUS": "Game Length Minutes",
                    },
                    "respawnSpeedBuffDuration": {
                        "values": "_float",
                        "min": 0,
                        "max": 60,
                        "default": 0,
                        "guid": "00000000F408",
                        "enUS": "Respawn Speed Buff Duration",
                    },
                    "scoreToWin": {
                        "guid": "00000000589A",
                        "values": "_int",
                        "min": 1,
                        "max": 9,
                        "default": 3,
                        "enUS": "Score To Win",
                    },
                    "teamNeedsFlagAtBaseToScore": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "0000000058B0",
                        "enUS": "Team Needs Flag At Base To Score",
                    }
                }
            },
            "ffa": {
                "values": {
                    "gameLengthInMn": {
                        "guid": "00000000632C",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 10,
                        "enUS": "Game Length In Minutes",
                    },
                    "scoreToWin": {
                        "guid": "00000000632A",
                        "values": "_int",
                        "min": 1,
                        "max": 50,
                        "default": 20,
                        "enUS": "Score To Win",
                    },
                    "enableSelfInitiatedRespawn": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "000000006884",
                        "enUS": "Self Initiated Respawn",
                    }
                }
            },
            "elimination": {
                "values": {
                    "heroSelectionTime": {
                        "values": "_int",
                        "min": 20,
                        "max": 60,
                        "default": 20,
                        "guid": "000000005A97",
                        "enUS": "Hero Selection Time",
                    },
                    "scoreToWin": {
                        "guid": "00000000589A",
                        "values": "_int",
                        "min": 1,
                        "max": 9,
                        "default": 3,
                        "enUS": "Score To Win",
                    },
                    "restrictPreviouslyPlayedHeroes": {
                        "values": {
                            "off": {
                                "guid": "000000005FE7",
                                "default": true,
                                "enUS": "Off",
                            },
                            "afterRoundWon": {
                                "guid": "000000005FE8",
                                "enUS": "After Round Won",
                            },
                            "afterRoundPlayed": {
                                "guid": "000000005FE9",
                                "enUS": "After Round Played",
                            }
                        },
                        "guid": "000000005FE6",
                        "enUS": "Restrict Previously Used Heroes",
                    },
                    "heroesAvailable": {
                        "values": {
                            "any": {
                                "guid": "00000000589C",
                                "default": true,
                                "enUS": "Any",
                            },
                            "limited": {
                                "guid": "000000005FE5",
                                "enUS": "Limited",
                            },
                            "random": {
                                "guid": "00000000589D",
                                "enUS": "Random",
                            },
                            "mirroredRandom": {
                                "guid": "00000000589E",
                                "enUS": "Random Mirrored",
                            }
                        },
                        "guid": "00000000589B",
                        "enUS": "Hero Selection",
                    },
                    "heroPoolSize": {
                        "values": {
                            "teamSize": {
                                "guid": "000000006146",
                                "enUS": "Team Size",
                            },
                            "teamSize+1": {
                                "guid": "000000006147",
                                "enUS": "Team Size +1",
                            },
                            "teamSize+2": {
                                "guid": "000000006148",
                                "enUS": "Team Size +2",
                            },
                            "teamSize+3": {
                                "guid": "000000006149",
                                "enUS": "Team Size +3",
                            }
                        },
                        "guid": "000000006145",
                        "enUS": "Limited Choice Pool",
                    },
                    "enableTiebreaker": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "000000005FC9",
                        "enUS": "Capture Objective Tiebreaker",
                    },
                    "tiebreakerTime": {
                        "values": "_int",
                        "min": 30,
                        "max": 300,
                        "default": 105,
                        "guid": "00000000615D",
                        "enUS": "Tiebreaker After Match Time Elapsed",
                    },
                    "tiebreakerCaptureTime": {
                        "values": "_int",
                        "min": 1,
                        "max": 7,
                        "default": 3,
                        "guid": "00000000619C",
                        "enUS": "Time To Capture",
                    },
                    "drawTime": {
                        "values": "_int",
                        "min": 60,
                        "max": 300,
                        "default": 135,
                        "guid": "00000000615C",
                        "enUS": "Draw After Match Time Elapsed With No Tiebreaker",
                    },
                    "enableWallhack": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005FC8",
                        "enUS": "Reveal Heroes",
                    },
                    "wallhackEnabledTime": {
                        "values": "_int",
                        "min": 0,
                        "max": 180,
                        "default": 75,
                        "guid": "00000000615B",
                        "enUS": "Reveal Heroes After Match Time Elapsed",
                    }
                }
            },
            "tdm": {
                "values": {
                    "gameLengthInMn": {
                        "guid": "00000000617D",
                        "values": "_int",
                        "min": 5,
                        "max": 15,
                        "default": 10,
                        "enUS": "Game Length In Minutes",
                    },
                    "enableMercyRezKillCancel": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "00000000688A",
                        "enUS": "Mercy Resurrect Counteracts Kills",
                    },
                    "scoreToWin": {
                        "guid": "00000000616E",
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                        "enUS": "Score To Win",
                    },
                    "enableSelfInitiatedRespawn": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "000000006884",
                        "enUS": "Self Initiated Respawn",
                    },
                    "needsImbalancedTeamScoreToWin": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000006D65",
                        "enUS": "Imbalanced Team Score To Win",
                    },
                    "team1ScoreToWin": {
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                        "guid": "000000006D66",
                        "enUS": "Team 1 Score To Win",
                    },
                    "team2ScoreToWin": {
                        "values": "_int",
                        "min": 1,
                        "max": 200,
                        "default": 30,
                        "guid": "000000006D67",
                        "enUS": "Team 2 Score To Win",
                    }
                }
            },
            "practiceRange": {
                "values": {
                    "spawnTrainingBots": {
                        "values": "_boolOnOff",
                        "default": "on",
                        "guid": "00000000EC7E",
                        "enUS": "Spawn Training Bots",
                    },
                    "trainingBotsRespawnTime%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000F0CC",
                        "enUS": "Training Bot Respawn Time Scalar",
                    }
                }
            }
        },
        "guid": "000000010044",
        "enUS": "modes",
    },
    "heroes": {
        "teams": {
            "allTeams": {
                "guid": "0000000058DA",
                "enUS": "General",
            },
            "team1": {
                "guid": "00000000B472",
                "enUS": "Team 1",
            },
            "team2": {
                "guid": "00000000B471",
                "enUS": "Team 2",
            },
            "ffa": {
                "guid": "000000010051",
                "enUS": "Team FFA",
            }
        },
        "values": {
            "_generalButNotEachHero": {
                "abilityCooldown%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058A0",
                    "enUS": "Ability Cooldown Time",
                }
            },
            "_generalAndEachHero": {
                "enableMelee": {
                    "values": "_boolOnOff",
                    "default": "on",
                    "guid": "000000005B4C",
                    "enUS": "Quick Melee",
                },
                "enableUlt": {
                    "guid": "0000000058A9",
                    "values": "_boolOnOff",
                    "default": "on",
                    "enUS": "Ultimate Ability",
                },
                "ultGen%": {
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058AA",
                    "enUS": "Ultimate Generation",
                },
                "combatUltGen%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "guid": "00000000765B",
                    "enUS": "Ultimate Generation - Combat",
                },
                "passiveUltGen%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "guid": "00000000765C",
                    "enUS": "Ultimate Generation - Passive",
                },
                "enableSpawningWithUlt": {
                    "values": "_boolOnOff",
                    "default": "off",
                    "guid": "00000000765F",
                    "enUS": "Spawn With Ultimate Ready",
                },
                "ultDuration%": {
                    "values": "_percent",
                    "min": 25,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "ashe",
                        "bastion",
                        "doomfist",
                        "genji",
                        "junkrat",
                        "moira",
                        "soldier",
                        "torbjorn",
                        "widowmaker",
                        "winston",
                        "hammond"
                    ],
                    "guid": "000000007671",
                    "enUS": "Ultimate Duration",
                },
                "enableInfiniteUlt": {
                    "values": "_boolOnOff",
                    "default": "off",
                    "include": [
                        "ashe",
                        "bastion",
                        "doomfist",
                        "genji",
                        "junkrat",
                        "moira",
                        "soldier",
                        "torbjorn",
                        "widowmaker",
                        "winston",
                        "hammond"
                    ],
                    "guid": "000000007672",
                    "enUS": "Infinite Ultimate Duration",
                },
                "damageDealt%": {
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058A1",
                    "enUS": "Damage Dealt",
                },
                "damageReceived%": {
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058A2",
                    "enUS": "Damage Received",
                },
                "healingDealt%": {
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058A3",
                    "enUS": "Healing Dealt",
                },
                "healingReceived%": {
                    "guid": "0000000058A4",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "enUS": "Healing Received",
                },
                "health%": {
                    "guid": "0000000059FA",
                    "values": "_percent",
                    "min": 10,
                    "max": 500,
                    "default": 100,
                    "enUS": "Health",
                },
                "jumpVerticalSpeed%": {
                    "values": "_percent",
                    "min": 25,
                    "max": 800,
                    "default": 100,
                    "guid": "00000000631A",
                    "enUS": "Jump Vertical Speed",
                },
                "movementGravity%": {
                    "values": "_percent",
                    "min": 25,
                    "max": 400,
                    "default": 100,
                    "guid": "0000000058C0",
                    "enUS": "Movement Gravity",
                },
                "movementSpeed%": {
                    "values": "_percent",
                    "min": 50,
                    "max": 300,
                    "default": 100,
                    "guid": "0000000058A6",
                    "enUS": "Movement Speed",
                },
                "projectileGravity%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058C1",
                    "enUS": "Projectile Gravity",
                },
                "projectileSpeed%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "guid": "0000000058A7",
                    "enUS": "Projectile Speed",
                },
                "enableHeadshotsOnly": {
                    "values": "_boolOnOff",
                    "default": "off",
                    "guid": "0000000058A5",
                    "enUS": "Receive Headshots Only",
                },
                "enablePrimaryFire": {
                    "guid": "000000005B4B",
                    "values": "_boolOnOff",
                    "default": "on",
                    "enUS": "Primary Fire",
                },
                "ammoClipSize%": {
                    "values": "_percent",
                    "min": 25,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "brigitte",
                        "dva",
                        "hanzo",
                        "reinhardt",
                        "sigma"
                    ],
                    "guid": "000000005ECC",
                    "enUS": "Ammunition Clip Size Scalar",
                },
                "enableInfiniteAmmo": {
                    "values": "_boolOnOff",
                    "default": "off",
                    "exclude": [
                        "brigitte",
                        "dva",
                        "hanzo",
                        "moira",
                        "reinhardt",
                        "sigma"
                    ],
                    "guid": "000000005ECD",
                    "enUS": "No Ammunition Requirement",
                }
            },
            "_eachHero": {
                "enableAbility1": {
                    "guid": "00000001005E",
                    "values": "_boolOnOff",
                    "default": "on",
                    "enUS": "%1$s",
                },
                "ability1Cooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "bastion",
                        "lucio",
                        "soldier",
                        "hammond",
                        "zenyatta"
                    ],
                    "enUS": "%1$s Cooldown Time",
                },
                "enableAbility2": {
                    "guid": "00000001005E",
                    "values": "_boolOnOff",
                    "default": "on",
                    "exclude": [
                        "bastion"
                    ],
                    "enUS": "%1$s",
                },
                "ability2Cooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "exclude": [
                        "bastion",
                        "zenyatta"
                    ],
                    "enUS": "%1$s Cooldown Time",
                },
                "enableAbility3": {
                    "guid": "00000001005E",
                    "values": "_boolOnOff",
                    "default": "on",
                    "include": [
                        "brigitte",
                        "hanzo",
                        "hammond",
                    ],
                    "enUS": "%1$s",
                },
                "ability3Cooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "hammond",
                    ],
                    "enUS": "%1$s Cooldown Time",
                },
                "enablePassive": {
                    "guid": "00000001005E",
                    "values": "_boolOnOff",
                    "default": "on",
                    "include": [
                        "mercy",
                    ],
                    "enUS": "%1$s",
                },
                "enableSecondaryFire": {
                    "guid": "00000001005E",
                    "values": "_boolOnOff",
                    "default": "on",
                    "include": [
                        "bastion",
                        "brigitte",
                        "dva",
                        "doomfist",
                        "lucio",
                        "orisa",
                        "pharah",
                        "reinhardt",
                        "sigma",
                        "soldier",
                        "sombra",
                        "hammond"
                    ],
                    "enUS": "%1$s",
                },
                "secondaryFireCooldown%": {
                    "guid": "000000005B84",
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "bastion",
                        "brigitte",
                        "doomfist",
                        "lucio",
                        "orisa",
                        "reinhardt",
                        "sigma",
                        "soldier",
                        "sombra",
                        "hammond"
                    ],
                    "enUS": "%1$s Cooldown Time",
                },
                "secondaryFireMaximumTime%": {
                    "values": "_percent",
                    "min": 20,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "bastion",
                        "dva",
                        "pharah"
                    ],
                    "guid": "000000005B45",
                    "enUS": "%1$s Maximum Time",
                },
                "secondaryFireRechargeRate%": {
                    "values": "_percent",
                    "min": 0,
                    "max": 500,
                    "default": 100,
                    "include": [
                        "bastion",
                        "brigitte",
                        "dva",
                        "pharah",
                        "reinhardt",
                        "sigma"
                    ],
                    "guid": "000000005B3F",
                    "enUS": "%1$s Recharge Rate",
                },
                "enableGenericSecondaryFire": {
                    "guid": "000000006029",
                    "values": "_boolOnOff",
                    "default": "on",
                    "include": [
                        "baptiste",
                        "genji",
                        "mccree",
                        "mei",
                        "mercy",
                        "moira",
                        "roadhog",
                        "symmetra",
                        "torbjorn",
                        "zarya",
                        "zenyatta"
                    ],
                    "enUS": "Secondary Fire",
                },
                "enableAutomaticFire": {
                    "guid": "00000000A2AD",
                    "values": "_boolReverseOnOff",
                    "default": "off",
                    "include": [
                        "ana",
                        "ashe",
                        "widowmaker"
                    ],
                    "enUS": "No Automatic Fire",
                },
                "enableScoping": {
                    "guid": "00000000A2B0",
                    "values": "_boolReverseOnOff",
                    "default": "off",
                    "include": [
                        "ana",
                        "ashe",
                        "widowmaker"
                    ],
                    "enUS": "No Scope",
                }
            },
            "disabledHeroes": {
                "guid": "000000010052",
                "enUS": "disabled heroes",
            },
            "enabledHeroes": {
                "guid": "000000010053",
                "enUS": "enabled heroes",
            },
            "ashe": {
                "values": {
                    "ability1EnemyKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000A2E7",
                        "enUS": "Coach Gun Knockback Scalar Enemy",
                    },
                    "ability1SelfKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000A2E5",
                        "enUS": "Coach Gun Knockback Scalar Self",
                    },
                    "ability2FuseTime%": {
                        "values": "_percent",
                        "min": 1,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000A2E6",
                        "enUS": "Dynamite Fuse Time Scalar",
                    }
                }
            },
            "bastion": {
                "values": {
                    "ultKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "00000000636C",
                        "enUS": "Configuration: Tank Weapon Knockback Scalar",
                    }
                }
            },
            "brigitte": {
                "values": {
                    "shieldBashCooldown%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000819C",
                        "enUS": "Shield Bash Cooldown Time",
                    },
                    "shieldBashKb%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000819F",
                        "enUS": "Shield Bash Knockback Scalar",
                    },
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "0000000081A0",
                        "enUS": "Whip Shot Knockback Scalar",
                    }
                }
            },
            "dva": {
                "values": {
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000006333",
                        "enUS": "Boosters Knockback Scalar",
                    },
                    "callMechKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "0000000065A5",
                        "enUS": "Call Mech Knockback Scalar",
                    },
                    "selfDestructKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 200,
                        "default": 100,
                        "guid": "00000000636F",
                        "enUS": "Self Destruct Knockback Scalar",
                    },
                    "spawnWithoutMech": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "0000000072AF",
                        "enUS": "Spawn Without Mech",
                    }
                }
            },
            "doomfist": {
                "values": {
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "000000006664",
                        "enUS": "Rising Uppercut Knockback Scalar",
                    },
                    "secondaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "000000006666",
                        "enUS": "Rocket Punch Knockback Scalar",
                    },
                    "ultKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "000000006667",
                        "enUS": "Meteor Strike Knockback Scalar",
                    },
                    "ammoRegenerationTime%": {
                        "values": "_percent",
                        "min": 33,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000665B",
                        "enUS": "Ammunition Regeneration Time Scalar",
                    }
                }
            },
            "hanzo": {
                "values": {
                    "ability3Cooldown%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "0000000088D2",
                        "enUS": "Lunge Cooldown Time",
                    },
                    "ability3Distance%": {
                        "values": "_percent",
                        "min": 20,
                        "max": 300,
                        "default": 100,
                        "guid": "0000000088D3",
                        "enUS": "Lunge Distance Scalar",
                    },
                    "ability2Quantity%": {
                        "values": "_int",
                        "min": 3,
                        "max": 12,
                        "default": 100,
                        "guid": "000000008900",
                        "enUS": "Storm Arrows Quantity",
                    }
                }
            },
            "junkrat": {
                "values": {
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 200,
                        "default": 100,
                        "guid": "000000006335",
                        "enUS": "Concussion Mine Knockback Scalar",
                    },
                    "primaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "00000000636D",
                        "enUS": "Frag Launcher Knockback Scalar",
                    }
                }
            },
            "lucio": {
                "values": {
                    "secondaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000633C",
                        "enUS": "Soundwave Knockback Scalar",
                    }
                }
            },
            "mei": {
                "values": {
                    "ultFreezeMinimum%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 50,
                        "guid": "0000000070D4",
                        "enUS": "Blizzard Freeze Minimum",
                    },
                    "ultFreezeRate%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "0000000070D3",
                        "enUS": "Blizzard Freeze Rate Scalar",
                    },
                    "enablePrimaryFireFreezeStack": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000007113",
                        "enUS": "Freeze Stacking",
                    },
                    "primaryFireFreezeDuration%": {
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                        "guid": "000000007100",
                        "enUS": "Weapon Freeze Duration Scalar",
                    },
                    "primaryFireFreezeMinimum%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 100,
                        "default": 30,
                        "guid": "0000000070D2",
                        "enUS": "Weapon Freeze Minimum",
                    },
                    "primaryFireFreezeRate%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "0000000070CF",
                        "enUS": "Weapon Freeze Rate Scalar",
                    }
                }
            },
            "mercy": {
                "values": {
                    "weaponsEnabled": {
                        "guid": "000000006017",
                        "values": {
                            "all": {
                                "guid": "000000006019",
                                "default": true,
                                "enUS": "All",
                            },
                            "staff": {
                                "guid": "000000006018",
                                "enUS": "Caduceus Staff Only",
                            },
                            "blaster": {
                                "guid": "00000000601A",
                                "enUS": "Caduceus Blaster Only",
                            }
                        },
                        "enUS": "Weapons Enabled",
                    }
                }
            },
            "moira": {
                "values": {
                    "ability2MaxDamage%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "0000000073E7",
                        "enUS": "Biotic Orb Max Damage Scalar",
                    },
                    "ability2MaxHealing%": {
                        "values": "_percent",
                        "min": 10,
                        "max": 500,
                        "default": 100,
                        "guid": "0000000073E6",
                        "enUS": "Biotic Orb Max Healing Scalar",
                    },
                    "primaryFireMaximumTime%": {
                        "values": "_percent",
                        "min": 20,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000705C",
                        "enUS": "Biotic Energy Maximum",
                    },
                    "primaryFireRechargeRate%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000705B",
                        "enUS": "Biotic Energy Recharge Rate",
                    }
                }
            },
            "pharah": {
                "values": {
                    "ability2Kb%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000633D",
                        "enUS": "Concussive Blast Knockback Scalar",
                    },
                    "enableSecondaryFireUnlimitedFuel": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "000000005B51",
                        "enUS": "Hover Jets Unlimited Fuel",
                    },
                    "secondaryFireVerticalSpeed%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000631C",
                        "enUS": "Hover Jets Vertical Speed Scalar",
                    },
                    "ability1Acceleration%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000631B",
                        "enUS": "Jump Jet Acceleration Scalar",
                    },
                    "primaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000006341",
                        "enUS": "Rocket Launcher Knockback Scalar",
                    }
                }
            },
            "reinhardt": {
                "values": {
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "000000006371",
                        "enUS": "Charge Knockback Scalar",
                    },
                    "primaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "0000000065A4",
                        "enUS": "Rocket Hammer Knockback Scalar",
                    }
                }
            },
            "roadhog": {
                "values": {
                    "ultKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000633E",
                        "enUS": "Whole Hog Knockback Scalar",
                    }
                }
            },
            "sigma": {
                "values": {
                    "ability2Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000C865",
                        "enUS": "Accretion Knockback Scalar",
                    }
                }
            },
            "soldier": {
                "values": {
                    "secondaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000006362",
                        "enUS": "Helix Rockets Knockback Scalar",
                    }
                }
            },
            "torbjorn": {
                "values": {
                    "ability2Duration%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 500,
                        "default": 100,
                        "guid": "00000000A43D",
                        "enUS": "Overload Duration Scalar",
                    },
                    "weaponsEnabled": {
                        "guid": "000000006023",
                        "values": {
                            "all": {
                                "guid": "000000006024",
                                "default": true,
                                "enUS": "All",
                            },
                            "rivetGun": {
                                "guid": "000000006025",
                                "enUS": "Rivet Gun Only",
                            },
                            "hammer": {
                                "guid": "000000006026",
                                "enUS": "Forge Hammer Only",
                            }
                        },
                        "enUS": "Weapons Enabled",
                    }
                }
            },
            "winston": {
                "values": {
                    "ability1Acceleration%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000631D",
                        "enUS": "Jump Pack Acceleration Scalar",
                    },
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000006373",
                        "enUS": "Jump Pack Knockback Scalar",
                    },
                    "ultKb%": {
                        "values": "_percent",
                        "min": 25,
                        "max": 300,
                        "default": 100,
                        "guid": "00000000633F",
                        "enUS": "Primal Rage Melee Knockback Scalar",
                    }
                }
            },
            "hammond": {
                "values": {
                    "enableRollOnly": {
                        "values": "_boolOnOff",
                        "default": "off",
                        "guid": "00000000928D",
                        "enUS": "Roll Always Active",
                    },
                    "ability1Kb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000009288",
                        "enUS": "Grappling Claw Knockback Scalar",
                    },
                    "ultKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "00000000928B",
                        "enUS": "Minefield Knockback Scalar",
                    }
                }
            },
            "zarya": {
                "values": {
                    "secondaryFireKb%": {
                        "values": "_percent",
                        "min": 0,
                        "max": 400,
                        "default": 100,
                        "guid": "000000006340",
                        "enUS": "Particle Cannon Secondary Knockback Scalar",
                    }
                }
            }
        },
        "guid": "000000010046",
        "enUS": "heroes",
    }
}

/*
const availableLanguages = ["enUS"];

//Resolve guids for the max team players
for (var key of Object.keys(customGameSettingsSchema.lobby.values.team1Slots)) {
    if (availableLanguages.includes(key)) {
        customGameSettingsSchema.lobby.values.team1Slots[key] = customGameSettingsSchema.lobby.values.team1Slots[key].replace("%1$s", constantValues.Team["1"][key])
    }
}
for (var key of Object.keys(customGameSettingsSchema.lobby.values.team2Slots)) {
    if (availableLanguages.includes(key)) {
        customGameSettingsSchema.lobby.values.team2Slots[key] = customGameSettingsSchema.lobby.values.team2Slots[key].replace("%1$s", constantValues.Team["2"][key])
    }
}

//Add translations for each gamemode
for (var gamemode of Object.keys(gamemodeKw)) {
    if (!(gamemode in customGameSettingsSchema.gamemodes.values)) {
        customGameSettingsSchema.gamemodes.values[gamemode] = {};
        customGameSettingsSchema.gamemodes.values[gamemode].values = {};
    }
    Object.assign(customGameSettingsSchema.gamemodes.values[gamemode], gamemodeKw[gamemode])
}

//Apply general settings to each gamemode
for (var key of Object.keys(customGameSettingsSchema.gamemodes.values)) {
    Object.assign(customGameSettingsSchema.gamemodes.values[key].values, customGameSettingsSchema.gamemodes.values.general.values);
}

//Generate settings for heroes.general
customGameSettingsSchema.heroes.values.general = Object.assign({}, customGameSettingsSchema.heroes.values._generalAndEachHero, customGameSettingsSchema.heroes.values._generalButNotEachHero)

//Generate settings for each hero
for (var hero of Object.keys(heroKw)) {

    if (!(hero in customGameSettingsSchema.heroes.values)) {
        customGameSettingsSchema.heroes.values[hero] = {};
        customGameSettingsSchema.heroes.values[hero].values = {};
    }

    var eachHero = Object.assign({}, customGameSettingsSchema.heroes.values._generalAndEachHero, customGameSettingsSchema.heroes.values._eachHero)

    for (var key of Object.keys(eachHero)) {
        if ("include" in eachHero[key] && eachHero[key].include.includes(hero)
                || "exclude" in eachHero[key] && !eachHero[key].exclude.includes(hero)
                || !("include" in eachHero[key]) && !("exclude" in eachHero[key])) {
                    
            var destKey = (key === "enableGenericSecondaryFire" ? "enableSecondaryFire" : key)
            customGameSettingsSchema.heroes.values[hero].values[destKey] = JSON.parse(JSON.stringify(eachHero[key]));

            var heroValue = customGameSettingsSchema.heroes.values[hero].values[destKey];

            if ([
                "secondaryFireCooldown%", "enableSecondaryFire", "secondaryFireMaximumTime%", "secondaryFireRechargeRate%",
                "ability3Cooldown%", "enableAbility3", 
                "ability2Cooldown%", "enableAbility2", 
                "ability1Cooldown%", "enableAbility1", 
                "enablePassive", 
                "enableUlt", "ultGen%", "combatUltGen%", "passiveUltGen%"
            ].includes(key)) {
                for (var key2 of Object.keys(heroValue)) {
                    if (availableLanguages.includes(key2)) {

                        if (["secondaryFireCooldown%", "enableSecondaryFire", "secondaryFireMaximumTime%", "secondaryFireRechargeRate%"].includes(key)) {
                            heroValue[key2] = heroValue[key2].replace("%1$s", heroKw[hero].secondaryFire[key2])

                        } else if (["ability3Cooldown%", "enableAbility3"].includes(key)) {
                            heroValue[key2] = heroValue[key2].replace("%1$s", heroKw[hero].ability3[key2])
                        } else if (["ability2Cooldown%", "enableAbility2"].includes(key)) {
                            heroValue[key2] = heroValue[key2].replace("%1$s", heroKw[hero].ability2[key2])
                        } else if (["ability1Cooldown%", "enableAbility1"].includes(key)) {
                            heroValue[key2] = heroValue[key2].replace("%1$s", heroKw[hero].ability1[key2])
                        } else if (["enablePassive"].includes(key)) {
                            heroValue[key2] = heroValue[key2].replace("%1$s", heroKw[hero].passive[key2])
                        } else if (["enableUlt", "ultGen%", "combatUltGen%", "passiveUltGen%"].includes(key)) {
                            heroValue[key2] = heroValue[key2]+" "+heroKw[hero].ultimate[key2]
                        }
                    }
                }
            }
        }
    }
}

delete customGameSettingsSchema.heroes.values._generalAndEachHero
delete customGameSettingsSchema.heroes.values._eachHero
delete customGameSettingsSchema.heroes.values._generalButNotEachHero
*/