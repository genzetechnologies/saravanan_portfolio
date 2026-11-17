import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResume() {
  const doc = await PDFDocument.create();
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

  // A4 dimensions: 595.28 x 841.89 pt
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  let page = doc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const checkPageBreak = (neededHeight) => {
    if (y - neededHeight < margin) {
      page = doc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  };

  const drawBanner = (title) => {
    checkPageBreak(35);
    y -= 8;
    // Draw banner background #F1E9DC -> rgb(0.945, 0.914, 0.863)
    page.drawRectangle({
      x: margin,
      y: y - 18,
      width: contentWidth,
      height: 22,
      color: rgb(0.945, 0.914, 0.863),
    });
    page.drawText(title, {
      x: margin + 8,
      y: y - 13,
      size: 11.5,
      font: fontBold,
      color: rgb(0.12, 0.12, 0.12),
    });
    y -= 28;
  };

  const drawText = (text, options = {}) => {
    const { font = fontRegular, size = 9.5, color = rgb(0.15, 0.15, 0.15), indent = 0, lineSpacing = 13 } = options;
    const maxW = contentWidth - indent;
    
    // Simple word wrapping
    const words = text.split(' ');
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxW && currentLine) {
        checkPageBreak(lineSpacing);
        page.drawText(currentLine, { x: margin + indent, y, size, font, color });
        y -= lineSpacing;
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      checkPageBreak(lineSpacing);
      page.drawText(currentLine, { x: margin + indent, y, size, font, color });
      y -= lineSpacing;
    }
  };

  const drawBullet = (text, boldPrefix = '') => {
    checkPageBreak(16);
    page.drawText('•', { x: margin + 8, y, size: 10, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
    if (boldPrefix) {
      const fullText = boldPrefix + ' ' + text;
      drawText(fullText, { indent: 20 });
    } else {
      drawText(text, { indent: 20 });
    }
    y -= 2;
  };

  // Header
  page.drawText('SARAVANAN J', { x: margin, y, size: 20, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 18;
  page.drawText('PCB Design Engineer', { x: margin, y, size: 12, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  y -= 15;
  page.drawText('saravanan174922@gmail.com', { x: margin, y, size: 9.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
  y -= 13;
  page.drawText('Phone NO: +91 8072023856', { x: margin, y, size: 9.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
  y -= 15;

  // Professional Summary
  drawBanner('Professional Summary');
  drawText('Driven professional offering experience and extensive knowledge in power systems analysis, operations, protection and controls. Strong technical and systematic aptitude with first-class talents for analyzing, coordinating and synthesizing data. Focus on accuracy and self-monitoring to prevent or correct issues swiftly for ideal project outcomes.');
  y -= 6;

  // Work Experience
  drawBanner('Work Experience');
  drawText('PCB Design Engineer – Automotive Power Electronics', { font: fontBold, size: 10.5 });
  y -= 2;
  drawText('Sona BLW Precision Forgings Ltd (Sona Comstar)– Chengalpattu (Jan 2026–Present)', { font: fontBold, size: 10 });
  y -= 8;

  drawText('Qmax Systems India Private Limited-Chennai (Aug 2021 to December 2025)', { font: fontBold, size: 10 });
  y -= 4;

  const qmaxBullets = [
    'Process engineering change requests, updating all applicable documents to current standards.',
    'Schematic capture, layout, and component creation using Altium Designer, Allegro and PADS.',
    'Designed and Developed multilayer PCB Layouts for Consumers Electronics, Automotives and Industrial products.',
    'Experienced in Designing and Routing Complex multilayer PCBs with Stringent High Speed Requirements.',
    'Worked on boards up to 20 layers and routing of approximately 800 pins BGA component.',
    'Highly motivated with excellent knowledge in high-speed analog and digital designs.',
    'Multilayer layout experience with rigid and flex substrate technologies.',
    'Knowledge of proper layout techniques for RF designs ranging up to 2.4 GHz.',
    'Capable of effectively working with electrical, mechanical, and manufacturing engineering disciplines in a team environment with good understanding of cross functional design processes.',
    'Full understanding of PCB and PCBA manufacturing and assembly processes with the ability to incorporate requirements into design rule definitions.',
    'Knowledge of proper layout techniques for EMI and EMC Compliance and possesses functional Knowledge of IPC Guidelines.',
    'Capable of contributing to and addressing issues arising from design reviews, both internal and external.'
  ];
  qmaxBullets.forEach(b => drawBullet(b));
  y -= 6;

  // Education
  drawBanner('Education');
  // Table
  const tableX = margin;
  const colWidths = [75, 175, 195, 70];
  const rowH = 22;

  checkPageBreak(rowH * 4 + 10);
  // Header row
  let curX = tableX;
  const headers = ['YEAR', 'DEGREE', 'INSTITUTION / BOARD', 'CGPA or %'];
  headers.forEach((h, idx) => {
    page.drawRectangle({
      x: curX,
      y: y - rowH,
      width: colWidths[idx],
      height: rowH,
      borderColor: rgb(0.6, 0.6, 0.6),
      borderWidth: 0.5,
      color: rgb(0.97, 0.97, 0.97)
    });
    page.drawText(h, { x: curX + 5, y: y - 15, size: 8.5, font: fontBold });
    curX += colWidths[idx];
  });
  y -= rowH;

  const rows = [
    ['Completed', 'B.Tech, Electrical and Electronics Engineering (part time)', 'SRM Institute of Science and Technology Kattankulathur,Chengalpattu.', '8.5'],
    ['2021', 'Diploma in Electrical and Electronics Engineering', 'Sri Durga devi Polytechnic College, Kavaraipettai,Thiruvallur', '98%'],
    ['2018', 'SSLC', "St.Gabriels Higher Secondary School,Broadway Chennai.", '88.4%']
  ];

  rows.forEach(r => {
    const curH = 28;
    checkPageBreak(curH);
    curX = tableX;
    r.forEach((cell, idx) => {
      page.drawRectangle({
        x: curX,
        y: y - curH,
        width: colWidths[idx],
        height: curH,
        borderColor: rgb(0.6, 0.6, 0.6),
        borderWidth: 0.5
      });
      // Simple multi-line text if long
      if (cell.length > 35) {
        const half = Math.ceil(cell.length / 2);
        const splitIdx = cell.indexOf(' ', half - 10);
        const l1 = splitIdx > 0 ? cell.substring(0, splitIdx) : cell.substring(0, 35);
        const l2 = splitIdx > 0 ? cell.substring(splitIdx + 1) : cell.substring(35);
        page.drawText(l1, { x: curX + 5, y: y - 11, size: 8, font: fontRegular });
        page.drawText(l2, { x: curX + 5, y: y - 22, size: 8, font: fontRegular });
      } else {
        page.drawText(cell, { x: curX + 5, y: y - 17, size: 8.5, font: fontRegular });
      }
      curX += colWidths[idx];
    });
    y -= curH;
  });
  y -= 8;

  // Technical Skills
  drawBanner('Technical Skills');
  const techSkills = [
    'PCB with Digital and Analog Circuit Design.',
    'Design High Speed Interface Like SRAM, DDR ,USB,ETHERNET and LVDS.',
    'High Density Interconnect ( HDI) PCB design.',
    'Analog and Mixed- Signal PCB Design.',
    'Power Electronics PCB Design.',
    'EMI and EMC compliance.',
    'Design For Manufacturing (DFM) and Design For Test in (DFT).'
  ];
  techSkills.forEach(s => drawBullet(s));
  y -= 6;

  // Soft Skills
  drawBanner('Soft Skills');
  ['Problem Solving', 'Teamwork', 'Innovative and Critical thinking', 'Self-Driven'].forEach(s => drawBullet(s));
  y -= 6;

  // Project Highlights
  drawBanner('Project Highlights');

  drawText('1. AUTOMOTIVE PCB DESIGN', { font: fontBold, size: 10 });
  y -= 2;
  drawText('Designed an automotive power control system to efficiently distribute and regulate electrical power in a vehicle while ensuring safety, reliability, and protection of loads.');
  y -= 2;
  drawBullet('Integrated DC-DC converters (buck/boost) to derive regulated 5V/12V rails for ECU, sensors, and infotainment.', 'Power Conversion:');
  drawBullet('Implemented over-current, short-circuit, reverse polarity, and thermal protection to ensure robustness.', 'Protection Circuits:');
  y -= 6;

  drawText('2. LOAD CONTROL UNIT', { font: fontBold, size: 10 });
  y -= 2;
  drawText('Designed a Load Control Unit to monitor, prioritize, and control multiple electrical loads in an automotive/industrial system while ensuring reliability and safety.');
  y -= 2;
  drawBullet('Wide copper pours/tracks for load currents, reinforced with thermal vias.', 'High Current Paths:');
  drawBullet('Separate power ground and signal ground with a star connection to reduce noise.', 'Grounding Strategy:');
  drawBullet('Proper heat dissipation for MOSFETs and regulators (thermal vias, copper planes, heatsink pads).', 'Thermal Management:');
  drawBullet('Strategic placement of decoupling capacitors close to IC pins and EMI filters near connectors.', 'Decoupling & Filtering:');
  y -= 6;

  drawText('3. ON BOARD DIAGNOSTICS (OBD)', { font: fontBold, size: 10 });
  y -= 2;
  drawBullet('Designed a PCB for On-Board Diagnostics (OBD) system, ensuring reliable communication with the vehicle\'s ECU and stable power management under automotive conditions.');
  drawBullet('Used 8-layer PCB for clean separation of power, ground, and signals.', 'Layer Stack-Up:');
  drawBullet('Designed 12V to 5V/3.3V DC-DC regulation with reverse polarity, load dump, and cranking protection.', 'Power Management:');
  drawBullet('Optimized copper pours, thermal vias, and component placement for regulators and transceivers.', 'Thermal Management:');
  y -= 6;

  // PCB Highlights
  drawBanner('PCB Highlights');
  const pcbHighlights = [
    ['PCB Layer Count', '20 Layer'],
    ['Board Size & Component Density', '140 x280mm & 90 %'],
    ['High Voltage Range & Power Handling', '3 Phase AC Systems and 690 V DC'],
    ['Stack up and Impedance Control', 'YES'],
    ['EMC/EMI Handling', 'YES'],
    ['Isolation Techniques', 'High Voltage creepage and clearance (690 V DC)']
  ];
  pcbHighlights.forEach(([label, val]) => {
    checkPageBreak(15);
    page.drawText('•  ' + label, { x: margin + 8, y, size: 9.5, font: fontRegular });
    page.drawText('-   ' + val, { x: margin + 240, y, size: 9.5, font: fontBold });
    y -= 14;
  });
  y -= 6;

  // Achievements
  drawBanner('Achievements');
  drawBullet('Organized a Gaming Event In Annual Tech Fest');
  drawBullet('Part of Football Team in Inter School Matches');
  y -= 6;

  // Declaration
  drawBanner('Declaration');
  drawText('I, Saravanan, hereby declare that the information contained herein is true and correct to the best of my knowledge and belief.');
  y -= 20;
  checkPageBreak(25);
  page.drawText('(Saravanan J)', { x: contentWidth - 40, y, size: 10, font: fontBold });

  const pdfBytes = await doc.save();
  const outputPath = path.resolve('public/resume/Saravanan_PCB_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath, 'Size:', pdfBytes.length, 'bytes');
}

createResume().catch(err => {
  console.error('Error generating resume:', err);
  process.exit(1);
});

