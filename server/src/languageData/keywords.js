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

"use strict";

const customGameSettingsKw =
//begin-json
{
  {
        "guid": "0000000058E0",
        "enUS": "On",
    },
  {
        "guid": "0000000058DF",
        "enUS": "Off",
    },
  {
        "guid": "000000005923",
        "enUS": "Enabled",
    },
  {
        "guid": "000000006A06",
        "enUS": "Disabled",
    },
  {
        "guid": "0000000058F3",
        "enUS": "Yes",
    },
  {
        "guid": "0000000058F4",
        "enUS": "No",
    }
}
//end-json

const ruleKw = 
//begin-json
{
  {
        "guid": "00000000C7B4",
        "enUS": "rule",
    },
  {
        "guid": "00000000C7B5",
        "enUS": "event",
    },
  {
        "guid": "00000000C7B6",
        "enUS": "conditions",
    },
  {
        "guid": "00000000C7B7",
        "enUS": "actions",
    },
  {
        "guid": "00000000C7B8",
        "enUS": "disabled",
    },
  {
        "guid": "00000000EB73",
        "enUS": "variables",
    },
  {
        "guid": "00000000EB74",
        "enUS": "global",
    },
  {
        "guid": "00000000EB75",
        "enUS": "player",
    },
  {
        "guid": "00000000FFFA",
        "enUS": "subroutines",
    },
  {
        "guid": "000000010030",
        "enUS": "settings",
    }
}
//end-json

//Event keywords
const eventKw = 
//begin-json
{
  {
        "guid": "000000007895",
        "enUS": "Ongoing - Global",
    },
  {
        "guid": "000000007897",
        "enUS": "Ongoing - Each Player",
    },
  {
        "guid": "00000000B313",
        "enUS": "Player Took Damage",
    },
  {
        "guid": "00000000B52D",
        "enUS": "Player Dealt Damage",
    },
  {
        "guid": "0000000078F8",
        "enUS": "Player Dealt Final Blow",
    },
  {
        "guid": "00000000B314",
        "enUS": "Player Died",
    },
  {
        "guid": "0000000078F7",
        "enUS": "Player Earned Elimination",
    },
  {
        "guid": "00000000CC16",
        "enUS": "Player Dealt Healing",
    },
  {
        "guid": "00000000CC17",
        "enUS": "Player Received Healing",
    },
  {
        "guid": "00000000CC18",
        "enUS": "Player Joined Match",
    },
  {
        "guid": "00000000CC19",
        "enUS": "Player Left Match",
    },
  {
        "guid": "00000000FFF6",
        "enUS": "Subroutine",
    }
}
//end-json

const eventTeamKw = 
//begin-json
{
  {
        "guid": "000000004672",
        "enUS": "Team 1",
    },
  {
        "guid": "000000004673",
        "enUS": "Team 2",
    },
  {
        "guid": "000000007804",
        "enUS": "All",
    }
}
//end-json

const slotKw = 
//begin-json
{
    "guid": "00000000C231",
    "enUS": "Slot %1$s",
}
//end-json
const eventSlotKw = {}
for (var i = 0; i < 12; i++) {
    eventSlotKw[i] = Object.assign({}, slotKw)
    for (var key of Object.keys(eventSlotKw[i])) {
        eventSlotKw[i][key] = eventSlotKw[i][key].replace("%1$s", i);
    }
}

const eventPlayerKw = 
//begin-json
{
  {
        "guid": "0000000077FE",
        "enUS": "All",
    }
}
//end-json
Object.assign(eventPlayerKw, eventSlotKw, heroKw);

var constantKw = {};
for (var constant of Object.keys(constantValues)) {
    for (var value of Object.keys(constantValues[constant])) {
        constantKw[constant+"."+value] = constantValues[constant][value];
    }
}

//A value is defined as a function that returns a value (eg: "Has Spawned"), or a constant (number, vector, hero...)
const valueKw = Object.assign({}, valueFuncKw, constantKw);

const funcKw = Object.assign({}, actionKw, valueFuncKw);
