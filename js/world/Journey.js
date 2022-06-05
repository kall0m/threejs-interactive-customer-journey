import * as THREE from "three";
import { Vector3 } from "three";

import { Text } from "troika-three-text";

import * as Data from "../data.js";
import Card from "./Card.js";

class Journey {
  constructor(scene, scenario, content, images) {
    this.scenario = scenario;
    this.content = content;
    this.images = images;

    this.scenarioCard = new THREE.Object3D();
    this.cards = [];

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.setJourney(scene);
  }

  setJourney(scene) {
    this.initRowTitleCards();
    this.initScenarioCard();
    this.initPhaseCards();
    this.initStepCards();
    this.initContentCards();

    scene.add(this.container);
  }

  initRowTitleCards() {
    for (let y = 0; y < Data.rowTitlesCount; y++) {
      const card = new Card(
        Data.cardWidth / 2,
        Data.cardHeight,
        Data.cardDepth,
        new Vector3(
          Data.cardWidth / 4,
          (Data.cardHeight + Data.verticalMargin) * -y,
          0
        ),
        Data.rowTitleCardColor,
        Data.rowTitleCardOpacity,
        this.createText(
          Data.rowTitles[y],
          Data.rowTitleFont,
          Data.rowTitleFontSize,
          Data.rowTitleTextColor,
          Data.cardWidth - 0.5,
          "center",
          "center",
          "middle"
        )
      );

      this.container.add(card.container);
    }
  }

  initScenarioCard() {
    const width =
      Data.cardWidth * Data.journeyColumns +
      Data.horizontalMargin * (Data.journeyColumns - 1);

    const card = new Card(
      width,
      Data.cardHeight,
      Data.cardDepth,
      new Vector3(width / 2 + Data.cardWidth / 2 + Data.horizontalMargin, 0, 0),
      Data.normalCardColor,
      Data.scenarioCardOpacity,
      this.createText(
        this.scenario.toUpperCase(),
        Data.headingFont,
        Data.headingFontSize,
        Data.normalTextColor,
        width,
        "center",
        "center",
        "middle"
      )
    );

    this.scenarioCard = card;
    this.container.add(card.container);
  }

  initPhaseCards() {
    const width1 = Data.cardWidth * 3 + Data.horizontalMargin * 2;
    const width2 = Data.cardWidth * 2 + Data.horizontalMargin;

    const card1 = new Card(
      width1,
      Data.cardHeight,
      Data.cardDepth,
      new Vector3(
        width1 / 2 + Data.cardWidth / 2 + Data.horizontalMargin,
        -(Data.cardHeight + Data.verticalMargin),
        0
      ),
      Data.phaseCardColor,
      Data.phaseCardOpacity,
      this.createText(
        Data.phases[0],
        Data.phaseFont,
        Data.phaseFontSize,
        Data.phaseTextColor,
        width1,
        "center",
        "center",
        "middle"
      )
    );

    this.container.add(card1.container);

    const card2 = new Card(
      width2,
      Data.cardHeight,
      Data.cardDepth,
      new Vector3(
        width2 / 2 +
          Data.cardWidth / 2 +
          Data.horizontalMargin +
          width1 +
          Data.horizontalMargin,
        -(Data.cardHeight + Data.verticalMargin),
        0
      ),
      Data.phaseCardColor,
      Data.phaseCardOpacity,
      this.createText(
        Data.phases[1],
        Data.phaseFont,
        Data.phaseFontSize,
        Data.phaseTextColor,
        width2,
        "center",
        "center",
        "middle"
      )
    );

    this.container.add(card2.container);

    const card3 = new Card(
      width2,
      Data.cardHeight,
      Data.cardDepth,
      new Vector3(
        width2 / 2 +
          Data.cardWidth / 2 +
          Data.horizontalMargin +
          width1 +
          Data.horizontalMargin +
          width2 +
          Data.horizontalMargin,
        -(Data.cardHeight + Data.verticalMargin),
        0
      ),
      Data.phaseCardColor,
      Data.phaseCardOpacity,
      this.createText(
        Data.phases[2],
        Data.phaseFont,
        Data.phaseFontSize,
        Data.phaseTextColor,
        width2,
        "center",
        "center",
        "middle"
      )
    );

    this.container.add(card3.container);
  }

