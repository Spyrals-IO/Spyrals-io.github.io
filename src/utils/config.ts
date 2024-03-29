const configProdJson = require('../../config.prod.json')

let configDevJson;

try {
  configDevJson = require('../../config.dev.json')
} catch {
  configDevJson = {}
}


interface Config {
  url: string
  svg_path: string
  logo: string
  logo_alt: string
  telephone: string
  mail: string
  home_title: string
  home_description: string
  contact_title: string
  contact_description: string
  menu: {
    label_1: string
    link_1: string
    label_2: string
    link_2: string
    label_3: string
    link_3: string
    label_4: string
    link_4: string
  }
  footer: {
    label_1: string
    label_2: string
    label_3: string
    link_3: string
    label_4: string
    link_4: string
    hosted_text: string
    hosted_link: string
    hosted_logo: string
    hosted_alt: string
  }
  spyrals: {
    title: string
    text: string
    button_link: string
    button_label: string
    img1: string
    img1_alt: string
    img2: string
    img2_alt: string
  }
  offer: {
    title: string
    text: string
    button_label: string
    button_link: string
    card1_title: string
    card1_text: string
    card2_title: string
    card2_text: string
    card3_title: string
    card3_text: string
  }
  skills: {
    title: string
    gallery: [
      {
        img: string
        alt: string
      }
    ],
    colors: string[]
    rotation: string[]
    translate: string[]
  }
  team: {
    title: string
    text: string
    arrow: string
    skill_title: string
    responsability_title: string
    merlin: {
      name: string
      job: string
      job_verso: string
      portrait: string
      img_verso_1: string
      img_verso_2: string
      skill_1: string
      skill_2: string
      skill_3: string
      skill_4: string
      skill_5: string
      skill_6: string
      skill_7: string
      skill_8: string
      skill_9: string
      skill_10: string
      responsability_1: string
      responsability_2: string
      responsability_3: string
      responsability_4: string
      responsability_5: string
      responsability_6: string
      responsability_7: string
    }
    mallorie: {
      name: string
      job: string
      job_verso: string
      portrait: string
      img_verso_1: string
      skill_1: string
      skill_2: string
      skill_3: string
      skill_4: string
      skill_5: string
      skill_6: string
      responsability_1: string
      responsability_2: string
      responsability_3: string
      responsability_4: string
    }
    julien: {
      name: string
      job: string
      job_verso: string
      portrait: string
      img_verso_1: string
      img_verso_2: string
      img_verso_3: string
      skill_1: string
      skill_2: string
      skill_3: string
      skill_4: string
      skill_5: string
      skill_6: string
      skill_7: string
      skill_8: string
      responsability_1: string
      responsability_2: string
      responsability_3: string
      responsability_4: string
    }
    fabien: {
      name: string
      job: string
      job_verso: string
      portrait: string
      img_verso_1: string
      img_verso_2: string
      img_verso_3: string
      skill_1: string
      skill_2: string
      skill_3: string
      skill_4: string
      skill_5: string
      skill_6: string
      skill_7: string
      skill_8: string
      skill_9: string
      skill_10: string
      responsability_1: string
      responsability_2: string
    }
    thibaut: {
      name: string
      job: string
      job_verso: string
      portrait: string
      img_verso_1: string
      img_verso_2: string
      img_verso_3: string
      img_verso_4: string
      img_verso_5: string
      img_verso_6: string
      img_verso_7: string
      img_verso_8: string
      img_verso_9: string
      skill_1: string
      skill_2: string
      skill_3: string
      skill_4: string
      skill_5: string
      responsability_1: string
      responsability_2: string
      responsability_3: string
      responsability_4: string
    }
  }
  customers: {
    title: string
    gallery: [
      {
        logo: string
        link: string
      }
    ]
  }
  worklife: {
    title: string
    text: string
    arrow: string
    gallery: [
      {
      img: string
      alt: string
      height: string
      width: string
      }
    ]
    colors: (string | [string, string])[]
    rotation: string[]
    translate: string[]
    zIndex: string[]
  }
  contact: {
    title: string
    text: string
    button_label: string
    button_link: string
    phone_icon: string
    mail_icon: string
    img1: string
    img1_alt: string
    img2: string
    img2_alt: string
  }
  fixed: {
    contact_text: string
    contact_link: string
    contact_img: string
    contact_img_alt: string
    video_text: string
    video_link: string
    video_img: string
    video_img_alt: string
  }
  contactForm: {
    title: string
    text: string
    phone_icon: string
    phone_alt: string
    img: string
    img_alt: string
    label_firstname: string
    label_name: string
    label_mail: string
    label_phone: string
    label_company: string
    label_request: string
    label_submit: string
  }
  socials: {
    facebook_link: string
    facebook_logo_white: string
    facebook_logo_black: string
    linkedin_link: string
    linkedin_logo_white: string
    linkedin_logo_black: string
  }
  quotes: {
    img_nodes: string,
    img_yellowQuotes: string,
    quotes1_text: string
    quotes1_author: string
    quotes2_text: string
    quotes2_author: string
    quotes3_text: string
    quotes3_author: string
    quotes4_text: string
    quotes4_author: string
  }
}

export default {...configProdJson, ...configDevJson} as Config
