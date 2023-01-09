// import { skills } from '../data/skills.js'
import { Skill } from "../models/skills.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
  }

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
    // console.log(req.body)
  // req.body.dimiKnows = false
  // (req.body.dimiKnows === 'on') ? req.body.dimiKnows = true : req.body.dimiKnows = false
  // Skill.create(req.body)
  req.body.dimiKnows = !!req.body.dimiKnows
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function update(req, res) {
  req.body.dimiKnows = !!req.body.dimiKnows
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    res.redirect(`/skills/${req.params.id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update,
}