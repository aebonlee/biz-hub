import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import useAOS from '../../hooks/useAOS';
import type { ReactElement } from 'react';

const SECTIONS = [
  {
    id: 'overview',
    icon: 'fa-solid fa-square-poll-vertical',
    titleKo: '양적연구 개요',
    titleEn: 'Overview of Quantitative Research',
    contentKo:
      '양적연구(Quantitative Research)는 수치 데이터를 수집·분석하여 변수 간 관계를 통계적으로 검증하는 연구방법입니다. 가설을 설정하고 이를 객관적으로 검증하는 연역적 접근을 취하며, 대규모 표본을 통해 결과의 일반화를 추구합니다. 설문조사, 실험, 2차 데이터 분석 등이 대표적인 양적연구 방법입니다.',
    contentEn:
      'Quantitative research collects and analyzes numerical data to statistically verify relationships between variables. It takes a deductive approach by setting hypotheses and objectively testing them, seeking generalization of results through large samples. Surveys, experiments, and secondary data analysis are typical quantitative research methods.',
  },
  {
    id: 'experimental-design',
    icon: 'fa-solid fa-flask',
    titleKo: '실험설계',
    titleEn: 'Experimental Design',
    contentKo:
      '실험설계는 독립변수를 조작하고 종속변수의 변화를 관찰하여 인과관계를 규명하는 방법입니다. 순수실험설계(무작위 배정), 유사실험설계(비동등 통제집단), 사전실험설계 등으로 구분됩니다. 내적 타당도와 외적 타당도를 동시에 확보하기 위해 통제 집단 설정, 무작위 배정, 사전·사후 검사 등의 기법을 활용합니다.',
    contentEn:
      'Experimental design manipulates independent variables and observes changes in dependent variables to identify causal relationships. It is classified into true experimental design (random assignment), quasi-experimental design (non-equivalent control group), and pre-experimental design. Techniques such as control group setup, random assignment, and pre-post testing are used to ensure both internal and external validity.',
  },
  {
    id: 'survey',
    icon: 'fa-solid fa-clipboard-list',
    titleKo: '설문조사방법',
    titleEn: 'Survey Methods',
    contentKo:
      '설문조사는 구조화된 질문지를 통해 대규모 응답자로부터 체계적으로 데이터를 수집하는 방법입니다. 리커트 척도, 의미차이 척도, 다항선택 등 다양한 문항 유형이 있으며, 온라인·오프라인·전화·우편 등 다양한 조사 방식을 활용합니다. 설문 문항의 타당도와 신뢰도를 사전 검증(Pilot Test)하는 것이 중요합니다.',
    contentEn:
      'Surveys systematically collect data from a large number of respondents through structured questionnaires. There are various item types including Likert scales, semantic differential scales, and multiple choice. Various survey methods such as online, offline, telephone, and mail are used. It is important to pre-validate (Pilot Test) the validity and reliability of survey items.',
  },
  {
    id: 'sampling',
    icon: 'fa-solid fa-users',
    titleKo: '표본추출과 표본크기',
    titleEn: 'Sampling and Sample Size',
    contentKo:
      '표본추출은 모집단에서 연구 대상을 선정하는 과정입니다. 확률표본추출(단순무작위, 층화, 군집, 체계적 표본추출)과 비확률표본추출(편의, 목적적, 할당, 눈덩이 표본추출)로 구분됩니다. 적정 표본크기는 신뢰수준, 오차범위, 모집단 크기, 변수 수 등을 고려하여 결정하며, G*Power 등의 도구를 활용할 수 있습니다.',
    contentEn:
      'Sampling is the process of selecting research subjects from a population. It is divided into probability sampling (simple random, stratified, cluster, systematic) and non-probability sampling (convenience, purposive, quota, snowball). Appropriate sample size is determined considering confidence level, margin of error, population size, and number of variables, using tools like G*Power.',
  },
  {
    id: 'analysis',
    icon: 'fa-solid fa-chart-bar',
    titleKo: '양적자료분석',
    titleEn: 'Quantitative Data Analysis',
    contentKo:
      '양적자료분석은 수집된 수치 데이터를 통계적 기법으로 분석하는 과정입니다. 기술통계(빈도, 평균, 표준편차), 추론통계(t-검정, ANOVA, 회귀분석, 카이제곱 검정), 고급분석(구조방정식, 요인분석, 군집분석) 등을 포함합니다. SPSS, R, AMOS 등의 통계 소프트웨어를 활용하여 분석을 수행합니다.',
    contentEn:
      'Quantitative data analysis is the process of analyzing collected numerical data using statistical techniques. It includes descriptive statistics (frequency, mean, standard deviation), inferential statistics (t-test, ANOVA, regression analysis, chi-square test), and advanced analysis (structural equation modeling, factor analysis, cluster analysis). Statistical software such as SPSS, R, and AMOS are used.',
  },
  {
    id: 'writing',
    icon: 'fa-solid fa-pen-to-square',
    titleKo: '양적연구 논문작성',
    titleEn: 'Writing Quantitative Research Papers',
    contentKo:
      '양적연구 논문은 서론(연구 배경, 목적, 가설), 이론적 배경(선행연구 검토), 연구방법(연구모형, 변수정의, 측정도구, 표본), 분석결과(기술통계, 가설검증), 결론(요약, 시사점, 한계점) 순으로 구성됩니다. APA 형식이 주로 사용되며, 표와 그림을 활용한 결과 제시가 중요합니다.',
    contentEn:
      'Quantitative research papers are structured as: Introduction (background, purpose, hypotheses), Literature Review, Research Methodology (model, variable definitions, measurement tools, sample), Results (descriptive statistics, hypothesis testing), and Conclusion (summary, implications, limitations). APA format is commonly used, and presenting results with tables and figures is important.',
  },
  {
    id: 'references',
    icon: 'fa-solid fa-book',
    titleKo: '참고문헌',
    titleEn: 'References',
    contentKo:
      '• Creswell, J. W. & Creswell, J. D. (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage Publications.\n• Bryman, A. (2016). Social Research Methods. Oxford University Press.\n• 남궁근 (2017). 사회과학연구방법론. 법문사.\n• 채서일, 김주영 (2016). 사회과학조사방법론. 비앤엠북스.\n• Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics. Sage Publications.',
    contentEn:
      '• Creswell, J. W. & Creswell, J. D. (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage Publications.\n• Bryman, A. (2016). Social Research Methods. Oxford University Press.\n• Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics. Sage Publications.\n• Babbie, E. (2020). The Practice of Social Research. Cengage Learning.\n• Hair, J. F. et al. (2019). Multivariate Data Analysis. Cengage Learning.',
  },
];

