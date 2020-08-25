import { exec } from 'child_process';

type callback = (err?: any) => void;

export function rebuild_readme(cb: callback) {
    exec('ruby vendor/asciidoctor-extensions-lab/scripts/asciidoc-coalescer.rb data/README.in.adoc -o README.adoc', function (err, _stdout, _stderr) {
        if (err) {
            cb(err);
        }
        cb();
    });
}
