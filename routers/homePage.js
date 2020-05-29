const { Router } = require("express");
const HomePage = require("../models/").homePage;
const Story = require("../models/").story;

const router = new Router();

async function getAllHomePages() {
  try {
    const allHomePages = await HomePage.findAll({ order: [["id"]] });
    return allHomePages.map((page) => page.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

router.get("/", async (req, res, next) => {
  res.send(await getAllHomePages());
});

async function getHomePageAndStoriesByID(id) {
  try {
    const homePage = await HomePage.findByPk(id, {
      include: [Story],
      order: [[Story, "createdAt", "DESC"]],
    });
    return homePage;
  } catch (e) {
    console.error(e);
  }
}

router.get("/:id", async (req, res, next) => {
  const homePageId = req.params.id;
  if (isNaN(parseInt(homePageId))) {
    res.status(400).send("Home Page ID is not a number");
  }

  const homePage = await getHomePageAndStoriesByID(homePageId);

  if (homePage === null) {
    res.status(404).send("Homepage not found");
  } else {
    res.status(200).send(homePage);
  }
});

module.exports = router;
