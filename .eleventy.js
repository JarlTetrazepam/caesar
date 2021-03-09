module.exports = function(config) {

    // file extensions to be added to output
    config.setTemplateFormats([
        "md",
        "css"
    ])

    // for some godly unknown reason, 
    // I can't call js file extensions directly without getting reference errors. pretty dumb.
    config.addPassthroughCopy("./src/caesar/js")

    // reassigning some default folders
    return {
        dir: {
            input: "src/caesar",
            includes: "templates"
        }
    }
}