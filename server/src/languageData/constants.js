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

const constantValues = 
//begin-json
{
    "Transform": {
        "ROTATION": {
            "guid": "00000000B33B",
            "enUS": "Rotation",
        },
        "ROTATION_AND_TRANSLATION": {
            "guid": "00000000B33C",
            "enUS": "Rotation And Translation",
        }
    },
    "Team": {
        "1": {
            "guid": "00000000B472",
            "enUS": "Team 1",
        },
        "2": {
            "guid": "00000000B471",
            "enUS": "Team 2",
        },
        "ALL": {
            "guid": "00000000B470",
            "enUS": "All Teams",
        }
    },
    "Invis": {
        "ALL": {
            "guid": "00000000B9EB",
            "enUS": "All",
        },
        "ENEMIES": {
            "guid": "00000000B9EA",
            "enUS": "Enemies",
        },
        "NONE": {
            "guid": "00000000B9EC",
            "enUS": "None",
        }
    },
    "Color": {
        "AQUA": {
            "guid": "00000000CDB3",
            "enUS": "Aqua",
        },
        "BLUE": {
            "guid": "00000000B939",
            "enUS": "Blue",
        },
        "GREEN": {
            "guid": "00000000B93A",
            "enUS": "Green",
        },
        "LIME_GREEN": {
            "guid": "00000000CDB7",
            "enUS": "Lime Green",
        },
        "ORANGE": {
            "guid": "00000000CDB4",
            "enUS": "Orange",
        },
        "PURPLE": {
            "guid": "00000000BC1C",
            "enUS": "Purple",
        },
        "RED": {
            "guid": "00000000B938",
            "enUS": "Red",
        },
        "SKY_BLUE": {
            "guid": "00000000CDB5",
            "enUS": "Sky Blue",
        },
        "TEAM_1": {
            "guid": "00000000B472",
            "enUS": "Team 1",
        },
        "TEAM_2": {
            "guid": "00000000B471",
            "enUS": "Team 2",
        },
        "TURQUOISE": {
            "guid": "00000000CDB6",
            "enUS": "Turquoise",
        },
        "WHITE": {
            "guid": "00000000B93C",
            "enUS": "White",
        },
        "YELLOW": {
            "guid": "00000000B93B",
            "enUS": "Yellow",
        }
    },
    "Button": {
        "ABILITY_1": {
            "guid": "00000000B179",
            "enUS": "Ability 1",
        },
        "ABILITY_2": {
            "guid": "00000000B178",
            "enUS": "Ability 2",
        },
        "CROUCH": {
            "guid": "00000000B175",
            "enUS": "Crouch",
        },
        "INTERACT": {
            "guid": "00000000B31E",
            "enUS": "Interact",
        },
        "JUMP": {
            "guid": "00000000B176",
            "enUS": "Jump",
        },
        "MELEE": {
            "guid": "00000000FC8D",
            "enUS": "Melee",
        },
        "PRIMARY_FIRE": {
            "guid": "00000000B17B",
            "enUS": "Primary Fire",
        },
        "RELOAD": {
            "guid": "00000000FC8E",
            "enUS": "Reload",
        },
        "SECONDARY_FIRE": {
            "guid": "00000000B17A",
            "enUS": "Secondary Fire",
        },
        "ULTIMATE": {
            "guid": "00000000B177",
            "enUS": "Ultimate",
        }
    },
    "_Operation": {
        "_add": {
            "guid": "00000000B16D",
            "enUS": "Add",
        },
        "_appendToArray": {
            "guid": "00000000B167",
            "enUS": "Append To Array",
        },
        "_divide": {
            "guid": "00000000B16A",
            "enUS": "Divide",
        },
        "_max": {
            "guid": "00000000B18F",
            "enUS": "Max",
        },
        "_min": {
            "guid": "00000000B190",
            "enUS": "Min",
        },
        "_modulo": {
            "guid": "00000000B169",
            "enUS": "Modulo",
        },
        "_multiply": {
            "guid": "00000000B16B",
            "enUS": "Multiply",
        },
        "_raiseToPower": {
            "guid": "00000000B168",
            "enUS": "Raise To Power",
        },
        "_removeFromArrayByIndex": {
            "guid": "00000000C61B",
            "enUS": "Remove From Array By Index",
        },
        "_removeFromArrayByValue": {
            "guid": "00000000B166",
            "enUS": "Remove From Array By Value",
        },
        "_subtract": {
            "guid": "00000000B16C",
            "enUS": "Subtract",
        }
    },
    "DynamicEffect": {
        "BAD_EXPLOSION": {
            "guid": "00000000BC1A",
            "enUS": "Bad Explosion",
        },
        "BAD_PICKUP_EFFECT": {
            "guid": "00000000BC18",
            "enUS": "Bad Pickup Effect",
        },
        "BUFF_EXPLOSION_SOUND": {
            "guid": "00000000C400",
            "enUS": "Buff Explosion Sound",
        },
        "BUFF_IMPACT_SOUND": {
            "guid": "00000000C3FE",
            "enUS": "Buff Impact Sound",
        },
        "DEBUFF_IMPACT_SOUND": {
            "guid": "00000000C3FD",
            "enUS": "Debuff Impact Sound",
        },
        "EXPLOSION_SOUND": {
            "guid": "00000000C401",
            "enUS": "Explosion Sound",
        },
        "GOOD_EXPLOSION": {
            "guid": "00000000BB28",
            "enUS": "Good Explosion",
        },
        "GOOD_PICKUP_EFFECT": {
            "guid": "00000000BC19",
            "enUS": "Good Pickup Effect",
        },
        "RING_EXPLOSION": {
            "guid": "00000000BC1B",
            "enUS": "Ring Explosion",
        },
        "RING_EXPLOSION_SOUND": {
            "guid": "00000000C3FF",
            "enUS": "Ring Explosion Sound",
        }
    },
    "Effect": {
        "BAD_AURA": {
            "guid": "00000000BC17",
            "enUS": "Bad Aura",
        },
        "BAD_AURA_SOUND": {
            "guid": "00000000C4DA",
            "enUS": "Bad Aura Sound",
        },
        "BEACON_SOUND": {
            "guid": "00000000C4D3",
            "enUS": "Beacon Sound",
        },
        "CLOUD": {
            "guid": "00000000BC15",
            "enUS": "Cloud",
        },
        "DECAL_SOUND": {
            "guid": "00000000C4D4",
            "enUS": "Decal Sound",
        },
        "ENERGY_SOUND": {
            "guid": "00000000C3FC",
            "enUS": "Energy Sound",
        },
        "GOOD_AURA": {
            "guid": "00000000BC13",
            "enUS": "Good Aura",
        },
        "GOOD_AURA_SOUND": {
            "guid": "00000000C4D8",
            "enUS": "Good Aura Sound",
        },
        "LIGHT_SHAFT": {
            "guid": "00000000B934",
            "enUS": "Light Shaft",
        },
        "ORB": {
            "guid": "00000000B933",
            "enUS": "Orb",
        },
        "PICKUP_SOUND": {
            "guid": "00000000C4D9",
            "enUS": "Pick-up Sound",
        },
        "RING": {
            "guid": "00000000BC16",
            "enUS": "Ring",
        },
        "SMOKE_SOUND": {
            "guid": "00000000C4D5",
            "enUS": "Smoke Sound",
        },
        "SPARKLES": {
            "guid": "00000000BC14",
            "enUS": "Sparkles",
        },
        "SPARKLES_SOUND": {
            "guid": "00000000C4D6",
            "enUS": "Sparkles Sound",
        },
        "SPHERE": {
            "guid": "00000000B935",
            "enUS": "Sphere",
        }
    },
    "Comms": {
        "ACKNOWLEDGE": {
            "guid": "00000000B9D5",
            "enUS": "Acknowledge",
        },
        "EMOTE_DOWN": {
            "guid": "00000000B9DB",
            "enUS": "Emote Down",
        },
        "EMOTE_LEFT": {
            "guid": "00000000B9DD",
            "enUS": "Emote Left",
        },
        "EMOTE_RIGHT": {
            "guid": "00000000B9DC",
            "enUS": "Emote Right",
        },
        "EMOTE_UP": {
            "guid": "00000000B9DE",
            "enUS": "Emote Up",
        },
        "GROUP_UP": {
            "guid": "00000000B9D7",
            "enUS": "Group Up",
        },
        "HELLO": {
            "guid": "00000000B9D9",
            "enUS": "Hello",
        },
        "NEED_HEALING": {
            "guid": "00000000B9D8",
            "enUS": "Need Healing",
        },
        "THANKS": {
            "guid": "00000000B9D6",
            "enUS": "Thanks",
        },
        "ULTIMATE_STATUS": {
            "guid": "00000000B9DA",
            "enUS": "Ultimate Status",
        },
        "VOICE_LINE_DOWN": {
            "guid": "00000000B9DF",
            "enUS": "Voice Line Down",
        },
        "VOICE_LINE_LEFT": {
            "guid": "00000000B9E1",
            "enUS": "Voice Line Left",
        },
        "VOICE_LINE_RIGHT": {
            "guid": "00000000B9E0",
            "enUS": "Voice Line Right",
        },
        "VOICE_LINE_UP": {
            "guid": "00000000B9E2",
            "enUS": "Voice Line Up",
        }
    },
    "Icon": {
        "ARROW_DOWN": {
            "description": "![](https://i.imgur.com/hych4AE.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2C9",
            "enUS": "Arrow: Down",
        },
        "ARROW_LEFT": {
            "description": "![](https://i.imgur.com/jgpW0Nb.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CA",
            "enUS": "Arrow: Left",
        },
        "ARROW_RIGHT": {
            "description": "![](https://i.imgur.com/0BttENZ.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CB",
            "enUS": "Arrow: Right",
        },
        "ARROW_UP": {
            "description": "![](https://i.imgur.com/Pr86Pcf.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CC",
            "enUS": "Arrow: Up",
        },
        "ASTERISK": {
            "description": "![](https://i.imgur.com/XTvINuC.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CD",
            "enUS": "Asterisk",
        },
        "BOLT": {
            "description": "![](https://i.imgur.com/ekbDxsT.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CE",
            "enUS": "Bolt",
        },
        "CHECKMARK": {
            "description": "![](https://i.imgur.com/B7V240H.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2CF",
            "enUS": "Checkmark",
        },
        "CIRCLE": {
            "guid": "00000000C2D0",
            "description": "![](https://i.imgur.com/6lNvrqD.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Circle",
        },
        "CLUB": {
            "guid": "00000000C2D1",
            "description": "![](https://i.imgur.com/HYWor8w.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Club",
        },
        "DIAMOND": {
            "guid": "00000000C2D2",
            "description": "![](https://i.imgur.com/5aLqsHf.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Diamond",
        },
        "DIZZY": {
            "guid": "00000000C2D3",
            "description": "![](https://i.imgur.com/P1Qi43N.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Dizzy",
        },
        "EXCLAMATION_MARK": {
            "description": "![](https://i.imgur.com/1rBcHfz.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2D4",
            "enUS": "Exclamation Mark",
        },
        "EYE": {
            "description": "![](https://i.imgur.com/pVMPtoH.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2D5",
            "enUS": "Eye",
        },
        "FIRE": {
            "description": "![](https://i.imgur.com/m3As7B0.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2D6",
            "enUS": "Fire",
        },
        "FLAG": {
            "description": "![](https://i.imgur.com/v30lUgy.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2F0",
            "enUS": "Flag",
        },
        "HALO": {
            "guid": "00000000C2D7",
            "description": "![](https://i.imgur.com/FWR9HAQ.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Halo",
        },
        "HAPPY": {
            "description": "![](https://i.imgur.com/CNwSwb1.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2D8",
            "enUS": "Happy",
        },
        "HEART": {
            "guid": "00000000C2D9",
            "description": "![](https://i.imgur.com/1KPOyZa.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Heart",
        },
        "MOON": {
            "guid": "00000000C2DA",
            "description": "![](https://i.imgur.com/2uxcKF0.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Moon",
        },
        "NO": {
            "guid": "00000000C2DB",
            "description": "![](https://i.imgur.com/TZ4zFso.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "No",
        },
        "PLUS": {
            "description": "![](https://i.imgur.com/OLARJ80.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2DC",
            "enUS": "Plus",
        },
        "POISON": {
            "description": "![](https://i.imgur.com/w2gsTiI.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2DD",
            "enUS": "Poison",
        },
        "POISON_2": {
            "description": "![](https://i.imgur.com/UWmyDg2.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2DE",
            "enUS": "Poison 2",
        },
        "QUESTION_MARK": {
            "description": "![](https://i.imgur.com/CZBV4tx.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2DF",
            "enUS": "Question Mark",
        },
        "RADIOACTIVE": {
            "description": "![](https://i.imgur.com/R1bnNcl.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2E4",
            "enUS": "Radioactive",
        },
        "RECYCLE": {
            "description": "![](https://i.imgur.com/q2fxb2u.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2E5",
            "enUS": "Recycle",
        },
        "RING_THICK": {
            "description": "![](https://i.imgur.com/lTwuAjX.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2E6",
            "enUS": "Ring Thick",
        },
        "RING_THIN": {
            "description": "![](https://i.imgur.com/NDOrzVS.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2E7",
            "enUS": "Ring Thin",
        },
        "SAD": {
            "description": "![](https://i.imgur.com/00jyB4n.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2E8",
            "enUS": "Sad",
        },
        "SKULL": {
            "guid": "00000000C2E9",
            "description": "![](https://i.imgur.com/TKKtSIa.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Skull",
        },
        "SPADE": {
            "guid": "00000000C2EA",
            "description": "![](https://i.imgur.com/AJNBYA3.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Spade",
        },
        "SPIRAL": {
            "description": "![](https://i.imgur.com/TQLGPww.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2EB",
            "enUS": "Spiral",
        },
        "STOP": {
            "guid": "00000000C2EC",
            "description": "![](https://i.imgur.com/af56Ghv.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Stop",
        },
        "TRASHCAN": {
            "description": "![](https://i.imgur.com/iEtFvyC.jpg) \n\n \n\n \n\n \n\n ",
            "guid": "00000000C2ED",
            "enUS": "Trashcan",
        },
        "WARNING": {
            "guid": "00000000C2EE",
            "description": "![](https://i.imgur.com/SXDld9l.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "Warning",
        },
        "CROSS": {
            "guid": "00000000C2EF",
            "description": "![](https://i.imgur.com/05HFEnd.jpg) \n\n \n\n \n\n \n\n ",
            "enUS": "X",
        }
    },
    "Relativity": {
        "TO_PLAYER": {
            "guid": "00000000B16F",
            "enUS": "To Player",
        },
        "TO_WORLD": {
            "guid": "00000000B170",
            "enUS": "To World",
        }
    },
    "Impulse": {
        "CANCEL_CONTRARY_MOTION": {
            "guid": "00000000B520",
            "enUS": "Cancel Contrary Motion",
        },
        "INCORPORATE_CONTRARY_MOTION": {
            "guid": "00000000B521",
            "enUS": "Incorporate Contrary Motion",
        }
    },
    "_Rounding": {
        "_roundUp": {
            "guid": "00000000C34F",
            "enUS": "Up",
        },
        "_roundDown": {
            "guid": "00000000C34E",
            "enUS": "Down",
        },
        "_roundToNearest": {
            "guid": "00000000C34D",
            "enUS": "To Nearest",
        }
    },
    "LosCheck": {
        "OFF": {
            "guid": "00000000B1E2",
            "enUS": "Off",
        },
        "SURFACES": {
            "guid": "00000000B1E3",
            "enUS": "Surfaces",
        },
        "SURFACES_AND_ALL_BARRIERS": {
            "guid": "00000000B1E5",
            "enUS": "Surfaces And All Barriers",
        },
        "SURFACES_AND_ENEMY_BARRIERS": {
            "guid": "00000000B1E4",
            "enUS": "Surfaces And Enemy Barriers",
        }
    },
    "Clip": {
        "SURFACES": {
            "guid": "00000000BAF5",
            "enUS": "Clip Against Surfaces",
        },
        "NONE": {
            "guid": "00000000BAF4",
            "enUS": "Do Not Clip",
        }
    },
    "HudPosition": {
        "LEFT": {
            "guid": "00000000BAF6",
            "enUS": "Left",
        },
        "TOP": {
            "guid": "00000000BAF7",
            "enUS": "Top",
        },
        "RIGHT": {
            "guid": "00000000BAF8",
            "enUS": "Right",
        }
    },
    "IconReeval": {
        "POSITION": {
            "guid": "00000000B8D8",
            "enUS": "Position",
        },
        "NONE": {
            "guid": "00000000B8C3",
            "enUS": "None",
        },
        "VISIBILITY": {
            "guid": "00000000B8C4",
            "enUS": "Visible To",
        },
        "VISIBILITY_AND_POSITION": {
            "guid": "00000000B8D9",
            "enUS": "Visible To and Position",
        }
    },
    "EffectReeval": {
        "POSITION_AND_RADIUS": {
            "guid": "00000000B8C5",
            "enUS": "Position and Radius",
        },
        "NONE": {
            "guid": "00000000B8C3",
            "enUS": "None",
        },
        "VISIBILITY": {
            "guid": "00000000B8C4",
            "enUS": "Visible To",
        },
        "VISIBILITY_POSITION_AND_RADIUS": {
            "guid": "00000000B8C6",
            "enUS": "Visible To Position and Radius",
        }
    },
    "HudReeval": {
        "STRING": {
            "guid": "00000000BB31",
            "enUS": "String",
        },
        "VISIBILITY_AND_STRING": {
            "guid": "00000000BA8C",
            "enUS": "Visible To and String",
        },
        "VISIBILITY_SORT_ORDER_AND_STRING": {
            "guid": "00000000FCA5",
            "enUS": "Visible To Sort Order and String",
        },
        "SORT_ORDER_AND_STRING": {
            "guid": "00000000FCA6",
            "enUS": "Sort Order and String",
        }
    },
    "WorldTextReeval": {
        "STRING": {
            "guid": "00000000BB31",
            "enUS": "String",
        },
        "VISIBILITY_AND_STRING": {
            "guid": "00000000BA8C",
            "enUS": "Visible To and String",
        },
        "VISIBILITY_POSITION_AND_STRING": {
            "guid": "00000000BAD4",
            "enUS": "Visible To Position and String",
        }
    },
    "ChaseReeval": {},
    "_ChaseRateReeval": {
        "DESTINATION_AND_RATE": {
            "guid": "00000000B8CA",
            "enUS": "Destination and Rate",
        },
        "NONE": {
            "guid": "00000000B8C9",
            "enUS": "None",
        }
    },
    "_ChaseTimeReeval": {
        "DESTINATION_AND_DURATION": {
            "guid": "00000000C479",
            "enUS": "Destination and Duration",
        },
        "NONE": {
            "guid": "00000000B8C9",
            "enUS": "None",
        }
    },
    "DamageReeval": {
        "NONE": {
            "guid": "00000000C643",
            "enUS": "None",
        },
        "RECEIVERS_AND_DAMAGERS": {
            "guid": "00000000C644",
            "enUS": "Receivers and Damagers",
        },
        "RECEIVERS_DAMAGERS_AND_DMGPERCENT": {
            "guid": "00000000C645",
            "enUS": "Receivers Damagers and Damage Percent",
        }
    },
    "HealingReeval": {
        "NONE": {
            "guid": "00000000FD25",
            "enUS": "None",
        },
        "RECEIVERS_AND_HEALERS": {
            "guid": "00000000FD26",
            "enUS": "Receivers and Healers",
        },
        "RECEIVERS_HEALERS_AND_HEALPERCENT": {
            "guid": "00000000FD27",
            "enUS": "Receivers Healers and Healing Percent",
        }
    },
    "FacingReeval": {
        "DIRECTION_AND_TURN_RATE": {
            "guid": "00000000BB1F",
            "enUS": "Direction and Turn Rate",
        },
        "NONE": {
            "guid": "00000000B8C3",
            "enUS": "None",
        }
    },
    "Wait": {
        "ABORT_WHEN_FALSE": {
            "guid": "00000000787D",
            "enUS": "Abort When False",
        },
        "IGNORE_CONDITION": {
            "guid": "00000000787C",
            "enUS": "Ignore Condition",
        },
        "RESTART_WHEN_TRUE": {
            "guid": "00000000787E",
            "enUS": "Restart When True",
        }
    },
    "BarrierLos": {
        "BLOCKED_BY_ENEMY_BARRIERS": {
            "guid": "00000000B1EE",
            "enUS": "Enemy Barriers Block LOS",
        },
        "BLOCKED_BY_ALL_BARRIERS": {
            "guid": "00000000B1EF",
            "enUS": "All Barriers Block LOS",
        },
        "PASS_THROUGH_BARRIERS": {
            "guid": "00000000B1ED",
            "enUS": "Barriers Do Not Block LOS",
        }
    },
    "Status": {
        "ASLEEP": {
            "guid": "00000000B36A",
            "enUS": "Asleep",
        },
        "BURNING": {
            "guid": "00000000B36C",
            "enUS": "Burning",
        },
        "FROZEN": {
            "guid": "00000000B369",
            "enUS": "Frozen",
        },
        "HACKED": {
            "guid": "00000000B36D",
            "enUS": "Hacked",
        },
        "INVINCIBLE": {
            "guid": "00000000B367",
            "enUS": "Invincible",
        },
        "KNOCKED_DOWN": {
            "guid": "00000000B36B",
            "enUS": "Knocked Down",
        },
        "PHASED_OUT": {
            "guid": "00000000B366",
            "enUS": "Phased Out",
        },
        "ROOTED": {
            "guid": "00000000B365",
            "enUS": "Rooted",
        },
        "STUNNED": {
            "guid": "00000000B565",
            "enUS": "Stunned",
        },
        "UNKILLABLE": {
            "guid": "00000000B368",
            "enUS": "Unkillable",
        }
    },
    "SpecVisibility": {
        "DEFAULT": {
            "guid": "00000000CE55",
            "enUS": "Default Visibility",
        },
        "ALWAYS": {
            "guid": "00000000CE56",
            "enUS": "Visible Always",
        },
        "NEVER": {
            "guid": "00000000CE57",
            "enUS": "Visible Never",
        }
    },
    "Beam": {
        "BAD": {
            "guid": "00000000CE85",
            "enUS": "Bad Beam",
        },
        "GOOD": {
            "guid": "00000000CE84",
            "enUS": "Good Beam",
        },
        "GRAPPLE": {
            "guid": "00000000CE9D",
            "enUS": "Grapple Beam",
        }
    },
    "Throttle": {
        "REPLACE_EXISTING": {
            "guid": "00000000CEB0",
            "enUS": "Replace existing throttle",
        },
        "ADD_TO_EXISTING": {
            "guid": "00000000CEB1",
            "enUS": "Add to existing throttle",
        }
    },
    "ThrottleReeval": {
        "DIRECTION_AND_MAGNITUDE": {
            "guid": "00000000CEB3",
            "enUS": "Direction and Magnitude",
        },
        "NONE": {
            "guid": "00000000CEB2",
            "enUS": "None",
        }
    },
    "AccelReeval": {
        "DIRECTION_RATE_AND_MAX_SPEED": {
            "guid": "00000000BB1A",
            "enUS": "Direction Rate and Max Speed",
        },
        "NONE": {
            "guid": "00000000B8C3",
            "enUS": "None",
        }
    },
    "AsyncBehavior": {
        "RESTART": {
            "guid": "000000010025",
            "enUS": "Restart Rule",
        },
        "NOOP": {
            "guid": "000000010026",
            "enUS": "Do Nothing",
        }
    }
}
//end-json

constantValues["Hero"] = {};
for (var key of Object.keys(heroKw)) {
    constantValues["Hero"][camelCaseToUpperCase(key)] = heroKw[key]
}
constantValues["Map"] = {};
for (var key of Object.keys(mapKw)) {
    constantValues["Map"][camelCaseToUpperCase(key)] = mapKw[key]
}
constantValues["Gamemode"] = {};
for (var key of Object.keys(gamemodeKw)) {
    constantValues["Gamemode"][camelCaseToUpperCase(key)] = gamemodeKw[key]
}

constantValues["ChaseReeval"] = Object.assign({}, constantValues["_ChaseRateReeval"], constantValues["_ChaseTimeReeval"])
