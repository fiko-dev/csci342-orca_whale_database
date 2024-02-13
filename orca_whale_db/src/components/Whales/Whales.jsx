/* Whales.js */
import React from 'react';
import SpeciesProfile from '../WhaleGroup/SpeciesProfile';
import './Whales.css';

const whaleDataAPI = [
  {
    id: 1,
    img: 'https://media.fisheries.noaa.gov/dam-migration/1100x750-graywhale-swfsc-mmtd-chrisjohnson.jpg',
    name: 'Gray Whale',
    description: 'A baleen whale recognized for its mottled gray coloration and distinctive heart-shaped blow, primarily inhabiting the coastal waters of the North Pacific.',
    bioLink: "/whales/grays",
  },
  {
    id: 2,
    img: 'https://www.fisheries.noaa.gov/s3/dam-migration/2160x1440_humpbackwhale_noaa.jpg',
    name: 'Humpback Whale',
    description: 'A large baleen whale characterized by its distinctive humped back, long pectoral fins, and complex vocalizations, often engaging in acrobatic behaviors such as breaching and tail-slapping.',
    bioLink: "/whales/humpbacks",
  },
  {
    id: 3,
    img: 'https://cdn.theatlantic.com/thumbor/ydanvjFnPfr7mUXDeAJFBw_oMH4=/0x214:4114x2528/960x540/media/img/mt/2019/04/shutterstock_554899423_1/original.jpg',
    name: 'Orca',
    description: 'Highly intelligent and social marine mammals known for their distinctive black and white coloration, exceptional hunting skills, and complex social structures within tightly-knit family pods.',
    bioLink: "/whales/orcas",
  },
];

function Whales() {
  const cardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
    justifyContent: 'center', // Center content horizontally
  };

  return (
    <div className="page-container">
      <br />
      <h1 className="page-header">Whales of the Pacific Northwest!</h1>
      <div className='img-body'>
        <img className='whale-img' src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-place-to-see-orcas-vancouver-canada-1920x890.jpg" />
      </div>
      <div style={cardStyle}>
        {whaleDataAPI.map((whale) => (
          <SpeciesProfile key={whale.id} img={whale.img} name={whale.name} description={whale.description} bioLink={whale.bioLink} />
        ))}
      </div>
    </div>
  );
}

export default Whales;
