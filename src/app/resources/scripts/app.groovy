get('/health') {
    setHeader("Content-Type", "application/json")
    """{
    '1' : { 'GREEN': "We apologise for any inconvenience" },
    '2' : { 'RED': "So this is it then; we're going to die?" }
}"""
}

get('/stats') {
    setHeader("Content-Type", "application/json")
    """{
    '1' : { 'Throughput': '10', 'Timeouts' : '1' },
    '2' : { 'Throughput': '0', 'Timeouts : '100' }
}"""
}

get('/info') {
    setHeader("Content-Type", "application/json")
    """{
    '1' : { 'Name' : 'Component A', 'Version': '2.1.0', 'Properties' : {'dbdeploy-changelog-number' : '26'} },
    '2' : { 'Name' : 'Component B', 'Version': '1.0.1-SNAPSHOT', 'Properties : {'dbdeploy-changelog-number' : '37'} }
}"""
}