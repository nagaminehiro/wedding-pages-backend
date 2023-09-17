// attendanceService.js

class AttendanceService {
    constructor() {
      this.attendances = []; // Array para armazenar os registros de attendance temporariamente
    }

    createAttendance(fullName, isAttending, phoneNumber, email, numAttendees) {
      // Cria um novo registro de attendance e o adiciona ao array de registros
      const newAttendance = {
        fullName,
        isAttending,
        phoneNumber,
        email,
        numAttendees,
      };
      this.attendances.push(newAttendance);
      return newAttendance;
    }

    getAttendances() {
      // Retorna todos os registros de attendance
      return this.attendances;
    }

    getAttendance(attendanceId) {
      // Retorna um registro de attendance pelo seu índice no array (0-based)
      if (attendanceId >= 0 && attendanceId < this.attendances.length) {
        return this.attendances[attendanceId];
      }
      return null;
    }

    updateAttendance(attendanceId, fullName, isAttending, phoneNumber, email, numAttendees) {
      // Atualiza um registro de attendance existente pelo seu índice no array (0-based)
      if (attendanceId >= 0 && attendanceId < this.attendances.length) {
        const updatedAttendance = {
          fullName,
          isAttending,
          phoneNumber,
          email,
          numAttendees,
        };
        this.attendances[attendanceId] = updatedAttendance;
        return updatedAttendance;
      }
      return null;
    }

    deleteAttendance(attendanceId) {
      // Remove um registro de attendance pelo seu índice no array (0-based)
      if (attendanceId >= 0 && attendanceId < this.attendances.length) {
        const deletedAttendance = this.attendances.splice(attendanceId, 1);
        return deletedAttendance[0];
      }
      return null;
    }
  }

  module.exports = AttendanceService;
