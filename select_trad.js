/*
 Copyright (C) 2017  Nicolas Bertrand

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// The onClicked context menu callback function.
function onClickHandler(info, tab) {
        var selection = info.selectionText
        var wordrefUrl = "http://www.wordreference.com/redirect/translation.aspx?w=" 
                + selection + "&dict=enfr"
        console.log("item " + info.menuItemId + " clicked");
        console.log("info: " + JSON.stringify(info));
        console.log("tab: " + JSON.stringify(tab));
        if (selection) {
                console.log("selection: <" + selection +">, url: <" + wordrefUrl + ">")
                chrome.tabs.create({ url: wordrefUrl})
        } else
                console.log("selection empty")
};

// Add event listener on context menu
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu for selection context only
chrome.runtime.onInstalled.addListener(function() {
        var context = "selection";
        var title = "Traduire \"%s\"";
        var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context_selection"});
        console.log(" item:" + id);
});

