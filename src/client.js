export default function Client (config, apiModules) {
  if (!apiModules) {
    throw new Error('No API Modules given for Client constructor')
  }

  for (let apiKey in apiModules) {
    this[apiKey] = new apiModules[apiKey](config)
  }
}
