import './Timeline.css'

const Timeline = () => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Atividade Realizada</th>
                        <th>Observações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15/02/2025</td>
                        <td>08:00 - 10:00</td>
                        <td>Idéias iniciais</td>
                        <td>Início do Projeto</td>
                    </tr>
                    <tr>
                        <td>26/02/2025</td>
                        <td>17:00 - 19:00</td>
                        <td>Esboço de idéias</td>
                        <td>Início do Projeto</td>
                    </tr>
                    <tr>
                        <td>05/03/2025</td>
                        <td>16:00 - 19:00</td>
                        <td>Desenvolvimento de Idéias</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>06/03/2025</td>
                        <td>22:00 - 00:00</td>
                        <td>Criação da Identidade Visual do site</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>08/03/2025</td>
                        <td>09:00 - 12:00</td>
                        <td>Criação da Identidade Visual do site</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>11/03/2025</td>
                        <td>11:00 - 12:00</td>
                        <td>Compra de Componentes</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>14/03/2025</td>
                        <td>19:00 - 21:00</td>
                        <td>Recebimento e Análise de Componentes</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>15/03/2025</td>
                        <td>17:00 - 19:00</td>
                        <td>Pesquisa de Funcionamento</td>
                        <td>Desenvolvimento Digital</td>
                    </tr>
                    <tr>
                        <td>17/03/2025</td>
                        <td>17:00 - 19:00</td>
                        <td>Início da Codificação</td>
                        <td>Desenvolvimento do Projeto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Timeline;
