get("/health") {
    setHeader("Access-Control-Allow-Origin", "*");
    setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    setHeader("Content-Type", "application/json")
    """[
    {"id": "1", "status": { "level": "GREEN", "message": "We apologise for any inconvenience" } },
    {"id": "2", "status": { "level": "RED",   "message": "So this is it then; we're going to die?" } }
]
"""
}

get("/stats") {
    setHeader("Access-Control-Allow-Origin", "*");
    setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    setHeader("Content-Type", "application/json")
    """[
    {"id": "1", "stats": { "Throughput": "10", "Timeouts" : "1" } },
    {"id": "2", "stats": { "Throughput": "0", "Timeouts" : "100" } }
]"""
}

get("/info") {
    setHeader("Access-Control-Allow-Origin", "*");
    setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    setHeader("Content-Type", "application/json")
    """[
    {"id": "1", "name" : "Component A", "version": "2.1.0",          "properties": {"dbdeploy-changelog-number" : "26", "db-sid": "bistromath", "db-user": "arthur"} },
    {"id": "2", "name" : "Component B", "version": "1.0.1-SNAPSHOT", "properties": {"dbdeploy-changelog-number" : "37", "db-sid": "bistromath", "db-user": "slartibartfast"} }
]"""
}

get("/component/1") {
    setHeader("Access-Control-Allow-Origin", "*");
    setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    setHeader("Content-Type", "application/json")
    """{"id": "1", "name" : "Magrathea"}"""
}
get("/component/2") {
    setHeader("Access-Control-Allow-Origin", "*");
    setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    setHeader("Content-Type", "application/json")
    """{"id": "2", "name" : "Ursa Minor Beta"}"""
}