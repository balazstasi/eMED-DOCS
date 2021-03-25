(function(window, undefined) {
  var dictionary = {
    "3f946855-c6d9-425c-96d7-d44404df1693": "Chat",
    "8f4497ef-5d3c-4c47-a0d0-df184520fff2": "Notes",
    "fa752b23-9168-41c9-b236-c1a85fedb080": "FirstLogin",
    "dc215e49-1eb8-4399-a03f-f56016b77333": "Main",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LoginScreen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);