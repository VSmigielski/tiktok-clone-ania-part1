const { createClient } = require("@astrajs/collections")

const collection = "tktkposts"

exports.handler = async function (event, context) {
  // create an {astra_db} client
const astraClient = await createClient({
  astraDatabaseId: process.env.ASTRA_DB_ID,
  astraDatabaseRegion: process.env.ASTRA_DB_REGION,
  applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
})

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection)

    const data = [
      {
        id: 0,
        name: "Jen Winter",
        username: "jenwinter92",
        avatar: "https://media-exp1.licdn.com/dms/image/C5603AQEAuStN1IamPA/profile-displayphoto-shrink_400_400/0/1621939891181?e=1635379200&v=beta&t=J611oELKiJJcQUp2fiB-U8wM2oDpgLfwOfxV_uBDV8A",
        is_followed: true,
        video: "https://i.imgur.com/FTBP02Y.mp4",
        caption: "These ducks are MEGA cute",
        likes: 10,
        comments: 2,
        timestamp: "2019-03-10T09:08:31.020Z",
        button_visible: true,
      },
      {
        id: 1,
        name: "Dawn Raine",
        username: "dawnraine",
        avatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/11201173_1077253048952681_5271227278063963710_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uycpGUiFR-MAX_GcQDg&_nc_ht=scontent-lga3-1.xx&oh=4aedd4e300f1061760e34ca876b4447f&oe=615026BB",
        is_followed: false,
        video: "https://player.vimeo.com/external/565791593.hd.mp4?s=2bc2c518258c54254777fe58dd78578400a34de1&profile_id=172&oauth2_token_id=57447761",
        caption: "Sugar gliders, gliding on the floor #gliding",
        likes: 12,
        comments: 2,
        timestamp: "2020-03-10T09:08:31.020Z",
        button_visible: true,
      },
      {
        id: 2,
        name: "Skylar Smith",
        username: "xx_sky",
        avatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/11248162_999812593363394_1263628740345788312_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=zJuKnYKuH-8AX9erVbE&tn=cQsmGY1MicJJvgYW&_nc_ht=scontent-lga3-1.xx&oh=c07e2b67fea22ad52789227d40d14db0&oe=614EC234",
        is_followed: true,
        video: "https://player.vimeo.com/external/519885693.hd.mp4?s=f77e6e1e51b222f133856c0ea2adc28c2d2c196e&profile_id=172&oauth2_token_id=57447761",
        caption: "#wokeuplikethis",
        likes: 2,
        comments: 4,
        timestamp: "2020-04-10T09:08:31.020Z",
        button_visible: true,
      },
      {
        id: 3,
        name: "Veronica Smigielski",
        username: "v_smigiel",
        avatar: "https://avatars.githubusercontent.com/u/66082052?v=4",
        is_followed: false,
        video: "https://player.vimeo.com/external/509922170.hd.mp4?s=9287f402fb338bb6ab88818740228f474a6f0ef3&profile_id=175&oauth2_token_id=57447761",
        caption: "Breakfast is served!",
        likes: 10,
        comments: 2,
        timestamp: "2020-05-10T09:08:31.020Z",
        button_visible: true,
      },
      {
        id: 0,
        name: "Eirys Reign",
        username: "reign_of_eirys",
        avatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/10291687_813731621971493_8346201981152650035_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=p8fCpNbYEf8AX_Ct9XK&tn=cQsmGY1MicJJvgYW&_nc_ht=scontent-lga3-1.xx&oh=6eabbff83aca4953f6805ac20fa4c840&oe=614EB8CD",
        is_followed: true,
        video: "https://player.vimeo.com/external/510128518.sd.mp4?s=759cc1fb5f475c435597977f5d6ba089f73721f3&profile_id=165&oauth2_token_id=57447761",
        caption: "Smell the roses",
        likes: 231,
        comments: 20,
        timestamp: "2020-09-10T09:08:31.020Z",
        button_visible: true,
      },
    ]

  try {
    for (let i = 0; i < data.length; i++) {
      await posts.create(data[i].id, data[i])
    }

    return {
      statusCode: 200,
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}