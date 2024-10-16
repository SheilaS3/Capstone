import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Checker extends Component {
    render() {
        return (
            <div className='checker-wrapper'>
                <div className='regulation'>
                    <div className='spanish-regulation'>
                        <div className='spanish-regulation-title'>
                            MAIN SPANISH REGULATION
                        </div>

                        <div className='spanish-regulation-links'>
                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/act.php?id=BOE-A-2010-6737'
                                target='_blank'
                            >
                                <div className='title'>
                                    Law 10/2010: Transposes the III European Directive
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/act.php?id=BOE-A-2014-4742'
                                target='_blank'
                            >
                                <div className='title'>
                                    Royal Decree 304/2014: Develops Law 10/2010
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/doc.php?id=BOE-A-2018-12131'
                                target='_blank'
                            >
                                <div className='title'>
                                    Royal Decree-Law 11/2018: Transposes the IV European Directive and amends Law 10/2010
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/doc.php?id=BOE-A-2021-6872'
                                target='_blank'
                            >
                                <div className='title'>
                                    Royal Decree-Law 7/2021: Transposes the V European Directive and amends Law 10/2010
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/act.php?id=BOE-A-2022-15818'
                                target='_blank'
                            >
                                <div className='title'>
                                    Law 18/2022 “Crea y Crece”: Amends Law 10/2010
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/act.php?id=BOE-A-2023-4513'
                                target='_blank'
                            >
                                <div className='title'>
                                    Law 2/2023 "Protección del informante": Amends Law 10/2010
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.boe.es/buscar/act.php?id=BOE-A-2023-16159'
                                target='_blank'
                            >
                                <div className='title'>
                                    Royal Decree 609/2023: The Central Registry of Real Property Titles is created, and its Regulation is approved
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.sepblac.es/wp-content/uploads/2018/03/recomendaciones_sobre_medidas_de_control_interno_pbcft.pdf'
                                target='_blank'
                            >
                                <div className='title'>
                                    Sepblac Recommendations Paper
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='eu-regulation'>
                        <div className='eu-regulation-title'>
                            MAIN EU REGULATION
                        </div>

                        <div className='eu-regulation-links'>
                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/eli/dir/2015/849/oj/spa'
                                target='_blank'
                            >
                                <div className='title'>
                                    Directive (EU) 2015/849: IV Directive
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R0163'
                                target='_blank'
                            >
                                <div className='title'>
                                    Delegated Regulation (EU) 2016/1675: Amended by Delegated Regulation (EU) 2024/163 of the Comission, of December 12, 2023
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A32018L0843'
                                target='_blank'
                            >
                                <div className='title'>
                                    Directive (EU) 2018/843: V Directive
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32019R0758#:~:text=Commission%20Delegated%20Regulation%20(EU)%202019,must%20take%20to%20mitigate%20money'
                                target='_blank'
                            >
                                <div className='title'>
                                    Delegated Regulation (EU) 2019/758
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/EN/legal-content/glossary/legislative-proposals.html'
                                target='_blank'
                            >
                                <div className='title'>
                                    Package of legislative proposals of the European Commission
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.sepblac.es/wp-content/uploads/2022/09/Directrices_sobre_responsable_de_cumplimiento_ES.pdf'
                                target='_blank'
                            >
                                <div className='title'>
                                    EBA Guidelines 2022/05
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/eli/reg/2023/1113/oj'
                                target='_blank'
                            >
                                <div className='title'>
                                    Regulation (EU) 2023/1113
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1620'
                                target='_blank'
                            >
                                <div className='title'>
                                    Regulation (EU) 2024/1620
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/eli/reg/2024/1624/oj'
                                target='_blank'
                            >
                                <div className='title'>
                                    Regulation (EU) 2024/1624
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024L1640'
                                target='_blank'
                            >
                                <div className='title'>
                                    Regulation (EU) 2024/1640
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='pep-list-wrapper'>
                    <div className='pep-list'>
                        <div className='pep-title'>
                            POLITICALLY EXPOSED PERSON LISTS
                        </div>
                        
                        <div className='pep-links'>
                            <Link 
                                className='regulation-item'
                                to='https://www.tesoro.es/sites/default/files/publicaciones/Lista%20de%20PRP%20de%20la%20Uni%C3%B3n%20Europea.pdf'
                                target='_blank'
                            >
                                <div className='title'>
                                    European Union PEP list
                                </div>
                            </Link>

                            <Link 
                                className='regulation-item'
                                to='https://www.tesoro.es/sites/default/files/publicaciones/LISTA%20PEPs%20ACTUALIZADA.pdf'
                                target='_blank'
                            >
                                <div className='title'>
                                    Spanish Teasury PEP list
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}