/*eslint "object-curly-spacing": [2, "always"]*/
"use strict";

import { Router, Route } from "react-router"; // rule enforces this
import { b } from "a"; // rule enforces this
const { c } = b; // rule enforces this

import C, {d} from "c"; // should throw an error but doesn't

/* Related: I searched far and wide, through issues and
   'spac*'-, 'curly'-, and 'block*'- related rules, but I couldn't find it:
   Can I make the missing space inside this curly an error?
*/
function nop() {return; }

Router.x(Route.x(C.x(c, d, nop())));
