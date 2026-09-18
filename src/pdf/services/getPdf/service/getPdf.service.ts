import { Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit';


@Injectable()
export class GetPdfService {
    async execute(){
        return this.generatePDF()
    }

    async generatePDF(): Promise<Buffer> {
        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new PDFDocument({
                size: 'A4',
                bufferPages: true,
                margins: {
                    top: 30,
                    left: 30,
                    right: 30,
                    bottom: 0,
                }
            })
            doc.font('Helvetica-Bold').fontSize(20).text('RECEITUÁRIO SIMPLES', {
                align: 'center'
            });
            doc.image('src/pdf/services/getPdf/service/mcdonalds.png', 515, 25, {fit: [50, 50], align: 'center', valign: 'center'})
            doc.fontSize(12).font('Helvetica').fill('black').text('PACIENTE:', 30, 100)
            doc.rect(95, 99, 470, 12).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('PRESCRIÇÃO:', 30, 120)
            doc.rect(30, 135, 535, 400).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('NOME DO(A) MÉDICO(A):', 30, 565)
            doc.rect(175, 564, 145, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('CRM:', 325, 565)
            doc.rect(360, 564, 85, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('UF:', 450, 565)
            doc.rect(475, 564, 90, 12).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('LOCAL DE ATENDIMENTO:', 30, 585)
            doc.rect(185, 584, 220, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('CNES:', 410, 585)
            doc.rect(450, 584, 115, 12).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('ENDEREÇO:', 30, 605)
            doc.rect(105, 604, 255, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('BAIRRO:', 365, 605)
            doc.rect(420, 604, 145, 12).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('CIDADE:', 30, 625)
            doc.rect(85, 624, 145, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('UF:', 235, 625)
            doc.rect(260, 624, 90, 12).fill('#f1f1f1')
            doc.fontSize(12).font('Helvetica').fill('black').text('TELEFONE:', 355, 625)
            doc.rect(425, 624, 140, 12).fill('#f1f1f1')

            doc.fontSize(12).font('Helvetica').fill('black').text('DATA DE EMISSÃO:', 30, 645)
            doc.rect(145, 644, 145, 12).fill('#f1f1f1')

            doc.rect(174, 690, 240, 60).fillAndStroke('white', 'black')
            doc.fontSize(12).font('Helvetica').fill('black').text('ASSINATURA MÉDICO(A)', 225, 760)

            doc.fontSize(12).font('Helvetica').fill('black').text('VERSÃO 2.1 | MAIO DE 2020', 15, doc.page.height-20, {align: 'center'})
            doc.end()

            const buffer: Buffer[] = []
            doc.on('data', buffer.push.bind(buffer))
            doc.on('end', () => {
                const data = Buffer.concat(buffer)
                resolve(data)
            })
        })
        return pdfBuffer;
    };
}
