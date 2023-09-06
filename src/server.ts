import { Server } from "miragejs"
import class2024 from "./data/class2024.json"
import class2025 from "./data/class2025.json"
import class2026 from "./data/class2026.json"
import class2027 from "./data/class2027.json"
import history from "./data/history.json"
import campusOverview from './data/campusOverview.json'
import studentNames from './data/studentNames.json'

export function makeServer({ environment = "development" } = {}) {
    const server = new Server({
        environment,
        fixtures: {
            class2027,
            class2024,
            class2025,
            class2026,
            history,
            campusOverview,
            studentNames
        },
        seeds(server) {
            server.loadFixtures()
        },
        routes() {
            this.timing = 600
            this.namespace = "api/loa/"
            this.get("get-class/2024", () => {
                return class2024
            })
            this.get("get-class/2025", () => {
                return class2025
            })
            this.get("get-class/2026", () => {
                return class2026
            })
            this.get("get-class/2027", () => {
                return class2027
            })
            // this.get("history", () => {
            //     return history
            // })
            this.get("campus-overview", () => {
                return campusOverview
            })
            this.get("student-names", () => {
                return studentNames
            })
        },
    })
    return server
}