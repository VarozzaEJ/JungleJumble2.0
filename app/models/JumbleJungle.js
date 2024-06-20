import { generateId } from "../utils/GenerateId.js"

export class JumbleJungle {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = null
    this.startTime = new Date()
    this.endTime = new Date()
  }
  get listTemplate() {
    return `
    <h5><span><button onclick="app.JumbleJunglesController.selectJumble('${this.id}')"
                          class="btn btn-dark">Start</button></span>${this.name} </h5>`
  }
  get selctedTemplate() {
    return `
    <div class="col-md-7">
                <h5 class="text-start ps-5"> ${this.name} Jumble </h5>
                <div class="text-start ps-5"> ${this.body}</div>
              </div>`
  }
  get StartTime() {
    return `this.startTime.toLocaleString('en-US', { minute: "numeric", second: "2-digit" })`
  }
  get EndTime() {
    return `this.endTime.toLocaleString('en-US', { minute: "numeric", second: "2-digit", })`
  }
  get FastestTime() {
    return `this.fastestTime = Number(this.EndTime) - Number(this.StartTime)`
  }
}