const Quantitative = (): ReactElement => {
  const { language } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title={language === 'en' ? 'Quantitative Methods' : '양적연구방법'}
        description={language === 'en' ? 'Learn quantitative research methods systematically' : '양적연구방법론의 전 과정을 체계적으로 학습합니다'}
        path="/quantitative"
      />

      <section className="page-header" style={{ borderBottom: '3px solid #1D4ED8' }}>
        <div className="container">
          <h2><i className="fa-solid fa-square-poll-vertical" style={{ color: '#1D4ED8', marginRight: '12px' }}></i>{language === 'en' ? 'Quantitative Methods' : '양적연구방법'}</h2>
          <p>{language === 'en' ? 'Systematic learning of quantitative research methodology from design to analysis' : '연구설계부터 통계분석까지, 양적연구방법론을 체계적으로 학습합니다'}</p>
        </div>
      </section>

      <section className="learning-path-content">
        <div className="container">
          <div className="learning-path-grid">
            {SECTIONS.map((section, idx) => (
              <div key={section.id} className="learning-path-card" data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className="learning-path-card-header" style={{ borderLeft: '4px solid #1D4ED8' }}>
                  <span className="learning-path-icon" style={{ color: '#1D4ED8' }}>
                    <i className={section.icon}></i>
                  </span>
                  <h3>{language === 'en' ? section.titleEn : section.titleKo}</h3>
                </div>
                <div className="learning-path-card-body">
                  {(language === 'en' ? section.contentEn : section.contentKo).split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quantitative;
