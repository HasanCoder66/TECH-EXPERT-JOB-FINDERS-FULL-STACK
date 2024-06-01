
import React, { useEffect, useState } from 'react';
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectCoverTempCard from './SelectCoverTempCard';
import axios from 'axios';
import { COVERLETTER_TEMP } from '../../constants/apis';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { letterSuccess } from '../../Redux/Slices/coverLetterSlices';
function SelectCoverTemplateListing({ activeTab }) {
    // console.log(activeTab)
    // let free = [];
    const [freeTemplate, setFreeTemplate] = useState([])
    const [selectedTemp, setSelectedTemp] = useState('')
    const dispatch = useDispatch()
    const getCoverletterTempApi = async () => {
        const res = await axios.get(`/api${COVERLETTER_TEMP}`);
        // console.log(res?.data?.data)
        setFreeTemplate(res?.data?.data)
        // console.log(freeTemplate, "===>>> free")
    }


  useEffect(() => {
    getCoverletterTempApi();
  }, []);



  const premium = [
    {
      name: "Rizwan Cover Letter",
      src: cvImg3,
      amount: "4$",
    },
    {
      name: "Salik Cover Letter",
      amount: "4$",
      src: cvImg3,
    },
    {
      name: "Hassan Cover Letter",
      src: cvImg3,
      amount: "4$",
    },
    {
      name: "Hamza Cover Letter",
      src: cvImg3,
      amount: "4$",
    },
    {
      name: "Nabeel Cover Letter",
      src: cvImg3,
      amount: "4$",
    },
    {
      name: "Ragheez Cover Letter",
      src: cvImg3,
      amount: "4$",
    },
    {
      name: "Ali Cover Letter",
      src: cvImg3,
      amount: "4$",
    },


    ]
    const my = [{
    }
    ]
    return (

        <div className='grid grid-cols-3 place-items-center' >
            {activeTab == 'free' ? freeTemplate.map((data, i) => (
                <Link to={`/app/coverletter/create`} onClick={() => dispatch(letterSuccess({templateId: data._id}))}>
                    <SelectCoverTempCard data={data} key={i} />
                </Link>

            )

            ) : activeTab == "premium" ? premium.map((data, i) => (
                <SelectCoverTempCard data={data} key={i} />

            )) : activeTab == "my" && my.map((data, i) => (
                <SelectCoverTempCard data={data} key={i} />

            ))
            }

        </div>



    )

}

export default SelectCoverTemplateListing;
