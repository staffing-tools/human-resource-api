gem = find_program('gem')
asciidoctor = find_program('asciidoctor')

run_command(gem, 'which', 'asciidoctor-pdf', check:true)
message('gem asciidoctor-pdf was found')

run_command(gem, 'which', 'asciidoctor-diagram', check:true)
message('gem asciidoctor-diagram was found')

parts = files(
    'COPYING',
    'SUMMARY'
)    

custom_target(
    'design-manual',
    depend_files : parts,
    input : 'design_manual.adoc',
    command : [
        asciidoctor, 
        '-r', 'asciidoctor-pdf', 
        '-r', 'asciidoctor-diagram', 
        '-b', 'pdf',
        '-a', 'version='+get_option('version'),
        '-o', 'design_manual.pdf', 
        '@INPUT@'
    ],
    output : 'design_manual.pdf'
)