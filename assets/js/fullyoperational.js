/* ===================================================
 * bootstrap-transition.js v2.3.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* open and close 
   * ======================================================= */
button = document.getElementsByTagName('openlink');
para = document.getElementsByTagName('hiddentext');

function show(x) {
    para[x].style.display = 'block';
    button[x].onclick = function() {
        hide(x);
    }
}

function hide(x) {
    para[x].style.display = 'none';
    button[x].onclick = function() {
        show(x);
    }
}

button[0].onclick = function() {
    show(0);
}

button[1].onclick = function() {
    show(1);
}
button[2].onclick = function() {
    show(2);
}