figma.showUI(__html__, { width: 300, height: 260, title: "Immo Assistant" });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    figma.createPage().name = "- 🧹 Clean-up before merge 🧹 -"

    figma.createPage().name = "--------- About ---------"
    figma.createPage().name = "ℹ️ Goals & Objectives"

    figma.createPage().name = "--------- Discovery ---------"
    figma.createPage().name = "🔗 Useful Documentation & Links"
    figma.createPage().name = "🔎 Benchmark Research"
    figma.createPage().name = "🩹 Pain Points"

    figma.createPage().name = "--------- Ideation ---------"
    figma.createPage().name = "🔀 User Flow"
    figma.createPage().name = "🎙️ Stakeholder Feedback"
    figma.createPage().name = "✍️ UX Writing"
    figma.createPage().name = "📃 Wireframes"
    figma.createPage().name = "🗺️ Exploratory work"
    figma.createPage().name = "🖥️ Mock-ups (Hi-Fi Designs)"

    figma.createPage().name = "--------- Prototypes ---------"
    figma.createPage().name = "🤖 Web"
    figma.createPage().name = "🤖 Apps"
  
    figma.createPage().name = "--------- Tests ---------"
    figma.createPage().name = "🧪 A/B Test"
    
    figma.createPage().name = "--------- Handover & Handshacke ---------"
    figma.createPage().name = "📐 Specs"
    figma.createPage().name = "🔬 Design QA"

    figma.createPage().name = "--------- Translations ---------"
    figma.createPage().name = "🇩🇪 Language A"
    figma.createPage().name = "🇫🇷 Language B"
    figma.createPage().name = "🗝️ Lokalise Keys"
    
    figma.createPage().name = "--------- Misc ---------"
    figma.createPage().name = "🧩 Components Playgroud"
    figma.createPage().name = "🗑️ Archive"
  }

  figma.closePlugin();
};
