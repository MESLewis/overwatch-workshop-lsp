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

import { OwwKeywords } from '../overwatch-script';

type guidMap = [GameMode, string, string];

export enum GameMode {
  assault,
  ctf,
  control,
  deathmatch,
  elimination,
  escort,
  hybrid,
  practiceRange,
  skirmish,
  teamDeathmatch
}

const guids: guidMap[] = [
  [GameMode.assault, "00000000CD59", "Assault"],
  [GameMode.ctf, "000000005A56", "Capture The Flag"],
  [GameMode.control, "00000000CD5B", "Control"],
  [GameMode.deathmatch, "000000006853", "Deathmatch"],
  [GameMode.elimination, "000000005887", "Elimination"],
  [GameMode.escort, "00000000CD5C", "Escort"],
  [GameMode.hybrid, "00000000CD5A", "Hybrid"],
  [GameMode.practiceRange, "0000000040BE", "Practice Range"],
  [GameMode.skirmish, "000000005A61", "Skirmish"],
  [GameMode.teamDeathmatch, "000000006854", "Team Deathmatch"]
]
        //  "000000006DF1",
        //  "Yeti Hunter",
        //  "000000004AF4",
        //  "Junkenstein's Revenge",
        //  "000000004989",
        //  "Lúcioball",
        //  "00000000525A",
        //  "Mei's Snowball Offensive",