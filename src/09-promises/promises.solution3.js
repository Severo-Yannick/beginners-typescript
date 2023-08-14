"use strict";
exports.__esModule = true;
exports.fetchLukeSkywalker = void 0;
var fetchLukeSkywalker = function () {
    return fetch("https://swapi.dev/api/people/1")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("HTTP Error: ".concat(response.status));
        }
        return response.json();
    })
        .then(function (data) {
        console.log("data -----", data);
        return data;
    })["catch"](function (error) {
        console.error("An error occurred:", error);
        throw error;
    });
};
exports.fetchLukeSkywalker = fetchLukeSkywalker;
