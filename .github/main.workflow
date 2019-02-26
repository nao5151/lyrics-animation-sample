workflow "New workflow" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filters" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  args = "ref refs/heads/master"
}

action "Setting" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filters"]
  args = "run workflow:setting"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Setting"]
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run workflow:deploy"
  secrets = ["GITHUB_TOKEN"]
}
