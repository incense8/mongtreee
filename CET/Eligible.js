import Class from "./style/Eligible.module.css";
export default function Eligible() {
  return (
    <div className={Class.Eligible_conaitner}>
      <div className={Class.Eligible_holder}>
        <div className={Class.Eligible_heading}>
          <h2>Elgibility Criteria :</h2>
        </div>
        <div className={Class.Eligible_Subheading_holder}>
          <div className={Class.Eligible_subheading}>
            <span>
              DTTE conducts 5 different tests under CET for different
              programmes. Eligibility conditions for each course are different.
              Aspirants can check their CET Delhi eligibility criteria for the
              test for which they will be appearing. Only Indian / sponsored
              candidates will be eligible for admission. Detail of eligibility
              criteria is given below:{" "}
            </span>
          </div>
        </div>
      </div>
      <div className={Class.Eligible_grid}>
                      <div className={Class.Eligible_grid_heading}>
                           <div >
                                 <span>TEST NO.</span>
                               
                               </div>    
                               <div>
                                   <span>PROGRAMME</span>
                                   
                                   </div>  
                               <div>
                                   <span>ELGIBILITY CRITERIA</span>
                                   </div>  
                      </div>
                <div className={Class.Eligible_content_holding}>

               
        <div className={Class.Eligible_InfoHolder}>
          <div className={Class.InfoNumber}>
            <span>1.</span>
          </div>
          <div className={Class.Programme_info}>
            <span>Diploma courses (Engineering & Non-Engineering)</span>
          </div>
          <div className={Class.Eligible_criteria}>
            <p>
              Candidates should pass in class 10th or Metric or its equivalent
              exam from CBSE Board and secure 35% marks in aggregate in
              Mathematics, Science and English.
            </p>
          </div>
        </div>
        <div className={Class.Eligible_InfoHolder}>
          <div className={Class.InfoNumber}>
            <span>2.</span>
          </div>
          <div className={Class.Programme_info}>
            <span>Modern Office Practice (English) or one year certificate courses (Hospitality Operations, Retail Services and Finance Executive) in WCSC</span>
          </div>
          <div className={Class.Eligible_criteria}>
            <p>
            Candidates should pass in class 12th or its equivalent from CBSE Board with minimum 45% marks (40% for candidates belonging to SC/ST Category) in aggregate in best 3 subjects including English.
            </p>
          </div>
        </div>
        <div className={Class.Eligible_InfoHolder}>
          <div className={Class.InfoNumber}>
            <span>3.</span>
          </div>
          <div className={Class.Programme_info}>
            <span>Modern Office Practice (Hindi)</span>
          </div>
          <div className={Class.Eligible_criteria}>
            <p>
            Candidate should pass in class 12th or its equivalent from CBSE Board with minimum 45% marks (40% for candidates belonging to SC/ST Category) in aggregate in best 3 subjects including Hindi.
            </p>
          </div>
        </div>
        <div className={Class.Eligible_InfoHolder}>
          <div className={Class.InfoNumber}>
            <span>4..</span>
          </div>
          <div className={Class.Programme_info}>
            <span>Pharmacy or one year certificate course: Software Testing Assistant in WCSC</span>
          </div>
          <div className={Class.Eligible_criteria}>
            <p>
            Candidates need to pass class 12th or its equivalent test recognized by the Pharmacy Council of India from CBSE with minimum 45% marks (40% for SC/ST Category) in aggregate in Physics, Chemistry & Mathematics or Biology.
            </p>
          </div>
        </div>
        <div className={Class.Eligible_InfoHolder}>
          <div className={Class.InfoNumber}>
            <span>5.</span>
          </div>
          <div className={Class.Programme_info}>
            <span>Lateral Entry</span>
          </div>
          <div className={Class.Eligible_criteria}>
            <p>
            Candidates should have cleared analogues 12th Vocational Engineering stream from CBSE or its equivalent with minimum 60% marks in aggregate. Or Candidate should have passed class 10th of its equivalent along with 2 years of ITI (Engineering) from it with minimum 60% marks in aggregate.
            </p>
          </div>
        </div>
 </div>

      </div>
    </div>
  );
}