  initStepCards() {
    const offsetX = 1,
      offsetY = 2;

    for (let i = 0; i < Data.journeyColumns; i++) {
      const pos = new Vector3(
        (Data.cardWidth + Data.horizontalMargin) * (i + offsetX),
        (Data.cardHeight + Data.verticalMargin) * -offsetY,
        0
      );

      let card = new Card(
        Data.cardWidth,
        Data.cardHeight,
        Data.cardDepth,
        pos,
        Data.stepCardColor,
        Data.stepCardOpacity,
        this.createText(
          Data.steps[i],
          Data.stepFont,
          Data.stepFontSize,
          Data.stepTextColor,
          Data.cardWidth - 0.5,
          "left",
          "center",
          "middle"
        )
      );

      this.container.add(card.container);
    }
  }

  initContentCards() {
    const offsetX = 1,
      offsetY = 3;

    for (let y = 0; y < Data.journeyRows; y++) {
      for (let x = 0; x < Data.journeyColumns; x++) {
        const pos = new Vector3(
          (Data.cardWidth + Data.horizontalMargin) * (x + offsetX),
          (Data.cardHeight + Data.verticalMargin) * -(y + offsetY),
          0
        );

        let card;

        if (y === 1) {
          // image card
          card = new Card(
            Data.cardWidth,
            Data.cardHeight,
            Data.cardDepth,
            pos,
            Data.normalCardColor,
            Data.imageCardOpacity,
            this.createText(
              "",
              Data.bodyFont,
              Data.bodyFontSize,
              Data.normalTextColor,
              Data.cardWidth,
              "center",
              "center",
              "middle"
            ),
            this.images[x]
          );
        } else if (y === 4) {
          // emoji card
          card = new Card(
            Data.cardWidth,
            Data.cardHeight,
            Data.cardDepth,
            pos,
            Data.normalCardColor,
            Data.normalCardOpacity,
            this.createText(
              this.content[y][x],
              Data.emojiFont,
              Data.emojiFontSize,
              Data.normalTextColor,
              Data.cardWidth,
              "center",
              "center",
              "middle"
            )
          );
        } else {
          // black text card
          card = new Card(
            Data.cardWidth,
            Data.cardHeight,
            Data.cardDepth,
            pos,
            Data.normalCardColor,
            Data.normalCardOpacity,
            this.createText(
              this.content[y][x],
              Data.bodyFont,
              Data.bodyFontSize,
              Data.normalTextColor,
              Data.cardWidth - 0.5,
              "left",
              "center",
              "middle"
            )
          );
        }

        this.cards.push(card);
        this.container.add(card.container);
      }
    }
  }

  createText(
    text,
    font,
    fontSize,
    color,
    maxWidth,
    textAlign,
    anchorX,
    anchorY
  ) {
    const t = new Text();

    t.text = text;
    t.font = font;
    t.fontSize = fontSize;
    t.color = color;
    t.maxWidth = maxWidth;
    t.textAlign = textAlign;
    t.anchorX = anchorX;
    t.anchorY = anchorY;
    t.lineHeight = 1.5;

    t.sync();

    return t;
  }

  update(scenario, content, images, highlightColor) {
    if (this.scenarioCard.text.text !== scenario) {
      this.scenarioCard.highlight(highlightColor);
      this.scenarioCard.updateText(scenario.toUpperCase());
    }

    let cardsCounter = 0;
    for (let y = 0; y < Data.journeyRows; y++) {
      for (let x = 0; x < Data.journeyColumns; x++) {
        this.cards[cardsCounter].highlight(
          new THREE.Color(Data.highlightColors[0])
        );

        if (this.cards[cardsCounter].text.text !== content[y][x]) {
          this.cards[cardsCounter].updateText(content[y][x]);

          if (
            !this.cards[cardsCounter].mesh.material.color.equals(highlightColor)
          ) {
            this.cards[cardsCounter].highlight(highlightColor);
          }
        }

        if (y === 1) {
          if (
            this.cards[cardsCounter].image.material.map.source.data.src !==
            images[x]
          ) {
            this.cards[cardsCounter].updateImage(images[x]);

            if (
              !this.cards[cardsCounter].mesh.material.color.equals(
                highlightColor
              )
            ) {
              this.cards[cardsCounter].highlight(highlightColor);
            }
          }
        }

        cardsCounter++;
      }
    }
  }
}

export default Journey;
