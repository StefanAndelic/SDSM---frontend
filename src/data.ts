import { Phase } from './components/Dashboard/models/model'

const data: Phase[] = [
  {
    title: 'Business Understanding',
    status: 'complete',
    teamMembers: ['Project Manager', 'Data Scientist', 'Application Developer'],
    href: [
      'documentation',
      'https://www.ibm.com/docs/en/spss-modeler/SaaS?topic=guide-business-understanding',
    ],
    steps: [
      {
        cardTitle: 'Determining Business Objectives',
        cardDetailedText: [
          'Gain as much insight as possible into the business goals for data mining',
          'Start gathering background information about the current business situation',
          'Document specific business objectives decided upon by key decision makers',
          'Agree upon criteria used to determine data mining success from a business perspective',
        ],
        teamMembers: ['Project Manager'],
      },
      {
        cardTitle: 'Assessing the Situation',
        cardDetailedText: [
          'Are there security and legal restrictions on the data or project results?',
          'Is everyone aligned on the project scheduling requirements?',
          'Are there requirements on results deployment (for example, publishing to the Web or reading scores into a database)?',
          'Are there economic factors that might affect the project (for example, consulting fees or competitive products)?',
          'Are there data quality assumptions?',
          'How does the project sponsor/management team expect to view the results? In other words, do they want to understand the model itself or simply view the results?',
          'Do you have all passwords required for data access?',
          'Have you verified all legal constraints on data usage?',
          'Are all financial constraints covered in the project budget?',
        ],
        teamMembers: [
          'Project Manager',
          'Data Scientist',
          'Application Developer',
        ],
      },
      {
        cardTitle: 'Determining Data Mining Goals',
        cardDetailedText: [
          'Describe the type of data mining problem, such as clustering, prediction, or classification.',
          'Document technical goals using specific units of time, such as predictions with a three-month validity.',
          'If possible, provide actual numbers for desired outcomes, such as producing churn scores for 80% of existing customers.',
        ],
        teamMembers: ['Data Scientist', 'Application Developer'],
      },
      {
        cardTitle: 'Producing a Project Goals',
        cardDetailedText: [
          'Have you discussed the project tasks and proposed plan with everyone involved?',
          'Are time estimates included for all phases or tasks?',
          'Have you included the effort and resources needed to deploy the results or business solution?',
          'Are decision points and review requests highlighted in the plan?',
          'Have you marked phases where multiple iterations typically occur, such as modeling?',
        ],
        teamMembers: ['Project Manager', 'Data Scientist'],
      },
      {
        cardTitle: 'Ready for the Next Step?',
        cardDetailedText: [
          'What does your business hope to gain from this project?',
          'How will you define the successful completion of our efforts?',
          'Do you have the budget and resources needed to reach our goals?',
          'Do you have access to all the data needed for this project?',
          'Have you and your team discussed the risks and contingencies associated with this project?',
          'How specifically can data mining help you meet your business goals?',
          'Do you have an idea about which data mining techniques might produce the best results?',
          'Have we set a measurement of data mining success?',
          'How will the modeling results be deployed? Have you considered deployment in your project plan?',
        ],
        teamMembers: ['Project Manager', 'Data Scientist'],
      },
    ],
  },
  {
    title: 'Data Understanding',
    status: 'complete',
    teamMembers: ['Project Manager', 'Data Scientist'],
    href: [
      'documentation',
      'https://www.ibm.com/docs/en/spss-modeler/SaaS?topic=guide-data-understanding',
    ],
    steps: [
      {
        cardTitle: 'Collecting Initial Data',
        cardDetailedText: [
          'Which attributes (columns) from the database seem most promising?',
          'Which attributes seem irrelevant and can be excluded?',
          'Is there enough data to draw generalizable conclusions or make accurate predictions?',
          'Are there too many attributes for your modeling method of choice?',
          'Are you merging various data sources? If so, are there areas that might pose a problem when merging?',
          'Have you considered how missing values are handled in each of your data sources?',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Describing Data',
        cardDetailedText: [
          'Amount of data',
          'Value types. e.g. numeric, categorical (string), or Boolean',
          'Coding schemes. e.g. M and F to represent male and female',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Exploring Data',
        cardDetailedText: [
          'What sort of hypotheses have you formed about the data?',
          'Which attributes seem promising for further analysis?',
          'Have your explorations revealed new characteristics about the data?',
          'How have these explorations changed your initial hypothesis?',
          'Can you identify particular subsets of data for later use?',
          'Take another look at your data mining goals. Has this exploration altered the goals?',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Verifying Data Quality',
        cardDetailedText: [
          'Missing data',
          'Data errors',
          'Measurement errors',
          'Coding inconsistencies',
          'Bad metadata',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Ready for Next Step?',
        cardDetailedText: [
          'Are all data sources clearly identified and accessed? Are you aware of any problems or restrictions?',
          'Have you identified key attributes from the available data?',
          'Did these attributes help you to formulate hypotheses?',
          'Have you noted the size of all data sources?',
          'Are you able to use a subset of data where appropriate?',
          'Have you computed basic statistics for each attribute of interest? Did meaningful information emerge?',
          'Did you use exploratory graphics to gain further insight into key attributes? Did this insight reshape any of your hypotheses?',
          'What are the data quality issues for this project? Do you have a plan to address these issues?',
          'Are the data preparation steps clear? For instance, do you know which data sources to merge and which attributes to filter or select?',
        ],
        teamMembers: ['Data Scientist', 'Application Developer'],
      },
    ],
  },
  {
    title: 'Data Prep',
    status: 'complete',
    teamMembers: ['Project Manager', 'Data Scientist'],
    href: ['documentation', 'https://google.com'],
    steps: [
      {
        cardTitle: 'Marge data set (x) and (x), Link to Cloud Pack for Data',
        cardDetailedText: [
          'Data Scientist has been notified',
          'Possible conflict could cause a downstream privacy risk.',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Selecting a Sample subset of Data',
        cardDetailedText: [
          'Selecting items - records',
          'Selecting the attributes of those items - columns',
        ],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Creating New Attributes',
        cardDetailedText: ['Aggreating records also known as Rows '],
        teamMembers: ['Data Scientist'],
      },
      {
        cardTitle: 'Sorting the Data for Modeling',
        cardDetailedText: [
          'Removing or replacing blank or missing values',
          'Splitting the data into training and tests',
        ],
        teamMembers: ['Data Scientist'],
      },
    ],
  },
  {
    title: 'Build & Train',
    status: 'complete',
    teamMembers: ['Project Manager', 'Data Scientist'],
    href: ['documentation', 'https://google.com'],
    steps: [
      {
        cardTitle: 'Determining Business Objectives',
        cardDetailedText: [
          'Start gathering background information about the current business situation.',
          'Document specific business objectives decided upon by key decision makers.',
          'Agree upon criteria used to determine data mining success from a business perspective.',
        ],
        teamMembers: ['Project Manager'],
      },
      {
        cardTitle: 'Assessing the Situation',
        cardDetailedText: [
          'What sort of data are available for analysis?',
          'Do you have the personnel needed to complete the projct',
          'What are the biggest risk factors involved?',
          'Do you have a contingency plan for each risk?',
        ],
        teamMembers: ['Project Manager'],
      },
      {
        cardTitle: 'Determining Data Mining Goals',
        cardDetailedText: [
          'Identifying high-value customers based on recent purchase data',
          'Building a model using available customer data to predict the likelihood of churn for each customer',
          'Assigning each customer a rank based on both churn propensity and customer value',
        ],
        teamMembers: ['Project Manager'],
      },
      {
        cardTitle: 'Producing Project Goals',
        cardDetailedText: [
          'Describe the methods for model assessment.',
          'Define benchmarks for evaluating success. Provide specific numbers.',
          'Define subjective measurements as best you can and determine the arbiter of success.',
          'Consider whether the successful deployment of model results is part of data mining success. Start planning now for deployment.',
        ],
        teamMembers: ['Project Manager'],
      },
      {
        cardTitle: 'Producing a Project Plan',
        cardDetailedText: [
          "At this point, you're ready to produce a plan for the data mining project.",
          'The questions you have asked so far and the business and data mining goals you have formulated will form the basis for this road map.',
        ],
        teamMembers: ['Project Manager'],
      },
    ],
  },
  {
    title: 'Evaluation',
    status: 'incomplete',
    teamMembers: [
      'Project Manager',
      'Data Scientist',
      'Application Developer',
      'Test Specialist',
    ],
    href: ['documentation', 'https://google.com'],
    steps: [
      {
        cardTitle: 'Ranking the Models',
        cardDetailedText: [
          'Because several of the initial models seemed to make business sense, ranking within that group was based on statistical criteria, ease of interpretation, and diversity. Thus, the model gave different recommendations for different situations.',
        ],
        teamMembers: ['Project Manager', 'Data Scientist'],
      },
      {
        cardTitle: 'New Questions',
        cardDetailedText: [
          'The most important question to come out of the study is, How can the e-retailer find out more about his or her customers? The information in the customer database plays an important role in forming the clusters for recommendations.',
        ],
        teamMembers: ['Project Manager', 'Data Scientist'],
      },
      {
        cardTitle: 'Determining the Next Steps',
        cardDetailedText: [
          "By now, you've produced results, evaluated your data mining experiences, and may be wondering, Where to next?",
        ],
        teamMembers: [
          'Project Manager',
          'Data Scientist',
          'Application Developer',
          'Test Specialist',
        ],
      },
      {
        cardTitle: 'Continue to the deployment phase',
        cardDetailedText: [
          'The next phase will help you to incorporate the model results into your business process and produce a final report.',
        ],
        teamMembers: ['Application Developer', 'Test Specialist'],
      },
    ],
  },
  {
    title: 'Deployment',
    status: 'incomplete',
    teamMembers: ['Project Manager'],
    href: ['documentation', 'https://google.com'],
    steps: [
      {
        cardTitle: 'Planning for Deployment',
        cardDetailedText: [
          "A successful deployment of the e-retailer's data mining results requires that the right information reaches the right people.",
        ],
        teamMembers: ['Project Manager', 'Application Developer'],
      },
      {
        cardTitle: 'Planning Monitoring and Maintenance',
        cardDetailedText: [
          'In a full-fledged deployment and integration of modeling results, your data mining work may be ongoing.',
        ],
        teamMembers: ['Application Developer', 'Test Specialist'],
      },
      {
        cardTitle: 'Producing a Final Report',
        cardDetailedText: [
          'Writing a final report not only ties up loose ends in earlier documentation, it can also be used to communicate your results.',
        ],
        teamMembers: ['Project Manager', 'Application Developer'],
      },
      {
        cardTitle: 'Conducting a Final Project Review',
        cardDetailedText: [
          'This is the final step of the CRISP-DM methodology, and it offers you a chance to formulate your final impressions and collate the lessons learned during the data mining process.',
        ],
        teamMembers: [
          'Project Manager',
          'Data Scientist',
          'Application Developer',
          'Test Specialist',
        ],
      },
    ],
  },
]

export default data
