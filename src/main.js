const GLib = imports.gi.GLib;

const Application = imports.application;

function start() {
    let application = new Application.Application();
    return application.run(ARGV);
}
