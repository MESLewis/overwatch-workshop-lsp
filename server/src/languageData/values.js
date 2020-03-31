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

var valueFuncKw = 
//begin-json
{
  {
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C358",
        "enUS": "Absolute Value",
    },
  {
        "guid": "00000000C408",
        "description": "The sum of two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "enUS": "Add",
    },
  {
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B265",
        "enUS": "All Dead Players",
    },
  {
        "description": "The array of all damage heroes in overwatch. The order is as follows:\n        \n        0. Reaper\n        1. Tracer\n        2. Hanzo\n        3. Torbjorn\n        4. Pharah\n        5. Widowmaker\n        6. Bastion\n        7. Symmetra\n        8. Genji\n        9. Mccree\n        10. Junkrat\n        11. Soldier\n        12. Mei\n        13. Sombra\n        14. Doomfist\n        15. Ashe  \n        ",
        "args": [],
        "guid": "00000000D40A",
        "enUS": "All Damage Heroes",
    },
  {
        "guid": "00000000BF58",
        "description": "The array of all heroes in overwatch. The order is as follows:\n        \n        0. Reaper   \n        1. Tracer   \n        2. Mercy    \n        3. Hanzo    \n        4. Torbjorn \n        5. Reinhardt\n        6. Pharah   \n        7. Winston  \n        8. Widowmaker\n        9. Bastion  \n        10. Symmetra \n        11. Zenyatta \n        12. Genji    \n        13. Roadhog  \n        14. McCree   \n        15. Junkrat  \n        16. Zarya    \n        17. Soldier  \n        18. Lucio    \n        19. Dva      \n        20. Mei      \n        21. Sombra   \n        22. Doomfist \n        23. Ana      \n        24. Orisa    \n        25. Brigitte \n        26. Moira    \n        27. Hammond  \n        28. Ashe     \n        29. Baptiste \n        30. Sigma    \n        ",
        "args": [],
        "enUS": "All Heroes",
    },
  {
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B264",
        "enUS": "All Living Players",
    },
  {
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B261",
        "enUS": "All Players",
    },
  {
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B267",
        "enUS": "All Players Not On Objective",
    },
  {
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B266",
        "enUS": "All Players On Objective",
    },
  {
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BBA8",
        "enUS": "Allowed Heroes",
    },
  {
        "description": "The array of all support heroes in overwatch. The order is as follows:\n        \n        0. Mercy\n        1. Zenyatta\n        2. Lucio\n        3. Ana\n        4. Brigitte\n        5. Moira\n        6. Baptiste    \n        ",
        "args": [],
        "guid": "00000000D40B",
        "enUS": "All Support Heroes",
    },
  {
        "description": "The array of all tank heroes in overwatch. The order is as follows:\n        \n        0. Reinhardt\n        1. Winston\n        2. Roadhog\n        3. Zarya\n        4. Dva\n        5. Orisa\n        6. Hammond\n        7. Sigma    \n        ",
        "args": [],
        "guid": "00000000D40C",
        "enUS": "All Tank Heroes",
    },
  {
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B11D",
        "enUS": "Altitude Of",
    },
  {
        "description": "Whether both of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BooleanValue",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "guid": "00000000B273",
        "enUS": "And",
    },
  {
        "description": "The angle in degrees between two directional vectors (no normalization required).",
        "args": [
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000C813",
        "enUS": "Angle Between Vectors",
    },
  {
        "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B282",
        "enUS": "Angle Difference",
    },
  {
        "guid": "00000000C41A",
        "description": "A copy of an array with one or more values appended to the end.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to which to append.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "enUS": "Append To Array",
    },
  {
        "description": "Arccosine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C809",
        "enUS": "Arccosine In Degrees",
    },
  {
        "description": "Arccosine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C807",
        "enUS": "Arccosine In Radians",
    },
  {
        "description": "Arcsine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C805",
        "enUS": "Arcsine In Degrees",
    },
  {
        "description": "Arcsine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C803",
        "enUS": "Arcsine In Radians",
    },
  {
        "description": "Arctangent in degrees of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C801",
        "enUS": "Arctangent In Degrees",
    },
  {
        "description": "Arctangent in radians of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C7FF",
        "enUS": "Arctangent In Radians",
    },
  {
        "description": "Whether the specified array contains the specified value.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C336",
        "enUS": "Array Contains",
    },
  {
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to make a copy.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B597",
        "enUS": "Array Slice",
    },
  {
        "guid": "00000000B32F",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null,
        "enUS": "Attacker",
    },
  {
        "guid": "00000000B11B",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null,
        "enUS": "Backward",
    },
  {
        "description": "The player closest to a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure proximity.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the closest player will come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B1DE",
        "enUS": "Closest Player To",
    },
  {
        "description": "Whether the comparison of the two inputs is true.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "COMPARISON",
                "description": "",
                "type": "COMPARE OPERATOR",
                "default": "=="
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B276",
        "enUS": "Compare",
    },
  {
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B37C",
        "enUS": "Control Mode Scoring Percentage",
    },
  {
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": [],
        "guid": "00000000B39A",
        "enUS": "Control Mode Scoring Team",
    },
  {
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C33E",
        "enUS": "Cosine From Degrees",
    },
  {
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C342",
        "enUS": "Cosine From Radians",
    },
  {
        "description": "The number of elements in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "guid": "00000000B26E",
        "enUS": "Count Of",
    },
  {
        "description": "The cross product of the specified values. (Left cross up equals forward.)",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "The right-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000C35D",
        "enUS": "Cross Product",
    },
  {
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "guid": "00000000B5B9",
        "enUS": "Current Array Element",
    },
  {
        "description": "The current game mode of the custom game.",
        "args": [],
        "guid": "00000000F163",
        "enUS": "Current Game Mode",
    },
  {
        "guid": "00000000D418",
        "description": "The current map of the custom game.",
        "args": [],
        "enUS": "Current Map",
    },
  {
        "description": "ty magzie for adding that",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "LocalizedString",
                "default": "HELLO"
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Any",
                "default": "NULL"
            }
        ],
        "guid": "00000000CE3C",
        "enUS": "Custom String",
    },
  {
        "description": "The unit-length direction vector corresponding to the specified angles.",
        "args": [
            {
                "name": "HORIZONTAL ANGLE",
                "description": "The horizontal angle in degrees used to construct the resulting vector.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "VERTICAL ANGLE",
                "description": "The vertical angle in degrees used to construct the resulting vector.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB2D",
        "enUS": "Direction From Angles",
    },
  {
        "description": "The unit-length direction vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting direction vector will point.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position to which the resulting direction vector will point.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B1EA",
        "enUS": "Direction Towards",
    },
  {
        "description": "The distance between two positions in meters.",
        "args": [
            {
                "name": "START POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B1E7",
        "enUS": "Distance Between",
    },
  {
        "guid": "00000000C40F",
        "description": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "enUS": "Divide",
    },
  {
        "description": "The dot product of the specified values.",
        "args": [
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000C35A",
        "enUS": "Dot Product",
    },
  {
        "guid": "00000000B119",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null,
        "enUS": "Down",
    },
  {
        "description": "An array with no elements.",
        "args": [],
        "guid": "00000000BF5A",
        "enUS": "Empty Array",
    },
  {
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B619",
        "enUS": "Entity Exists",
    },
  {
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null,
        "guid": "00000000C635",
        "enUS": "Event Damage",
    },
  {
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null,
        "guid": "00000000CC33",
        "enUS": "Event Healing",
    },
  {
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "guid": "00000000B331",
        "enUS": "Event Player",
    },
  {
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null,
        "guid": "00000000C637",
        "enUS": "Event Was Critical Hit",
    },
  {
        "description": "Whether the healing was a health pack for the event currently being processed by this rule.",
        "args": null,
        "guid": "00000000FC80",
        "enUS": "Event Was Health Pack",
    },
  {
        "guid": "00000000C595",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "enUS": "Eye Position",
    },
  {
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B281",
        "enUS": "Facing Direction Of",
    },
  {
        "description": "The boolean value of false.",
        "args": null,
        "guid": "00000000AC3A",
        "enUS": "False",
    },
  {
        "description": "The player farthest from a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure distance.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the farthest player will come.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B1DF",
        "enUS": "Farthest Player From",
    },
  {
        "description": "A copy of the specified array with any values that do not match the specified condition removed.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be filtered.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BooleanValue",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000B5B7",
        "enUS": "Filtered Array",
    },
  {
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "guid": "00000000B5C2",
        "enUS": "First Of",
    },
  {
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B3A0",
        "enUS": "Flag Position",
    },
  {
        "guid": "00000000B11A",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null,
        "enUS": "Forward",
    },
  {
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "Variable",
                "default": "A"
            }
        ],
        "guid": "00000000B0F9",
        "enUS": "Global Variable",
    },
  {
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C192",
        "enUS": "Has Spawned",
    },
  {
        "description": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to check for.",
                "type": "Status",
                "default": "HACKED"
            }
        ],
        "guid": "00000000B363",
        "enUS": "Has Status",
    },
  {
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null,
        "guid": "00000000CC1C",
        "enUS": "Healee",
    },
  {
        "guid": "00000000CC1A",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null,
        "enUS": "Healer",
    },
  {
        "guid": "0000000081C2",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "enUS": "Health",
    },
  {
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "0000000081C3",
        "enUS": "Normalized Health",
    },
  {
        "guid": "00000000ACAA",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "Hero",
                "default": "ANA"
            }
        ],
        "enUS": "Hero",
    },
  {
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "HeroValue",
                "default": "HERO"
            }
        ],
        "guid": "00000000C1FE",
        "enUS": "Hero Icon String",
    },
  {
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000ACA9",
        "enUS": "Hero Of",
    },
  {
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000BB2C",
        "enUS": "Horizontal Angle From Direction",
    },
  {
        "description": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B27D",
        "enUS": "Horizontal Angle Towards",
    },
  {
        "guid": "00000000F161",
        "description": "A game mode constant.",
        "args": [
            {
                "name": "GAME MODE",
                "description": "A game mode constant.",
                "type": "Gamemode",
                "default": "ASSAULT"
            }
        ],
        "enUS": "Game Mode",
    },
  {
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B27F",
        "enUS": "Horizontal Facing Angle Of",
    },
  {
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B25E",
        "enUS": "Horizontal Speed Of",
    },
  {
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null,
        "guid": "00000000CC1E",
        "enUS": "Host Player",
    },
  {
        "description": "Allows you to use an icon inside of a string.",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "Icon",
                "default": "ARROW: DOWN"
            }
        ],
        "guid": "00000000CCDC",
        "enUS": "Icon String",
    },
  {
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C330",
        "enUS": "Index Of Array Value",
    },
  {
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B278",
        "enUS": "Is Alive",
    },
  {
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": [],
        "guid": "00000000B35C",
        "enUS": "Is Assembling Heroes",
    },
  {
        "description": "Whether the match is between rounds.",
        "args": [],
        "guid": "00000000B35F",
        "enUS": "Is Between Rounds",
    },
  {
        "description": "Whether a player is holding a specific button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose button to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to check.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "00000000B2F3",
        "enUS": "Is Button Held",
    },
  {
        "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.",
                "type": "Comms",
                "default": "VOICE LINE UP"
            }
        ],
        "guid": "00000000B268",
        "enUS": "Is Communicating",
    },
  {
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9E5",
        "enUS": "Is Communicating Any",
    },
  {
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9E8",
        "enUS": "Is Communicating Any Emote",
    },
  {
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9E7",
        "enUS": "Is Communicating Any Voice line",
    },
  {
        "description": "Whether the point is locked in control mode.",
        "args": [],
        "guid": "00000000B37B",
        "enUS": "Is Control Mode Point Locked",
    },
  {
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B289",
        "enUS": "Is Crouching",
    },
  {
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": [],
        "guid": "00000000B3A4",
        "enUS": "Is CTF Mode In Sudden Death",
    },
  {
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B277",
        "enUS": "Is Dead",
    },
  {
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000CEDF",
        "enUS": "Is Dummy Bot",
    },
  {
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C3E7",
        "enUS": "Is Firing Primary",
    },
  {
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C3E9",
        "enUS": "Is Firing Secondary",
    },
  {
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B3A1",
        "enUS": "Is Flag At Base",
    },
  {
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B3A2",
        "enUS": "Is Flag Being Carried",
    },
  {
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": [],
        "guid": "00000000B35E",
        "enUS": "Is Game In Progress",
    },
  {
        "description": "Whether a specific hero is being played (either on a team or in the match).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HeroValue",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B292",
        "enUS": "Is Hero Being Played",
    },
  {
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B28B",
        "enUS": "Is In Air",
    },
  {
        "description": "Whether two positions have line of sight with each other.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "BARRIERS",
                "description": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                "type": "BarrierLos",
                "default": "BARRIERS DO NOT BLOCK LOS"
            }
        ],
        "guid": "00000000B1EC",
        "enUS": "Is In Line of Sight",
    },
  {
        "description": "Whether the match is currently in its setup phase.",
        "args": [],
        "guid": "00000000B35D",
        "enUS": "Is In Setup",
    },
  {
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B3B1",
        "enUS": "Is In Spawn Room",
    },
  {
        "description": "Whether a location is within view of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "LOCATION",
                "description": "The location to test if it's within view.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BF7C",
        "enUS": "Is In View Angle",
    },
  {
        "description": "Whether the match has finished.",
        "args": [],
        "guid": "00000000B360",
        "enUS": "Is Match Complete",
    },
  {
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B288",
        "enUS": "Is Moving",
    },
  {
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B378",
        "enUS": "Is Objective Complete",
    },
  {
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BF70",
        "enUS": "Is On Ground",
    },
  {
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B3B2",
        "enUS": "Is On Objective",
    },
  {
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BB0B",
        "enUS": "Is On Wall",
    },
  {
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B3B3",
        "enUS": "Is Portrait On Fire",
    },
  {
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B287",
        "enUS": "Is Standing",
    },
  {
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B359",
        "enUS": "Is Team On Defense",
    },
  {
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B354",
        "enUS": "Is Team On Offense",
    },
  {
        "description": "Whether the specified condition evaluates to true for every value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BooleanValue",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000B5BA",
        "enUS": "Is True For All",
    },
  {
        "description": "Whether the specified condition evaluates to true for any value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "BooleanValue",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000B5BB",
        "enUS": "Is True For Any",
    },
  {
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C3EB",
        "enUS": "Is Using Ability 1",
    },
  {
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C3ED",
        "enUS": "Is Using Ability 2",
    },
  {
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9D4",
        "enUS": "Is Using Ultimate",
    },
  {
        "description": "Whether the match is waiting for players to join before starting.",
        "args": [],
        "guid": "00000000B35B",
        "enUS": "Is Waiting For Players",
    },
  {
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": [],
        "guid": "00000000B362",
        "enUS": "Last Created Entity",
    },
  {
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "guid": "00000000C64A",
        "enUS": "Last Damage Modification ID",
    },
  {
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "guid": "00000000B263",
        "enUS": "Last Damage Over Time ID",
    },
  {
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "guid": "00000000B262",
        "enUS": "Last Heal Over Time ID",
    },
  {
        "description": "An id representing the most recent start healing modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "guid": "00000000FD2A",
        "enUS": "Last Healing Modification ID",
    },
  {
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "guid": "00000000B5C1",
        "enUS": "Last Of",
    },
  {
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": [],
        "guid": "00000000BAFE",
        "enUS": "Last Text ID",
    },
  {
        "guid": "00000000B116",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null,
        "enUS": "Left",
    },
  {
        "description": "The vector in local coordinates corresponding to the provided vector in world coordinates.",
        "args": [
            {
                "name": "WORLD VECTOR",
                "description": "The vector in world coordinates that will be converted to local coordinates.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the resulting vector will be relative.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION"
            }
        ],
        "guid": "00000000B342",
        "enUS": "Local Vector Of",
    },
  {
        "guid": "00000000D411",
        "description": "A map constant.",
        "args": [
            {
                "name": "MAP",
                "description": "A map constant.",
                "type": "Map",
                "default": "AYUTTHAYA"
            }
        ],
        "enUS": "Map",
    },
  {
        "description": "The current round of the match, counting up from 1.",
        "args": [],
        "guid": "00000000B375",
        "enUS": "Match Round",
    },
  {
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": [],
        "guid": "00000000AD3B",
        "enUS": "Match Time",
    },
  {
        "guid": "00000000C418",
        "description": "The greater of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "enUS": "Max",
    },
  {
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "0000000081C4",
        "enUS": "Max Health",
    },
  {
        "guid": "00000000C416",
        "description": "The lesser of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "enUS": "Min",
    },
  {
        "guid": "00000000C410",
        "description": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "enUS": "Modulo",
    },
  {
        "guid": "00000000C40D",
        "description": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "enUS": "Multiply",
    },
  {
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000C324",
        "enUS": "Nearest Walkable Position",
    },
  {
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000C344",
        "enUS": "Normalize",
    },
  {
        "guid": "00000000B275",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "enUS": "Not",
    },
  {
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null,
        "guid": "00000000B594",
        "enUS": "Null",
    },
  {
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B29A",
        "enUS": "Number of Dead Players",
    },
  {
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B103",
        "enUS": "Number of Deaths",
    },
  {
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B101",
        "enUS": "Number of Eliminations",
    },
  {
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B102",
        "enUS": "Number of Final Blows",
    },
  {
        "description": "The number of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HeroValue",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B296",
        "enUS": "Number of Heroes",
    },
  {
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B297",
        "enUS": "Number of Living Players",
    },
  {
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B295",
        "enUS": "Number of Players",
    },
  {
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B29B",
        "enUS": "Number of Players On Objective",
    },
  {
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": [],
        "guid": "00000000B37D",
        "enUS": "Objective Index",
    },
  {
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B355",
        "enUS": "Objective Position",
    },
  {
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000BB0A",
        "enUS": "Opposite Team Of",
    },
  {
        "guid": "00000000B274",
        "description": "Whether either of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BooleanValue",
                "default": "TRUE"
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "enUS": "Or",
    },
  {
        "description": "The position in the world of the active payload.",
        "args": [],
        "guid": "00000000B356",
        "enUS": "Payload Position",
    },
  {
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": [],
        "guid": "00000000B357",
        "enUS": "Payload Progress Percentage",
    },
  {
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B3A3",
        "enUS": "Player Carrying Flag",
    },
  {
        "description": "The player closest to the reticle of the specified player, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to search for the closest player.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000C328",
        "enUS": "Player Closest To Reticle",
    },
  {
        "description": "The current value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable value to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "Variable",
                "default": "A"
            }
        ],
        "guid": "00000000B0FD",
        "enUS": "Player Variable",
    },
  {
        "description": "The player or array of players who occupy a specific slot in the game.",
        "args": [
            {
                "name": "SLOT",
                "description": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which to acquire a player or players.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B334",
        "enUS": "Players In Slot",
    },
  {
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to consider players.",
                "type": "TeamValue",
                "default": "TEAM"
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C32F",
        "enUS": "Players in View Angle",
    },
  {
        "description": "The array of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "HeroValue",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B338",
        "enUS": "Players On Hero",
    },
  {
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.",
        "args": [
            {
                "name": "CENTER",
                "description": "The center position from which to measure distance.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "TEAM",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "TeamValue",
                "default": "TEAM"
            },
            {
                "name": "LOS CHECK",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LosCheck",
                "default": "OFF"
            }
        ],
        "guid": "00000000B1E0",
        "enUS": "Players Within Radius",
    },
  {
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": [],
        "guid": "00000000B358",
        "enUS": "Point Capture Percentage",
    },
  {
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B11C",
        "enUS": "Position Of",
    },
  {
        "guid": "00000000C414",
        "description": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "enUS": "Raise To Power",
    },
  {
        "description": "A random integer between the specified min and max, inclusive.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B59B",
        "enUS": "Random Integer",
    },
  {
        "description": "A random real number between the specified min and max.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest real number allowed.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "MAX",
                "description": "The largest real number allowed.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B59A",
        "enUS": "Random Real",
    },
  {
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "guid": "00000000B599",
        "enUS": "Random Value In Array",
    },
  {
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            }
        ],
        "guid": "00000000B598",
        "enUS": "Randomized Array",
    },
  {
        "description": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "guid": "00000000C613",
        "enUS": "Ray Cast Hit Normal",
    },
  {
        "description": "The player hit by the ray cast (or null if no player is hit).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "guid": "00000000C611",
        "enUS": "Ray Cast Hit Player",
    },
  {
        "description": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": "Player",
                "default": "ALL PLAYERS"
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "BooleanValue",
                "default": "TRUE"
            }
        ],
        "guid": "00000000C597",
        "enUS": "Ray Cast Hit Position",
    },
  {
        "description": "A copy of an array with one or more values removed (if found).",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to remove values.",
                "type": "Any",
                "default": "ALL PLAYERS"
            },
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C421",
        "enUS": "Remove From Array",
    },
  {
        "guid": "00000000B117",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null,
        "enUS": "Right",
    },
  {
        "description": "The integer to which the specified value rounds.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to round.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "ROUNDING TYPE",
                "description": "Determines the direction in which the value will be rounded.",
                "type": "_Rounding",
                "default": "UP"
            }
        ],
        "guid": "00000000C354",
        "enUS": "Round To Integer",
    },
  {
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000AD3C",
        "enUS": "Score Of",
    },
  {
        "guid": "00000000C961",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "enUS": "Server Load",
    },
  {
        "guid": "00000000C997",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "enUS": "Server Load Average",
    },
  {
        "guid": "00000000C996",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "enUS": "Server Load Peak",
    },
  {
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C33C",
        "enUS": "Sine From Degrees",
    },
  {
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C340",
        "enUS": "Sine From Radians",
    },
  {
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BB7F",
        "enUS": "Slot Of",
    },
  {
        "description": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "VALUE RANK",
                "description": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.",
                "type": "Number",
                "default": "CURRENT ARRAY ELEMENT"
            }
        ],
        "guid": "00000000B5C0",
        "enUS": "Sorted Array",
    },
  {
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B25D",
        "enUS": "Speed Of",
    },
  {
        "description": "The current speed of a player in a specific direction in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The direction of travel in which to measure the player's speed.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B260",
        "enUS": "Speed Of In Direction",
    },
  {
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C356",
        "enUS": "Square Root",
    },
  {
        "guid": "00000000BA60",
        "description": "Text formed from a selection of strings and specified values.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "LocalizedString",
                "default": "HELLO"
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Any",
                "default": "NULL"
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Any",
                "default": "NULL"
            }
        ],
        "enUS": "String",
    },
  {
        "guid": "00000000C40A",
        "description": "The difference between two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": "Any",
                "default": "NUMBER"
            }
        ],
        "enUS": "Subtract",
    },
  {
        "description": "Tangent of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C7F8",
        "enUS": "Tangent From Degrees",
    },
  {
        "description": "Tangent of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C7FD",
        "enUS": "Tangent From Radians",
    },
  {
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B279",
        "enUS": "Team Of",
    },
  {
        "guid": "00000000B353",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "TeamValue",
                "default": "TEAM"
            }
        ],
        "enUS": "Team Score",
    },
  {
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B2F5",
        "enUS": "Throttle Of",
    },
  {
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": [],
        "guid": "00000000B361",
        "enUS": "Total Time Elapsed",
    },
  {
        "description": "The boolean value of true.",
        "args": null,
        "guid": "00000000AC39",
        "enUS": "True",
    },
  {
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "0000000081C5",
        "enUS": "Ultimate Charge Percent",
    },
  {
        "guid": "00000000B118",
        "description": "Shorthand for the directional vector(0, l, 0), which points upward.",
        "args": null,
        "enUS": "Up",
    },
  {
        "description": "The value found at a specific element of an array. Results in 0 if the element does not exist.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose element to acquire.",
                "type": "Any",
                "default": "GLOBAL VARIABLE"
            },
            {
                "name": "INDEX",
                "description": "The index of the element to acquire.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B52A",
        "enUS": "Value In Array",
    },
  {
        "guid": "00000000B0F1",
        "description": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.",
        "args": [
            {
                "name": "X",
                "description": "The x value of the vector.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "Y",
                "description": "The y value of the vector.",
                "type": "Number",
                "default": "NUMBER"
            },
            {
                "name": "Z",
                "description": "The z value of the vector.",
                "type": "Number",
                "default": "NUMBER"
            }
        ],
        "enUS": "Vector",
    },
  {
        "description": "The displacement vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting displacement vector begins.",
                "type": "Location",
                "default": "VECTOR"
            },
            {
                "name": "END POS",
                "description": "The position at which the resulting displacement vector ends.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B1EB",
        "enUS": "Vector Towards",
    },
  {
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B25C",
        "enUS": "Velocity Of",
    },
  {
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000BB2B",
        "enUS": "Vertical Angle From Direction",
    },
  {
        "description": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Location",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B27E",
        "enUS": "Vertical Angle Towards",
    },
  {
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B280",
        "enUS": "Vertical Facing Angle Of",
    },
  {
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B25F",
        "enUS": "Vertical Speed Of",
    },
  {
        "guid": "00000000B330",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null,
        "enUS": "Victim",
    },
  {
        "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
        "args": [
            {
                "name": "LOCAL VECTOR",
                "description": "The vector in local coordinates that will be converted to world coordinates.",
                "type": "Vector",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the local vector is relative.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION"
            }
        ],
        "guid": "00000000B33A",
        "enUS": "World Vector Of",
    },
  {
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B26F",
        "enUS": "X Component Of",
    },
  {
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B270",
        "enUS": "Y Component Of",
    },
  {
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "Vector",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000B272",
        "enUS": "Z Component Of",
    }
}
//end-json
